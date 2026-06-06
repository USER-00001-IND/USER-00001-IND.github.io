import { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Portfolio section error", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <section className="section-shell">
          <div className="mx-auto max-w-7xl">
            <div className="premium-card p-6">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-cyan-300">Error boundary</p>
              <h2 className="mt-3 text-2xl font-bold text-white">This section could not load.</h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">The rest of the portfolio is still available.</p>
            </div>
          </div>
        </section>
      );
    }

    return this.props.children;
  }
}
