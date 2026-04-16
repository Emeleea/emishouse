async function fetchJSONData() {
  const response = await fetch('info.json');
  return response.json();
}

const sources = fetchJSONData();

// Blank variables that get filled with sources via for loop
let highlightedSources = ``;
let listSources = ``;
let socialSources = ``;
let mentalSources = ``;
let medicalSources = ``;
let legalSources = ``;
let hrtSources = ``;
let familySources = ``;
let harmreductSources = ``;
let housingSources = ``;
let financialSources = ``;
let foodSources = ``;

const tags = [
  ["highlight", highlightedSources, ".highlighted-resources"],
  ["list", listSources, ".list-resources"],
  ["social", socialSources, ".social-resources"],
  ["mental", mentalSources, ".mental-resources"],
  ["medical", medicalSources, ".medical-resources"],
  ["legal", legalSources, ".legal-resources"],
  ["hrt", hrtSources, ".hrt-resources"],
  ["family", familySources, ".family-resources"],
  ["harmreduct", harmreductSources, ".harmreduct-resources"],
  ["housing", housingSources, ".housing-resources"],
  ["financial", financialSources, ".financial-resources"],
  ["food", foodSources, ".food-resources"],
]

const locations = [
  "torontoS",
  "durhamS",
  "yorkS",
  "peelS",
  "haltonS",
  "barrieS",
  "hamiltonS",
  "niagaraS",
  "kwS",
  "londonS",
  "windsorS",
]

let torontoS = ``;
let durhamS = ``;
let yorkS = ``;
let peelS = ``;
let haltonS = ``;
let barrieS = ``;
let hamiltonS = ``;
let niagaraS = ``;
let kwS = ``;
let londonS = ``;
let windsorS = ``;

// The for loop in question 
sources.then(data => data.forEach(function(source) {
  let cardTemplate = `
    <div class="card">
      <div class="card-heading">
        <div class="card-title"><a target="_blank" href=${source.url}>${source.title}</a></div>

        <div class="card-location"><a href="https://maps.google.com/?q=${source.location}">${source.location}</a></div>
      </div>

      <div class="card-description">
        ${source.description}
      </div>
    </div>
    `;

    tags.forEach(i => {
      if (source.categories.includes(i[0].toString())) {
        i[1] += cardTemplate;
        console.log(i[1].toString())
      }
    })

  /* if (source.location.includes("Toronto")) {
  torontoS =
    torontoS+
    cardTemplate;
  }
  /*{
  if (source.location.includes("Durham")) {
  durhamS =
    durhamS+
    cardTemplate;
  }
  */
}))
  .then(() => {
    //Selecting the divs in index.html and making them their respective filled divs

  tags.forEach(i => {
    const selected = document.querySelector(i[2]);
    selected.innerHTML = i[1];
  })

    
    const torontocards = document.querySelector('.toronto');
    torontocards.innerHTML = torontoS;

    /* const durhamcards = document.querySelector('.durham');
    durhamcards.innerHTML = durhamS;
    
    const yorkcards = document.querySelector('.york');
    yorkcards.innerHTML = yorkS;
    
    const peelcards = document.querySelector('.peel');
    peelcards.innerHTML = peelS;
    
    const haltoncards = document.querySelector('.halton');
    haltoncards.innerHTML = haltonS;
    
    const torontocards = document.querySelector('.toronto');
    torontocards.innerHTML = torontoS;
    
    const torontocards = document.querySelector('.toronto');
    torontocards.innerHTML = torontoS;
    
    const torontocards = document.querySelector('.toronto');
    torontocards.innerHTML = torontoS;
    
    const torontocards = document.querySelector('.toronto');
    torontocards.innerHTML = torontoS;
    
    const torontocards = document.querySelector('.toronto');
    torontocards.innerHTML = torontoS;
    
    const torontocards = document.querySelector('.toronto');
    torontocards.innerHTML = torontoS; */
  });
