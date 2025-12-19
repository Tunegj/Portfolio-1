import { projects } from "../data/projects.js";

/**
 *
 * @returns
 */
export function renderProjectCards() {
  const container = document.querySelector("[data-project-grid]");
  if (!container) return;

  container.innerHTML = "";

  projects.forEach((project) => {
    const card = `
    <article class="project-card">
        <img src="${project.image}" alt="${project.title} project screenshot" class="project-card__img"/>

            <div class="project-card__content">
                <h3 class="project-card__title">${project.title}</h3>
                <p class="project-card__description">${project.description}</p>
             
             <div class="project-card__links">
                <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn btn--secondary">GitHub</a>
                <a href="${project.live}" target="_blank" rel="noopener noreferrer" class="btn btn--secondary">Live Site</a>
             </div>
            </div>
    </article>
    `;

    container.insertAdjacentHTML("beforeend", card);
  });
}
