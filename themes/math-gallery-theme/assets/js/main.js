(function () {
  const root = document.documentElement;
  const STORAGE_KEY = "theme";

  function getInitialTheme() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "light" || saved === "dark") return saved;
    return window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark";
  }

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    localStorage.setItem(STORAGE_KEY, theme);
  }

  // Apply immediately (before DOM ready) to avoid flash
  applyTheme(getInitialTheme());

  // Wire up button after DOM is ready
  document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("theme-toggle");
    if (!btn) return;
    btn.addEventListener("click", function () {
      const next =
        root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      applyTheme(next);
    });
  });
})();
