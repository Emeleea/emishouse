const sources = [
  {
    id: 0, 
    category: 'list',
    title: 'r/transontario Gender Affirming Care Spreadsheet',
    url: 'https://docs.google.com/spreadsheets/d/111o63Tvt20heohe9KtRW_AZPBKOz4kpZ1pb7r0CJpvU/edit?usp=sharing',
    location: "",
    description: 'Community maintained effort from r/transontario to collectively catalogue existing resources and services for queer/trans people in Ontario! Is constantly expanding and updated and is always looking for contributions!'
  },
  {
    id: 1,
    category:'list',
    title: 'Rainbow Health Directory',
    url: 'https://www.rainbowhealthontario.ca/2slgbtq-health/service-provider-directory/',
    location: "",
    description: "\"This directory is designed to help you find health and social service providers who have expressed a commitment to providing competent and welcoming care to 2SLGBTQ people in Ontario.\""
  },
  {
    id: "05c2",
    category: "list",
    title: "pflag",
    url: "https://pflagcanada.ca/chapters/",
    location: "",
    description: "pflag is a Canadian organization with chapters all across Ontario. On most of these chapters pages you can find a list of Queer resources that are local to the area." 
  },
  { id: 2,
    category:'legal',
    title: 'HQ Toronto: Trans I.D. Legal Clinic',
    url: 'https://hqtoronto.ca/transidclinic',
    location: '790 Bay St. #820, Toronto, ON M5G 1N8',
    description: 'On the last monday of each month, HQ Toronto and Kenet Family Law host a free monthly Trans ID clinic for 2STNB individuals. They will help cover costs of the forms, and the forms themselves.',
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
    location: '70 Richmond St E, Toronto, ON M5C 1N8',
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
    id: "b6c6",
    category: "family",
    title: "Families in TRANSition",
    url: "https://ctys.org/services-programs/pride-prejudice/families-in-transition-caregiver-group/",
    location: "65 Wellesley St E #300, Toronto, ON M4Y 2E3",
    description: "Close group for parents/caregivers of 2LGBTQIA+ youth (ages 13-24) who have recently learned of their child's identity and wish for more tools and information on how to support them."  },
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
    location: "",
    description: '',
  },
  {
    id: "aa28",
    category: "hrt",
    title: "Gender Affirming Clinic | CMHA York Region & South Simcoe",
    url: "https://cmha-yr.on.ca/get-support/gender-affirming-health-clinic-12/",
    location: "CMHA York Region & South Simcoe",
    description: "Self-referral HRT for those living in the York/South Simcoe area. (12+)"
  },
  {
    id: 18, 
    category:'mental',
    title: 'LGBTQ Youthline',
    url: 'https://www.youthline.ca/',
    location: "",
    description: 'YouthLine offers free support through our Ontario-wide 2SLGBTQ+ peer-support HelpLine (Taken from website)',
  },
  {
    id: 19, 
    category:'mental',
    title: '310-COPE',
    url: 'https://yssn.ca/crisis-services/310-cope/',
    location: "",
    description: '',
  },
  {
    id: "b3bf",
    category: "social",
    title: "COMET",
    url: "https://www.fairlawnchurch.ca/events/comet/2025-12-09/",
    location: "28 Fairlawn Ave, Toronto, ON M5M 1S7",
    description: "\"COMET (Come Out & Meet Each Tuesday) is a free after-school drop-in program for 2SLGBTQIA+ youth ages 13-18 in North Toronto and the Greater Toronto Area. Questioning youth and allied friends are also welcome.\""
  },
  {
    id: "c7a0",
    category: "social",
    title: "George Chuvalo Neighbourhood Centre",
    url: "https://www.conccommunity.org/george-chuvalo/",
    location: "50 Sousa Mendes St, Toronto, ON M6P 3Z5",
    description: "\"GCNC is here to provide exceptional programming and help build community-based resources. The Centre has a special focus on 2SLGBTQIA+ communities and children, youth, family programming, and is home to LOFT Kitchen Café and The Nook Children’s Program.\""
  },
  {
    id: "9673",
    category: "medical",
    title: "Trauma Therapy Program | Women's College Hospital ",
    url: "https://www.womenscollegehospital.ca/care-programs/mental-health/trauma-therapy-program/",
    location: "76 Grenville Street, Toronto, Ontario M5S 1B2",
    description: ""
  },
  {
    id: "9f75",
    category: "highlight",
    title: "Toby's Place",
    url: "https://www.rainbowcommunityplaces.org/",
    location: "33 East Rd, Scarborough, ON M1N 2Z7",
    description: "\"Toby’s Place is a weekly drop-in after-school program and safe(r) space for 2SLGBTQIA+ youth, ages 13-20, living in Scarborough and the Greater Toronto Area. Question youth and allied friends are also welcome.\""
  },
  {
    id: "7da3",
    category: "family",
    title: "Gender Creative Kids",
    url: "https://gendercreativekids.com/",
    location: "",
    description: "\"Gender Creative Kids is a reference community organization that has supported trans, non-binary, and gender-fluid youth's affirmation within their families, schools, and communities since 2013.\""
  },
  {
    id: "db0f",
    category: "family",
    title: "Gilbert Centre: Family & Youth",
    url: "https://www.gilbertcentre.ca/family-youth",
    location: "80 Bradford St Suite 525, Barrie, ON L4N 3A8",
    description: "Barrie's Gilbert Centre's family & youth programs. As of November, it is a post describing the programs as on hiatus and will be back with more supports."
  },
  {
    id: "1fde",
    category: "family",
    title: "Sherbourne Health: 2SLGBTQ Family Resources",
    url: "https://sherbourne.on.ca/community-health-programs/2slgbtq-family-resources/",
    location: "333 Sherbourne St, Toronto, ON M5A 2S5",
    description: "\"The 2SLGBTQ+ Family Resources program is here to help queer and trans people learn more about building and supporting their families.\""
  },
{
  id: "a824",
  category: "harmreduct",
  title: "Pieces to Pathways",
  url: "https://breakawaycs.ca/programs/pieces-to-pathways/",
  location: "21 Strickland Ave, Toronto, ON M6K 3E6",
  description: "\"Pieces to Pathways (P2P) is a peer-led initiative offering Canada’s first substance use support program for LGBTQIA2S+ youth ages 16-29. All services are free and delivered by queer and trans staff with their own experiences of substance use and recovery.\""
},
{
id: "7c0c",
category: "harmreduct",
title: "Regent Park Community Health Care: Harm Reduction Services & Sex Worker Drop In",
url: "https://breakawaycs.ca/programs/pieces-to-pathways/",
location: "465 Dundas St E 2nd Floor, Toronto, ON M5A 2B2",
description: "\"These workshops are conducted by Harm Reduction Workers from RPCHC. Their primary focus is on opioid overdose response.\""
},
{
id: "9388",
category: "harmreduct",
title: "HIV Legal Network: Connection, Care, Community – Harm Reduction for GBT2Q People who Use Drugs",
url: "https://www.hivlegalnetwork.ca/site/connection-care-community-harm-reduction-for-gbt2q-people-who-use-drugs/?lang=en",
location: "1240 Bay St. Suite 600, Toronto, ON M5R 2A7",
description: "An article from the HIV Legal Network which outlines a Summary Report, and an Agenda for Action regarding the problem of substance use in queer communities (primarly, gay/bisexual/trans/queer men)"
},
{
id: "15b0",
category: "housing",
title: "The 519: Housing Support Services",
url: "https://www.the519.org/programs/housing-services//",
location: "519 Church St, Toronto, ON M4Y 2C9",
description: "\"In 2022, The 519 and Homes First opened a shelter dedicated to LGBTQ+ newcomers who have arrived through a refugee pathway. The space prioritizes trans, gender diverse and non-binary folks, and is the first shelter space exclusively for 2SLGBTQ+ adults in Toronto.\""
},
{
id: "f0c9",
category: "housing",
title: "YWCA: Emergency Shelter (Woodlawn)",
url: "https://www.ywcatoronto.org/ourprograms/shelterandhousing/homelessshelter",
location: "80 Woodlawn Ave E, Toronto, ON M4T 1C1",
description: "\"In 2022, The 519 and Homes First opened a shelter dedicated to LGBTQ+ newcomers who have arrived through a refugee pathway. The space prioritizes trans, gender diverse and non-binary folks, and is the first shelter space exclusively for 2SLGBTQ+ adults in Toronto.\""
},
{
id: "f0c9",
category: "housing",
title: "YWCA: Emergency Shelters (Davenport)",
url: "https://www.ywcatoronto.org/ourprograms/shelterandhousing/homelessshelter",
location: "348 Davenport Road, Toronto On, M5R 1K6",
description: "\"In 2022, The 519 and Homes First opened a shelter dedicated to LGBTQ+ newcomers who have arrived through a refugee pathway. The space prioritizes trans, gender diverse and non-binary folks, and is the first shelter space exclusively for 2SLGBTQ+ adults in Toronto.\""
},
{
id: "c449",
category: "housing",
title: "Fred Victor",
url: "https://www.fredvictor.org",
location: "45 Queen St E, Toronto, ON M5C 1S1",
description: "\"Fred Victor is a social service charitable organization that fosters long-lasting and positive change in the lives of homeless and low-income people living across Toronto.\""
},
{
id: "bb73",
category: "housing",
title: "Friends of Ruby: Transitional Housing",
url: "https://www.friendsofruby.ca/transitional-housing/",
location: "70 Richmond St E, Toronto, ON M5C 1N8",
description: "\"A welcoming space for 2SLGBTQIA+ youth. We support two-spirit, lesbian, gay, bisexual, transgender, queer, intersex, asexual and all gender non-conforming youth (aged 16-29) by providing free counselling, housing and social services.\""
},
{
id: "5b70",
category: "financial",
title: "The 519: Sasha Hashi Bursary",
url: "https://www.the519.org/programs/the-519-sasha-hashi-bursary/",
location: "519 Church St, Toronto, ON M4Y 2C9",
description: "\"The 519 has set up a scholarship/bursary at Toronto Metropolitan University (TMU, formerly Ryerson University) to honour the memory of our beloved staff member, community leader, sibling, and a proud TMU graduate Sasha Hashi.\""
},
{
id: "5caf",
category: "financial",
title: "The 519: Project Unlock",
url: "https://www.the519.org/programs/project-unlock/",
location: "519 Church St, Toronto, ON M4Y 2C9",
description: "\"Project Unlock is an exciting collaboration between The 519 and Scotiabank designed specifically to help LGBTQ+ newcomers build economic resilience in Canada. It is a unique program focused not only on helping you with job readiness but also on supporting your overall sense of wellness as you settle into your new home.\""
},

