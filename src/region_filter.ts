import get_entries from "./assets/scripts/resources.ts";
import get_element from "./assets/scripts/element_selector.ts";

import type { Entry } from "./assets/types/entry.ts";

let selected_region = "Any";
let selected_type = "Any";

const categories: Set<string> = new Set();
const regions: Set<string> = new Set();

const entries = get_entries();

entries.forEach((entry) => {
  entry.categories.forEach((c) => categories.add(c));
  entry.regions.forEach((r) => regions.add(r));
});

const category_container = get_element<HTMLFormElement>("#category-filter-container")
const category_template = get_element<HTMLTemplateElement>("#category-filter-template")

const region_container = get_element<HTMLFormElement>("#region-filter-container")
const region_template = get_element<HTMLTemplateElement>("#region-filter-template")

const item_container = get_element<HTMLFormElement>("#item-container")
const item_template = get_element<HTMLTemplateElement>("#item-template")

renderCategoryFilters(category_container, category_template, categories);
renderRegionFilters(region_container, region_template, regions);
renderIntoTemplate(item_container, item_template, "Any", "Any");

// ========== Setup Listeners ==========

const resource_form = get_element<HTMLFormElement>("#category-filter-container")

resource_form.addEventListener("change", (e) => {
  const target = e.target;

  if (target instanceof HTMLInputElement) {
    selected_type = target.value;
  }

  renderIntoTemplate(
    item_container,
    item_template,
    selected_type,
    selected_region,
  );
});

const region_form = get_element<HTMLFormElement>("#region-filter-container")

region_form.addEventListener("change", (e) => {
  const target = e.target;

  if (target instanceof HTMLInputElement) {
    selected_region = target.value;
  }

  renderIntoTemplate(
    item_container,
    item_template,
    selected_type,
    selected_region,
  );
});

// ========== Define Functions ==========

export function renderCategoryFilters(
  container: HTMLFormElement,
  template: HTMLTemplateElement,
  set: Set<string>,
): void {
  const sorted = Array.from(set).sort();
  sorted.unshift("Any");

  sorted.forEach((item) => {
    const clone = template.content.cloneNode(true) as DocumentFragment;
    const input_element = clone.querySelector<HTMLInputElement>(
      "#category-input",
    );
    const label_element = clone.getElementById("category-label");

    if (input_element) input_element.setAttribute("value", item);
    if (input_element) input_element.setAttribute("id", `category-${item}`);
    if (label_element) label_element.textContent = item;
    if (label_element) label_element.setAttribute("for", `category-${item}`);

    // Special Case:
    if (input_element && item === "Any") {
      input_element.checked = true;
    }

    container.appendChild(clone);
  });
}

export function renderRegionFilters(
  container: HTMLFormElement,
  template: HTMLTemplateElement,
  set: Set<string>,
): void {
  const sorted = Array.from(set).sort();
  sorted.unshift("Any");

  sorted.forEach((item) => {
    const clone = template.content.cloneNode(true) as DocumentFragment;
    const input_element = clone.querySelector<HTMLInputElement>(
      "#region-input",
    );
    const label_element = clone.getElementById("region-label");

    if (input_element) input_element.setAttribute("value", item);
    if (input_element) input_element.setAttribute("id", `region-${item}`);
    if (label_element) label_element.textContent = item;
    if (label_element) label_element.setAttribute("for", `region-${item}`);

    // Special Case:
    if (input_element && item === "Any") {
      input_element.checked = true;
    }

    container.appendChild(clone);
  });
}

export function renderIntoTemplate(
  container: HTMLFormElement,
  template: HTMLTemplateElement,
  selected_category: string,
  selected_region: string,
): void {
  container.innerHTML = "";

  const matches = entries
    .filter((i: Entry) =>
      i.categories || selected_category === "Any"
        ? selected_category === "Any" ||
          i.categories.includes(selected_category)
        : false
    )
    .filter((i: Entry) =>
      i.regions || selected_region === "Any"
        ? selected_region === "Any" || i.regions.includes(selected_region)
        : false
    );

  if (matches.length == 0) {
    container.innerText = "Nothing found :(";
    return;
  }

  matches.forEach((entry: Entry) => {
    const clone = template.content.cloneNode(true) as DocumentFragment;
    const title_url_element = clone.querySelector<HTMLElement>(
      ".card-title-url",
    );
    const region_url_element = clone.querySelector<HTMLElement>(
      ".card-region-url",
    );
    const description_element = clone.querySelector<HTMLElement>(
      ".card-description",
    );

    if (title_url_element) {
      title_url_element.setAttribute("href", entry.url ?? "");
    }
    if (title_url_element) title_url_element.textContent = entry.title ?? "";
    if (region_url_element) {
      region_url_element.textContent = entry.address ?? "";
    }
    if (region_url_element) {
      region_url_element.setAttribute(
        "href",
        `https://maps.google.com/?q=${entry.address}`,
      );
    }
    if (description_element) {
      description_element.textContent = entry.description ?? "";
    }

    container.appendChild(clone);
  });
}
