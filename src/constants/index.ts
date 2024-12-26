import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  //redux,
  tailwind,
  //nodejs,
  //mongodb,
  git,
  figma,
  //docker,
  //meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  //threejs,

} from "../assets";


import {

} from "../assets/tech/logo_uwu.jpg";


export const navLinks: TNavLink[] = [
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

const services: TService[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Quality Assurance Engineer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Graphic Designer",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
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
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
  // {
  //   name: "C++",
  //   icon: C++,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences: TExperience[] = [
  {
    title: "Web Developer",
    companyName: "Randox-Laboratory",
    icon: starbucks,
    iconBg: "#383E56",
    date: " MAY 2023-SEPTEMBER 2023",
    points: [
      " The technologies utilized include HTML/CSS, Bootstrap, PHP, and Github.",
      " This platform serves as a comprehensive solution for the medical laboratory industry",
      "I Contributed to make Some Frontend and Backend parts and also Pdf Report Generator Using dompdf in this Website .",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web developer",
    companyName: "HappyTank",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: " MAY 2024-SEPTEMBER 2024",
    points: [
      " The technologies utilized include Laravel,React, Material Tailwind,Tailwind CSS,Postman, and Github.",
      " This platform serves as a comprehensive hub for individuals in the Ornamental Fish Industry.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "I Contributed to make The Database and also Fish Compatibility Algorithm Calculation parts, Some Frontend Pages and Also Some Backend pages.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    companyName: "Portfolio",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining a web application using React.js, Typscript, javascript and other related technologies.",
      // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "As a Quality assurance role i checked all functionalities by manual testing",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   companyName: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "Randox Laboratories",
    description:
      "This platform is a complete solution for the medical laboratory industry, offering features like appointment scheduling for online, walk-in, and phone bookings, a centralized patient medical record system, streamlined report generation, and easy access to past test results for enhanced patient care and treatment.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "PHP",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "HappyTank",
    description:
      "This platform is a comprehensive hub for the ornamental fish industry, featuring an advertising space for fish shops, a community forum, an AI Chat Assistant for fish-related queries, a Fish Compatibility tool, and a knowledge base to support users.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Laravel",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "The portfolio website",
    description:
      "This portfolio website showcases my skills as a developer, built with React, TypeScript, and Tailwind CSS. It includes sections like About, Work, and Contact, highlights my professional services, and demonstrates technologies I use, all within a clean and responsive user interface.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
