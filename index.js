const sources = [
  {
    id: 0, 
    category:'highlight',
    title: 'r/transontario Gender Affirming Care Spreadsheet',
    url: 'https://docs.google.com/spreadsheets/d/111o63Tvt20heohe9KtRW_AZPBKOz4kpZ1pb7r0CJpvU/edit?gid=0#gid=0',
    location: 'Online',
    descritpion: '',
  },
  {
    id: 1,
    category:'highlight',
    title: 'Rainbow Health Directory',
    url: 'https://www.rainbowhealthontario.ca/2slgbtq-health/service-provider-directory/',
    location: 'Online',
    description: 'This directory is designed to help you find health and social service providers who have expressed a commitment to providing competent and welcoming care to 2SLGBTQ people in Ontario.',
  },
  { id: 2,
    category:'highlight',
    title: 'HQ Toronto',
    url: 'https://hqtoronto.ca/',
    location: '790 Bay St. #820, Toronto, ON M5G 1N8',
    description: 'HQ Toronto is a Healthcare center near College Station that has a variety of resouces from legal to clinical. Express STD testing, mental and social health services, alongside a once-a-month Trans I.D. legal clinic.',
  },
  { id: 3,
    category:'highlight',
    title: 'The 519',
    url: 'https://www.the519.org/',
    location: '519 Church Street, Toronto, ON M4Y 2C9',
    description: 'Major LGBTQ hub in the center of The Village. Services and supports in many different areas. Financial, newcomers to Canada, housing, family and children, health services, art and culture, and social events that happen every month.',
  },
  { id: 4,
    category:'social',
    title: 'Friends of Ruby',
    url: 'https://www.friendsofruby.ca/',
    location: '489 Queen St E LL01, Toronto, ON M5A 1V1',
    description: 'Firends of Ruby is a drop-in youth centre for 2SLGBTQIA+ individuals, ages 16-29. They provide meals, activities, support groups, free one-on-one counselling, and assistance with housing, healthcare and jobs.',
  },
  { id: 5,
    category:'',
    title: '',
    url: '',
    location: '',
    description: '',
  },
  {
    id: 6, 
    category:'',
    title: '',
    url: '',
    location: '',
    descritpion: '',
  },
  {
    id: 7, 
    category:'',
    title: '',
    url: '',
    location: '',
    descritpion: '',
  },
  {
    id: 8, 
    category:'',
    title: '',
    url: '',
    location: '',
    descritpion: '',
  },
  {
    id: 9, 
    category:'',
    title: '',
    url: '',
    location: '',
    descritpion: '',
  },
  {
    id: 10, 
    category:'',
    title: '',
    url: '',
    location: '',
    descritpion: '',
  },
  {
    id: 11, 
    category:'',
    title: '',
    url: '',
    location: '',
    descritpion: '',
  },
  {
    id: 12, 
    category:'',
    title: '',
    url: '',
    location: '',
    descritpion: '',
  },
  {
    id: 13,
    category:'',
    title: '',
    url: '',
    location: '',
    descritpion: '',
  },
  {
    id: 14, 
    category:'',
    title: '',
    url: '',
    location: '',
    descritpion: '',
  },
  {
    id: 15, 
    category:'',
    title: '',
    url: '',
    location: '',
    descritpion: '',
  },
  {
    id: 16, 
    category:'',
    title: '',
    url: '',
    location: '',
    descritpion: '',
  },
  {
    id: 17, 
    category:'',
    title: '',
    url: '',
    location: '',
    descritpion: '',
  },
  {
    id: 18, 
    category:'',
    title: '',
    url: '',
    location: '',
    descritpion: '',
  },
  {
    id: 19, 
    category:'',
    title: '',
    url: '',
    location: '',
    descritpion: '',
  }
];

let highlightedSources = ``;
let socialSources = ``;
let mentalSources = ``;
let medicalSources = ``;
let familySources = ``;
let harmhreductSources = ``;
let financialfoodSources = ``;

sources.forEach(function (source) {
let cardTemplate = `
    <div class="card">
      <div class="card-heading">
        <div class="card-title"><a href=${source.url}>${source.title}</a></div>

        <div class="card-location">${source.location}</div>
      </div>

      <div class="card-description">
        <p>${source.description}</p>
      </div>
    </div>
    `;
  if (source.category === 'highlight') {
  highlightedSources=
    highlightedSources+
    cardTemplate; 

  }
  console.log(highlightedSources)
  if (source.category === 'social') {
  socialSources =
    socialSources+
    cardTemplate;

  }
  console.log(socialSources)
});

const highlightcards = document.querySelector('.highlighted-resources');
highlightcards.innerHTML = '<h2>Highlighted Resources</h2>' + highlightedSources;

const socialcards = document.querySelector('.social-resources');
socialcards.innerHTML = '<h2>Social Resources</h2>' + socialSources;





