import { analytics } from "../data/portfolio.js";

let analyticsLoaded = false;

export function initAnalytics() {
  if (analyticsLoaded || typeof window === "undefined") {
    return;
  }

  if (analytics.googleAnalyticsId) {
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${analytics.googleAnalyticsId}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };
    window.gtag("js", new Date());
    window.gtag("config", analytics.googleAnalyticsId);
  }

  if (analytics.plausibleDomain) {
    const script = document.createElement("script");
    script.defer = true;
    script.dataset.domain = analytics.plausibleDomain;
    script.src = "https://plausible.io/js/script.js";
    document.head.appendChild(script);
  }

  analyticsLoaded = true;
}

export function trackEvent(name, params = {}) {
  if (typeof window === "undefined") {
    return;
  }

  if (window.gtag) {
    window.gtag("event", name, params);
  }

  if (window.plausible) {
    window.plausible(name, { props: params });
  }
}
