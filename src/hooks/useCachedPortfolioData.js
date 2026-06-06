import { useEffect, useState } from "react";

const DEFAULT_TTL_MS = 1000 * 60 * 60 * 12;

export function useCachedPortfolioData(cacheKey, initialData, ttlMs = DEFAULT_TTL_MS) {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const now = Date.now();

    try {
      const cached = window.localStorage.getItem(cacheKey);

      if (cached) {
        const parsed = JSON.parse(cached);
        const cacheMatchesCurrentData = JSON.stringify(parsed.value) === JSON.stringify(initialData);

        if (parsed.expiresAt > now && Array.isArray(parsed.value) && cacheMatchesCurrentData) {
          setData(parsed.value);
          return;
        }
      }

      window.localStorage.setItem(
        cacheKey,
        JSON.stringify({
          value: initialData,
          expiresAt: now + ttlMs,
        })
      );
    } catch {
      setData(initialData);
    }
  }, [cacheKey, initialData, ttlMs]);

  return data;
}
