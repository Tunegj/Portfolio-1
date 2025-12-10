import { renderProjectCards } from "./render/renderProjects.js";

const views = document.querySelectorAll("[data-view]");
const DEFAULT_VIEW = "home";

const navLinks = document.querySelectorAll("nav a[href^='#']");

/**
 *
 *  @returns {string} The current route based on the URL hash.
 */
function getCurrentRoute() {
  const { hash } = window.location;
  const route = hash.replace("#", "");

  if (!route) {
    return DEFAULT_VIEW;
  }
  return route;
}

/**
 * Show the view that matches the given name and hide all other views.
 * @param {string} name
 */
function showView(name) {
  views.forEach((view) => {
    const viewName = view.dataset.view;

    if (viewName === name) {
      view.classList.remove("view--hidden");
      view.classList.add("view--active");
    } else {
      view.classList.add("view--hidden");
      view.classList.remove("view--active");
    }
  });
}

function setActiveNav(route) {
  navLinks.forEach((link) => {
    const target = link.getAttribute("href").replace("#", "");

    if (target === route) {
      link.classList.add("nav__link--active");
    } else {
      link.classList.remove("nav__link--active");
    }
  });
}

/**
 * Handle route changes by showing the appropriate view.
 */
function handleRouteChange() {
  const route = getCurrentRoute();
  showView(route);

  if (route === "portfolio") {
    renderProjectCards();
  }

  setActiveNav(route);
}

export function initRouter() {
  handleRouteChange();

  window.addEventListener("hashchange", handleRouteChange);
}
