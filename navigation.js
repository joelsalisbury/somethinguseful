const menuToggle = document.querySelector(".menu-toggle");
const mainNavigation = document.querySelector("#main-navigation");

if (menuToggle && mainNavigation) {
  const mobileNavigation = window.matchMedia("(max-width: 767px)");

  function setMenuOpen(open) {
    menuToggle.setAttribute("aria-expanded", String(open));
    mainNavigation.hidden = mobileNavigation.matches && !open;
  }

  function syncNavigation() {
    const toggleHadFocus = document.activeElement === menuToggle;
    const navigationHadFocus = mainNavigation.contains(document.activeElement);
    menuToggle.hidden = !mobileNavigation.matches;
    setMenuOpen(false);

    if (mobileNavigation.matches && navigationHadFocus) {
      menuToggle.focus();
    } else if (!mobileNavigation.matches && toggleHadFocus) {
      mainNavigation.querySelector("a").focus();
    }
  }

  menuToggle.addEventListener("click", () => {
    setMenuOpen(menuToggle.getAttribute("aria-expanded") !== "true");
  });

  mainNavigation.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      setMenuOpen(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
      setMenuOpen(false);
      menuToggle.focus();
    }
  });

  mobileNavigation.addEventListener("change", syncNavigation);
  syncNavigation();
}
