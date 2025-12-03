const sources = [
  {
    id: 0, 
    category:'highlight',
    title: 'r/transontario Gender Affirming Care Spreadsheet',
    url: 'https://docs.google.com/spreadsheets/d/111o63tvt20heohe9ktrw_azpbkoz4kpz1pb7r0cjpvu/edit?gid=0#gid=0',
    location: 'online',
    description: 'test',
  },
  {
    id: 1,
    category:'highlight',
    title: 'Rainbow Health Directory',
    url: 'https://www.rainbowhealthontario.ca/2slgbtq-health/service-provider-directory/',
    location: 'online',
    description: 'This directory is designed to help you find health and social service providers who have expressed a commitment to providing competent and welcoming care to 2SLGBTQ people in ontario. (Taken from website)',
  },
  { id: 2,
    category:'highlight',
    title: 'HQ Toronto',
    url: 'https://hqtoronto.ca/',
    location: '790 Bay st. #820, Toronto, ON M5G 1N8',
    description: 'HQ Toronto is a healthcare center near College Station that has a variety of resouces from legal to clinical. Express STD testing, mental and social health services, alongside a once-a-month trans ID legal clinic.',
  },
  { id: 3,
    category:'highlight',
    title: 'the 519',
    url: 'https://www.the519.org/',
    location: '519 Church Street, Toronto, ON M4Y 2C9',
    description: 'Major LGBTQ hub in the center of the village. Services and supports in many different areas. financial, newcomers to Canada, housing, family and children, health services, art and culture, and social events that happen every month.',
  },
  { id: 4,
    category:'social',
    title: 'Friends of Ruby',
    url: 'https://www.friendsofruby.ca/',
    location: '489 Queen St E LL01, Toronto, ON M5A 1V1',
    description: 'Friends of Ruby is a drop-in youth centre for 2SLGBTQIA+ individuals, ages 16-29. They provide meals, activities, support groups, free one-on-one counselling, and assistance with housing, healthcare and jobs.',
  },
  { id: 5,
    category:'social',
    title: 'Sherbourne Health Programs',
    url: 'https://sherbourne.on.ca/community-health-programs/community-groups/',
    location: '333 Sherbourne St, Toronto, ON M5A 2S5',
    description: 'Sherbourne Hospital in Toronto has a wide variety of social programs for queer individuals.',
  },
  {
    id: 6, 
    category:'social',
    title: 'Gilbert Centre',
    url: 'https://www.gilbertcentre.ca/',
    location: '80 Bradford St Suite 525, Barrie, ON L4N 3A8',
    description: '',
  },
  {
    id: 7, 
    category:'social',
    title: 'TransQ',
    url: 'https://transq.ca/',
    location: '80 Bradford St Suite 525, Barrie, ON L4N 3A8',
    description: '',
  },
  {
    id: 8, 
    category:'social',
    title: 'Simcoe County',
    url: 'https://www.simcoepride.com/',
    location: 'Simcoe Pride',
    description: '',
  },
  {
    id: 9, 
    category:'social',
    title: '',
    url: '',
    location: '',
    description: '',
  },
  {
    id: 10, 
    category:'social',
    title: 'Gender Diverse Indigenous Mentor Program',
    url: 'https://www.youthline.ca/support_near_you/gender-diverse-indigenous-mentor-nogojiwanong-friendship-centre/',
    location: '580 Cameron St, Peterborough, ON K9J 3Z5',
    description: '',
  },
  {
    id: 11, 
    category:'social',
    title: 'Sherbourne Health: Supporting Our Youth (SOY)',
    url: 'https://sherbourne.on.ca/supporting-our-youth-soy/',
    location: '333 Sherbourne St, Toronto, ON M5A 2SS',
    description: '',
  },
  {
    id: 12, 
    category:'mental',
    title: 'Beyond Trauma',
    url: '',
    location: '',
    description: '',
  },
  {
    id: 13,
    category:'mental',
    title: 'Ontario Structured Psychotherapy Programs',
    url: '',
    location: '',
    description: '',
  },
  {
    id: 14, 
    category:'mental',
    title: 'Bounce Back',
    url: '',
    location: '',
    description: '',
  },
  {
    id: 15, 
    category:'mental',
    title: 'Gilbert Centre',
    url: '',
    location: '',
    description: '',
  },
  {
    id: 16, 
    category:'mental',
    title: 'Catholic Family Services Simcoe County',
    url: '',
    location: '',
    description: '',
  },
  {
    id: 17, 
    category:'mental',
    title: 'CMHA',
    url: '',
    location: '',
    description: '',
  },
  {
    id: 18, 
    category:'mental',
    title: 'LGBTQ Youthline',
    url: '',
    location: '',
    description: '',
  },
  {
    id: 19, 
    category:'',
    title: '',
    url: '',
    location: '',
    description: '',
  }
];

let highlightedSources = ``;
let socialSources = ``;
let mentalSources = ``;
let medicalSources = ``;
let familySources = ``;
let harmreductSources = ``;
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
  if (source.category === 'mental') {
  mentalSources =
    mentalSources+
    cardTemplate;

  }
  console.log(mentalSources)

});

const highlightcards = document.querySelector('.highlighted-resources');
highlightcards.innerHTML = '<h2>Highlighted Resources</h2>' + highlightedSources;

const socialcards = document.querySelector('.social-resources');
socialcards.innerHTML = '<h2>Social Resources</h2>' + socialSources;

const mentalcards = document.querySelector('.mental-resources');
mentalcards.innerHTML = '<h2>Mental Health Resources</h2>' + mentalSources;





