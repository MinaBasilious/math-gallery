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

    // Anchor links for headings and figures
    const LINK_ICON =
      '<svg xmlns="http://www.w3.org/2000/svg" width="0.75em" height="0.75em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>';

    var postContent = document.querySelector(".post-content");
    if (postContent) {
      // Headings
      postContent
        .querySelectorAll("h2[id], h3[id], h4[id], h5[id], h6[id]")
        .forEach(function (h) {
          var a = document.createElement("a");
          a.className = "heading-anchor";
          a.href = "#" + h.id;
          a.setAttribute("aria-label", "Link to this section");
          a.innerHTML = LINK_ICON;
          h.appendChild(a);
        });

      // Figures (img shortcode, tikz shortcode)
      // Auto-assign ids to figures that don't have one
      var figCounter = 0;
      postContent
        .querySelectorAll(".media-figure, .tikz-wrap")
        .forEach(function (fig) {
          if (!fig.id) {
            figCounter++;
            fig.id = "fig-" + figCounter;
          }
          var a = document.createElement("a");
          a.className = "fig-anchor";
          a.href = "#" + fig.id;
          a.setAttribute("aria-label", "Link to this figure");
          a.innerHTML = LINK_ICON;
          fig.appendChild(a);
        });

      // Tables (table shortcode)
      var tblCounter = 0;
      postContent.querySelectorAll(".table-wrap").forEach(function (tbl) {
        if (!tbl.id) {
          tblCounter++;
          tbl.id = "tbl-" + tblCounter;
        }
        var a = document.createElement("a");
        a.className = "fig-anchor fig-anchor--top";
        a.href = "#" + tbl.id;
        a.setAttribute("aria-label", "Link to this table");
        a.innerHTML = LINK_ICON;
        tbl.appendChild(a);
      });
    }
  });
})();
