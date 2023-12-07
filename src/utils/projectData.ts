import buglyImg from '../images/buglyImg.png';
import sharebbImg from '../images/sharebbImg.png';
import mySiteImg from '../images/mySite.png';
import { Project } from './interfaces';


export const bugly: Project = {
  name: "Bugly",
  image: buglyImg,
  cardHeader:"Blog Application",
  cardSummary: "React application that catalogs projects and corresponding bugs. Retro minimalist design aesthetic with modern dynamic functionality. Currently active and tracking progress on live projects",
  tech: "React | TypeScript | Python | Flask | SQLAlchemy | Bootstrap",
  description: "Browse projects and their corresponding bugs.",
  heading: "Blog application",
  specs: [
    "Catalogs and organizes projects and all its corresponding posts (aka bugs).",
    "Admin actions are protected by client-side & server-side validation with JSON Web Tokens.",
    "Relational database built with Flask, SQLAlchemy, and SQL."
  ],
  links: {
    github: "https://github.com/JoHeyJo/bugly",
    demo: "https://bugly-olive.vercel.app/"
  }
}

export const shareBB: Project = {
  name: "Share BnB",
  image: sharebbImg,
  cardHeader:"React Router Application",
  cardSummary: "Showcases a wide range of features implemented by React's functional component system providing an engaging user experience. Integrated with AWS(S3) enabling user photo uploads.",
  tech: "React | JavaScript | Python | Flask | SQLAlchemy",
  description: "Create user, browse or add listings!",
  heading: "AirBnB clone",
  specs: [
    "Features user signup, authorization, and authentication.",
    "Auth with JSON Web Tokens & password encryption with BCrypt.",
    "Relational database built with Flask and SQLAlchemy."
  ],
  links: {
    github: "https://github.com/JoHeyJo/shareBB",
    demo: "https://sharebb-fe.vercel.app/"
  }
}

export const portfolioSite: Project = {
  name: "Share BnB",
  image: mySiteImg,
  cardHeader:"Portfolio Website",
  cardSummary: "Single Page Application featuring a fully responsive design and a collection of diverse projects",
  tech: "React | TypeScript | Bootstrap",
  description: "Displays collection of diverse projects",
  heading: "Portfolio website",
  specs: [
    "Fully responsive design.",
    "Dynamic content.",
  ],
  links: {
    github: "https://github.com/JoHeyJo/website-2.0",
    demo: "https://www.joannesfigueroa.com/" //OLD SITE LINK
  }
}
