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

  // Wire up buttons after DOM is ready
  document.addEventListener("DOMContentLoaded", function () {
    const themeBtn = document.getElementById("theme-toggle");
    if (themeBtn) {
      themeBtn.addEventListener("click", function () {
        const next =
          root.getAttribute("data-theme") === "dark" ? "light" : "dark";
        applyTheme(next);
      });
    }

    const navToggle = document.getElementById("nav-toggle");
    const mainNav = document.getElementById("main-nav");
    if (navToggle && mainNav) {
      // Create backdrop
      const backdrop = document.createElement("div");
      backdrop.id = "nav-backdrop";
      document.body.appendChild(backdrop);

      function openNav() {
        mainNav.classList.add("nav-open");
        backdrop.classList.add("nav-backdrop-visible");
        document.body.style.overflow = "hidden";
        navToggle.setAttribute("aria-expanded", "true");
      }

      function closeNav() {
        mainNav.classList.remove("nav-open");
        backdrop.classList.remove("nav-backdrop-visible");
        document.body.style.overflow = "";
        navToggle.setAttribute("aria-expanded", "false");
      }

      navToggle.addEventListener("click", function () {
        mainNav.classList.contains("nav-open") ? closeNav() : openNav();
      });

      backdrop.addEventListener("click", closeNav);

      mainNav.addEventListener("click", function (e) {
        if (e.target.tagName === "A") closeNav();
      });
    }
  });
})();
