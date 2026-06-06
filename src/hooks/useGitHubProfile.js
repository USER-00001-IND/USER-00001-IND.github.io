import { useEffect, useState } from "react";
import { profile } from "../data/portfolio.js";

const initialState = {
  loading: true,
  error: "",
  user: null,
  repos: [],
  events: [],
};

export function useGitHubProfile() {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    const controller = new AbortController();

    async function loadGitHub() {
      try {
        const [userResponse, reposResponse, eventsResponse] = await Promise.all([
          fetch(`https://api.github.com/users/${profile.githubUsername}`, { signal: controller.signal }),
          fetch(`https://api.github.com/users/${profile.githubUsername}/repos?sort=updated&per_page=6`, { signal: controller.signal }),
          fetch(`https://api.github.com/users/${profile.githubUsername}/events/public?per_page=12`, { signal: controller.signal }),
        ]);

        if (!userResponse.ok || !reposResponse.ok) {
          throw new Error("GitHub API request failed");
        }

        const [user, repos, events] = await Promise.all([
          userResponse.json(),
          reposResponse.json(),
          eventsResponse.ok ? eventsResponse.json() : Promise.resolve([]),
        ]);

        setState({
          loading: false,
          error: "",
          user,
          repos: repos.filter((repo) => !repo.fork).slice(0, 6),
          events: Array.isArray(events) ? events : [],
        });
      } catch (error) {
        if (error.name !== "AbortError") {
          setState((current) => ({ ...current, loading: false, error: "GitHub data could not be loaded right now." }));
        }
      }
    }

    loadGitHub();

    return () => controller.abort();
  }, []);

  return state;
}