{
id: "4bf9",
category: "financial",
title: "The 519: Tax Clinic",
url: "https://www.the519.org/programs/tax-clinic/",
location: "519 Church St, Toronto, ON M4Y 2C9",
description: "Opens again early March 2026"
},
{
id: "3903",
category: "food",
title: "Friends of Ruby: Grocery Day",
url: "https://www.friendsofruby.ca/programs-and-services/drop-in-services-and-programming/",
location: "70 Richmond St E, Toronto, ON M5C 1N8",
description: "\"Supplemental Groceries Update: Youth can now access groceries directly through the Drop-In—no appointment needed. Groceries are available Monday to Friday from 11:00 AM to 6:00 PM. While our Drop-In Centre no longer serves ready-to-eat meals, we remain committed to supporting food access. If you need help navigating local food banks, please contact us at drop-in@friendsofruby.ca. A huge thank you to @MazonCanada for supporting our Food Access programs!\""
},
{
id: "9362",
category: "hrt",
title: "SAFER SIX DOWNTOWN",
url: "https://www.safersix.ca/gender-affirming-hormones",
location: "26 Dalhousie St, Toronto, ON M5B 2A5",
description: "Toronto's Inclusive Health Clinic'. One of the only self-Informed clinics of Core Toronto. If you are starting your transition journey now and would like to be proactive, I recommend booking an appointment with them ASAP. "
},
{
id: "9362",
category: "hrt",
title: "SAFER SIX WEST",
url: "https://www.safersix.ca/gender-affirming-hormones",
location: "27 Roncesvalles Ave Unit 505, Toronto, ON M6R 3B2",
description: "Toronto's Inclusive Health Clinic'. One of the only self-Informed clinics of Core Toronto. If you are starting your transition journey now and would like to be proactive, I recommend booking an appointment with them ASAP. "
},
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

        <div class="card-location"><a href="https://maps.google.com/?q=${source.location}">${source.location}</a></div>
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


