export const experience = [
  {
    id: 1,
    position: "LEAD UI DESIGNER",
    company: "BIG DESIGN COMPANY",
    location: "NY, USA",
    description:
      "Sit cupiditate praesentium ex esse nulla Facere fuga perspiciatis eveniet provident neque Ea ratione non minus temporibus ipsum Sunt minima",
    startYear: "2018",
    endYear: "2016",
  },
  {
    id: 2,
    position: "WEB DESIGNER",
    company: "DESIGN COMPANY",
    location: "LONDON, UK",
    description:
      "Dolor id atque accusantium ut impedit odit provident soluta voluptatem Veritatis ipsam neque mollitia vero suscipit a laborum doloremque. Ipsa!",
    startYear: "2016",
    endYear: "2015",
  },
  {
    id: 3,
    position: "WEB DEVELOPER",
    company: "EXIS DEVELOPMENT",
    location: "LONDON, UK",
    description:
      "Consectetur pariatur fugiat ipsam aperiam maiores. Nisi in dignissimos debitis expedita asperiores delectus vitae corporis.",
    startYear: "2015",
    endYear: "2014",
  },
];

// Education
export const education = [
  {
    id: 1,
    degree: "MA GRAPHICS",
    institution: "ROYAL COLLEGE OF ART",
    location: "LONDON, UK",
    description:
      "Consectetur mollitia amet inventore nisi sed. Provident veritatis exercitationem eum doloremque itaque expedita? Ex voluptatem nostrum numquam illum.",
    startYear: "2014",
    endYear: "2013",
  },
  {
    id: 2,
    degree: "BA(HONS) GRAPHICS",
    institution: "CENTRAL SAINT MARTINS",
    location: "LONDON, UK",
    description:
      "Elit voluptatibus quas necessitatibus ullam tenetur provident voluptatibus. Ratione delectus lorem minus ipsa architecto. Saepe officiis sint adipisci.",
    startYear: "2013",
    endYear: "2012",
  },
  {
    id: 3,
    degree: "WEB & GRAPHICS DIPLOMA",
    institution: "TECH ARTS INSTITUTE",
    location: "CA, USA",
    description:
      "Ipsum ex exercitationem est aliquid eos saepe. Dolorum aperiam cupiditate labore vero deleniti Aut unde deserunt neque voluptas.",
    startYear: "2012",
    endYear: "2011",
  },
];

// skills
const skills = [
  { name: "react", icon: "devicon-react-original" },
  { name: "nextjs", icon: "devicon-nextjs-line" },
  { name: "javascript", icon: "devicon-javascript-plain" },
  { name: "CSS3", icon: "devicon-css3-plain" },
  { name: "typescript", icon: "devicon-typescript-original" },
  { name: "sass", icon: "devicon-sass-original" },
  { name: "tailwind", icon: "devicon-tailwindcss-plain" },
  { name: "git", icon: "devicon-git-plain" },
  { name: "webpack", icon: "devicon-webpack-plain" },
  { name: "jest", icon: "devicon-jest-plain" },
  { name: "redux", icon: "devicon-redux-plain" },
  { name: "npm", icon: "devicon-npm-original-wordmark" },
  { name: "mongodb", icon: "devicon-mongodb-plain" },
  { name: "Bootstrap", icon: "devicon-bootstrap-plain" },
];

export const skillsWithIds = skills.map((skill, index) => ({
  id: index + 1,
  name: skill.name,
  icon: skill.icon,
}));
