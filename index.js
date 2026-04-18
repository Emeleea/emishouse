async function fetchJSONData() {
  const response = await fetch('info.json');
  return response.json();
}

const sources = fetchJSONData();
const resources = [];

const tpl = document.getElementById('item-template');
const container = document.getElementById('item-container')
let selected_location = "any"
let selected_type = "any"

class Resource {
  constructor(url, categories, regions, title, location, description) {
    this.url = url;
    this.categories = categories;
    this.regions = regions;
    this.title = title;
    this.location = location;
    this.description = description;
  }
}

// TODO: Change this into a set, and populate it during the initial parsing
// of the main resources list
const categories = [
  "highlight",
  "list",
  "social",
  "mental",
  "medical",
  "legal",
  "hrt",
  "family",
  "harmreduct",
  "housing",
  "financial",
  "food",
]

// TODO: Do the same as above, but also with locations

// This is just functional-style syntax for a `for loop`, makes chaining
// operations together easier
sources
  .then(data => data.forEach(i => {
    resources.push(new Resource(
      i.url,
      i.categories,
      i.regions,
      i.title,
      i.location,
      i.description
    ));
  }))
  .then(() => {
    // this function is here because I need it to render the page *after* the
    // resources array is initialized
    renderIntoTemplate(container, tpl, "any", "any");
  })

function renderIntoTemplate(container, template, selected_category, selected_location) {
  container.innerHTML = '';

  const matches = resources
    .filter(i => {
      if (i.categories) {
        return selected_category === "any" ? true : i.categories.includes(selected_category)
      }
    })
    .filter(i => {
      if (i.regions) {
        return selected_location === "any" ? true : i.regions.includes(selected_location)
      }
      else {
        return false
      }
    })

  matches.forEach(i => {
    const clone = template.content.cloneNode(true);
    const headingEl = clone.querySelector('.card-heading')
    const title_linkEl = clone.querySelector('.card-title-link')
    const locationEl = clone.querySelector('.card-location')
    const descriptionEl = clone.querySelector('.card-description')

    if (headingEl) headingEl.textContent = location ?? ''
    if (title_linkEl) title_linkEl.setAttribute("href", i.url ?? '')
    title_linkEl.textContent = i.title ?? ''
    if (locationEl) locationEl.textContent = i.location ?? ''
    if (descriptionEl) descriptionEl.textContent = i.description ?? ''

    container.appendChild(clone);
  })
}

const resource_form = document.getElementById("resource-filter-form");
resource_form.addEventListener('change', (e) => {
  selected_type = e.target.value
  renderIntoTemplate(container, tpl, selected_type, selected_location)
})

const location_form = document.getElementById("location-filter-form");
location_form.addEventListener('change', (e) => {
  selected_location = e.target.value
  renderIntoTemplate(container, tpl, selected_type, selected_location)
})
