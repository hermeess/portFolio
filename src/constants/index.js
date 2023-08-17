import {
  mobile,
  creator,
  frontend,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  threejs,
  accenture,
  qavar,
  treeSg,
  graphCraft,
  learnReactWithMe,
  angular,
  arun,
  eugene,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Front End Developer",
    icon: frontend,
  },
  {
    title: "Web Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Application Developer Intern, Front End",
    company_name: "Accenture",
    icon: accenture,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - May 2023",
    points: [
      "Developed an Angular application based on UI design system and design requirements of the project.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Performed non-function tests on the frontend application to ensure it functions as intended across different browsers, and screen resolutions, and adhere to WCAG compliance.",
      "Engaged actively in sprint reviews and showcased developed micro frontend services during demonstrations.",
    ],
  },
  {
    title: "Front End Web Engineering Intern",
    company_name: "Qavar",
    icon: qavar,
    iconBg: "#E6DEDD",
    date: "May 2022 - Jul 2022",
    points: [
      "Conceptualized user-friendly interfaces through Figma, crafting high-fidelity mock-ups",
      "Established a UI library to ensure the future reusability of dynamic components.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Translated specifications into a functional psychometric test product, handling both its development and design aspects.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Hermes' work ethic stands out as one of his most remarkable qualities.",
    name: "Arun Nagarajan",
    designation: "Manager",
    company: "Accenture Technology",
    image: arun,
  },
  {
    testimonial:
      "In all, what was most impressive about Hermes is that he truly puts in his best effort into every piece of work.",
    name: "Eugene Ching",
    designation: "CEO",
    company: "Qavar",
    image: eugene,
  },
];

const projects = [
  {
    name: "GraphCraft",
    description:
      "Web-based platform that allows users to create a time-based graph based on their individual requirements.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: graphCraft,
    link_to_website: "https://graphcraft-dfc910da62e2.herokuapp.com/",
  },
  {
    name: "Learn React With Me",
    description:
      "Web page that provides foundational information abotu ReactJS targetted at beginners to learn and understand ReactJS.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: learnReactWithMe,
    link_to_website: "https://learn-react-with-me.web.app/",
  },
  {
    name: "Tree SG",
    description:
      "An android social media platform that provides a platform for users to explore and share more about their experiences visiting and admiring the nature around national parks in Singapore.",
    tags: [
      {
        name: "Android Studios",
        color: "blue-text-gradient",
      },
      {
        name: "Figma",
        color: "green-text-gradient",
      },
    ],
    image: treeSg,
    link_to_website: "",
  },
];

export { services, technologies, experiences, testimonials, projects };
