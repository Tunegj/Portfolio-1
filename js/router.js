const views = document.querySelectorAll("[data-view]");
const DEFAULT_VIEW = "home";

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
    } else {
      view.classList.add("view--hidden");
    }
  });
}

/**
 * Handle route changes by showing the appropriate view.
 */
function handleRouteChange() {
  const route = getCurrentRoute();
  showView(route);
}

export function initRouter() {
  handleRouteChange();

  window.addEventListener("hashchange", handleRouteChange);
}
