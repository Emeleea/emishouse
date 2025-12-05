const sources = [
  {
    id: 0, 
    category: 'list',
    title: 'r/transontario Gender Affirming Care Spreadsheet',
    url: 'https://docs.google.com/spreadsheets/d/111o63tvt20heohe9ktrw_azpbkoz4kpz1pb7r0cjpvu/edit?gid=0#gid=0',
    location: 'Online',
    description: 'Community maintained effort from r/transontario to collectively catalogue existing resources and services for queer/trans people in Ontario! Is constantly expanding and updated and is always looking for contributions!'
  },
  {
    id: 1,
    category:'list',
    title: 'Rainbow Health Directory',
    url: 'https://www.rainbowhealthontario.ca/2slgbtq-health/service-provider-directory/',
    location: 'Online',
    description: 'This directory is designed to help you find health and social service providers who have expressed a commitment to providing competent and welcoming care to 2SLGBTQ people in ontario. (Taken from website)',
  },
  {
    id: "05c2",
    category: "list",
    title: "pflag",
    url: "https://pflagcanada.ca/chapters/",
    location: "Chapters across Ontario",
    description: "pflag is a Canadian organization with chapters all across Ontario. On most of these chapters pages you can find a list of Queer resources that are local to the area that would be hard to find otherwise."
  },
  { id: 2,
    category:'legal',
    title: 'HQ Toronto',
    url: 'https://hqtoronto.ca/',
    location: '790 Bay St. #820, Toronto, ON M5G 1N8',
    description: 'HQ Toronto is a healthcare center near College Station that has a variety of resouces from legal to clinical. They have STD tests, mental and social health services, alongside a once-a-month trans ID legal clinic.',
  },
  { id: 3,
    category:'social',
    title: 'The 519',
    url: 'https://www.the519.org/',
    location: '519 Church Street, Toronto, ON M4Y 2C9',
    description: 'Major LGBTQ hub in the center of the village. Services and supports in many different areas. Financial, newcomers to Canada, housing, family and children, health services, art and culture, and social events that happen multiple times a week!',
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
    title: 'Simcoe Pride',
    url: 'https://www.simcoepride.com/',
    location: 'Simcoe County',
    description: '',
  },
  {
    id: 9, 
    category:'',
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
    url: 'https://beyondtrc.com/',
    location: '15 Gallie Ct Suite 110, Barrie, ON L4M 0G6',
    description: '',
  },
  {
    id: 14, 
    category:'mental',
    title: 'Bounce Back',
    url: 'https://bouncebackontario.ca/',
    location: '',
    description: '',
  },
  {
    id: 15, 
    category:'mental',
    title: 'Gilbert Centre',
    url: 'https://www.gilbertcentre.ca/',
    location: '80 Bradford St Suite 525, Barrie, ON L4N 3A8',
    description: '',
  },
  {
    id: 17, 
    category:'mental',
    title: 'Canadian Mental Health Association',
    url: 'https://cmha.ca/',
    location: 'Multiple locations',
    description: '',
  },
  {
    id: "aa28",
    category: "hrt",
    title: "Gender Affirming Clinic | CMHA York Region & South Simcoe",
    url: "https://cmha-yr.on.ca/get-support/gender-affirming-health-clinic-12/",
    location: "Online",
    description: "Self-referral HRT for those living in the York/South Simcoe area. (12+)"
  },
  {
    id: 18, 
    category:'mental',
    title: 'LGBTQ Youthline',
    url: 'https://www.youthline.ca/',
    location: 'Online',
    description: 'YouthLine offers free support through our Ontario-wide 2SLGBTQ+ peer-support HelpLine (Taken from website)',
  },
  {
    id: 19, 
    category:'mental',
    title: '310-COPE',
    url: 'https://yssn.ca/crisis-services/310-cope/',
    location: 'Phone',
    description: '',
  },
  {
    id: "e26a",
    category: "mental",
    title: "Telecare Distress Centre of Peterborough",
    url: "https://www.telecarepeterborough.org",
    location: "Phone",
    description: "705-745-2273"
  },
  {
    id: "b3bf",
    category: "highlight",
    title: "COMET",
    url: "https://www.fairlawnchurch.ca/events/comet/2025-12-09/",
    location: "28 Fairlawn Ave, Toronto, ON M5M 1S7",
    description: "COMET (Come Out & Meet Each Tuesday) is a free after-school drop-in program for 2SLGBTQIA+ youth ages 13-18 in North Toronto and the Greater Toronto Area. Questioning youth and allied friends are also welcome. (From the website)"
  },
  {
    id: "c7a0",
    category: "social",
    title: "George Chuvalo Neighbourhood Centre",
    url: "https://www.conccommunity.org/george-chuvalo/",
    location: "50 Sousa Mendes St, Toronto, ON M6P 3Z5",
    description: "GCNC is here to provide exceptional programming and help build community-based resources. The Centre has a special focus on 2SLGBTQIA+ communities and children, youth, family programming, and is home to LOFT Kitchen Café and The Nook Children’s Program. (Taken from website)"
  }
];

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

// The for loop in question 
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
  if (source.category === 'list') {
  listSources=
    listSources+
    cardTemplate; 

  }
  if (source.category === 'social') {
  socialSources =
    socialSources+
    cardTemplate;

  }
  if (source.category === 'mental') {
  mentalSources =
    mentalSources+
    cardTemplate;

  }
  if (source.category === 'medical') {
  medicalSources=
    medicalSources+
    cardTemplate; 

  }
  if (source.category === 'legal') {
  legalSources=
    legalSources+
    cardTemplate; 

  }
  if (source.category === 'hrt') {
  hrtSources =
    hrtSources+
    cardTemplate;

  }
  if (source.category === 'family') {
  familySources =
    familySources+
    cardTemplate;

  }
  if (source.category === 'harmreduct') {
  harmreductSources =
    harmreductSources+
    cardTemplate;

  }
  if (source.category === 'housing') {
  housingSources =
    housingSources+
    cardTemplate;

  }
  if (source.category === 'financial') {
  financialSources =
    financialSources+
    cardTemplate;

  }
  if (source.category === 'food') {
  foodSources =
    foodSources+
    cardTemplate;

  }
});

//Selecting the divs in index.html and making them their respective filled variables
const highlightcards = document.querySelector('.highlighted-resources');
highlightcards.innerHTML = highlightedSources;

const listcards = document.querySelector('.list-resources');
listcards.innerHTML = listSources;

const socialcards    = document.querySelector('.social-resources');
socialcards.innerHTML = socialSources;

const mentalcards = document.querySelector('.mental-resources');
mentalcards.innerHTML = mentalSources;

const medicalcards = document.querySelector('.medical-resources');
medicalcards.innerHTML = medicalSources;

const legalcards = document.querySelector('.legal-resources');
legalcards.innerHTML = legalSources;

const hrtcards    = document.querySelector('.hrt-resources');
hrtcards.innerHTML = hrtSources;

const familycards = document.querySelector('.family-resources');
familycards.innerHTML = familySources;

const harmreductcards = document.querySelector('.harmreduct-resources');
harmreductcards.innerHTML = harmreductSources;

const housingcards = document.querySelector('.housing-resources');
housingcards.innerHTML = housingSources;

const financialcards    = document.querySelector('.financial-resources');
financialcards.innerHTML = financialSources;

const foodcards = document.querySelector('.food-resources');
foodcards.innerHTML = foodSources;


