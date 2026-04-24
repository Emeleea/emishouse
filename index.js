async function fetchJSONData() {
  const response = await fetch('info.json');
  return response.json();
}

const sources = fetchJSONData();
const resources = [];

let selected_region = "Any"
let selected_type = "Any"

const categories = new Set();
const regions = new Set();

class Resource {
  constructor(url, categories, regions, title, address, description) {
    this.url = url;
    this.categories = categories;
    this.regions = regions;
    this.title = title;
    this.address = address;
    this.description = description;
  }
}

// This is just functional-style syntax for a `for loop`, makes chaining
// operations together easier
sources
  .then(data => data.forEach(i => {
    if (i.categories) i.categories.forEach(i => categories.add(i))
    if (i.regions) i.regions.forEach(i => regions.add(i))
    resources.push(new Resource(
      i.url,
      i.categories,
      i.regions,
      i.title,
      i.address,
      i.description
    ));
  }))
  .then(() => {
    // this function is here because I need it to render the page *after* the
    // resources array is initialized
    renderIntoTemplate(item_container, item_template, "Any", "Any");

    const category_template = document.getElementById("category-filter-template")
    const category_container = document.getElementById("category-filter-container")

    const region_template = document.getElementById("region-filter-template")
    const region_container = document.getElementById("region-filter-container")

    renderCategoryFilters(category_container, category_template, categories)
    renderRegionFilters(region_container, region_template, regions)
  })

function renderCategoryFilters(container, template, set) {
  let sorted = Array.from(set).sort();
  sorted.unshift("Any");

  sorted.forEach(item => {
    const clone = template.content.cloneNode(true);
    const input_element = clone.getElementById('category-input')
    const label_element = clone.getElementById('category-label')

    if (input_element) input_element.setAttribute("value", item)
    if (input_element) input_element.setAttribute("id", `category-${item}`)
    if (label_element) label_element.textContent = item
    if (label_element) label_element.setAttribute("for", `category-${item}`)

    // Special Case:
    if (input_element && item === "Any") input_element.setAttribute("checked", true)

    container.appendChild(clone);
  })
}

function renderRegionFilters(container, template, set) {
  let sorted = Array.from(set).sort();
  sorted.unshift("Any")

  sorted.forEach(item => {
    const clone = template.content.cloneNode(true);
    const input_element = clone.getElementById('region-input')
    const label_element = clone.getElementById('region-label')

    if (input_element) input_element.setAttribute("value", item)
    if (input_element) input_element.setAttribute("id", `region-${item}`)
    if (label_element) label_element.textContent = item
    if (label_element) label_element.setAttribute("for", `region-${item}`)

    // Special Case:
    if (input_element && item === "Any") input_element.setAttribute("checked", true)

    container.appendChild(clone);
  })
}

function renderIntoTemplate(container, template, selected_category, selected_region) {
  container.innerHTML = '';

  const matches = resources
    .filter(i => i.categories || selected_category === "Any" ? selected_category === "Any" || i.categories.includes(selected_category) : false)
    .filter(i => i.regions || selected_region === "Any" ? selected_region === "Any" || i.regions.includes(selected_region) : false)

  matches.forEach(i => {
    const clone = template.content.cloneNode(true);
    const title_url_element = clone.querySelector('.card-title-url')
    const region_url_element = clone.querySelector('.card-region-url')
    const description_element = clone.querySelector('.card-description')

    if (title_url_element) title_url_element.setAttribute("href", i.url ?? '')
    if (title_url_element) title_url_element.textContent = i.title ?? ''
    if (region_url_element) region_url_element.textContent = i.address ?? ''
    if (region_url_element) region_url_element.setAttribute("href", `https://maps.google.com/?q=${i.address}`)
    if (description_element) description_element.textContent = i.description ?? ''

    container.appendChild(clone);
  })
}

const item_template = document.getElementById('item-template');
const item_container = document.getElementById('item-container')

const resource_form = document.getElementById("category-filter-container");
resource_form.addEventListener('change', (e) => {
  selected_type = e.target.value
  renderIntoTemplate(item_container, item_template, selected_type, selected_region)
})

const region_form = document.getElementById("region-filter-container");
region_form.addEventListener('change', (e) => {
  selected_region = e.target.value
  renderIntoTemplate(item_container, item_template, selected_type, selected_region)
})
