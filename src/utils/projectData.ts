import buglyImg from '../images/buglyImg.png';
import sharebbImg from '../images/sharebbImg.png';
import mySiteImg from '../images/mySite.png';
import { Project } from './interfaces';


export const bugly: Project = {
  name: "Bugly",
  image: buglyImg,
  cardHeader:"React Router Blog application",
  cardSummary:"Retro styled application that catalogs projects and corresponding bugs with dynamic interface. Features client-side & server-side authorization",
  tech: "React | TypeScript | Python | Flask | SQLAlchemy",
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
  cardHeader:"",
  cardSummary: "Retro styled application, catalogs projects and corresponding bugs",
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
  cardHeader:"",
  cardSummary: "Retro styled application, catalogs projects and corresponding bugs",
  tech: "React | TypeScript",
  description: "Portfolio website",
  heading: "Displays portfolio projects",
  specs: [
    "Fully responsive design.",
    "Dynamic content.",
  ],
  links: {
    github: "https://github.com/JoHeyJo/website-2.0",
    demo: "https://www.joannesfigueroa.com/" //OLD SITE LINK
  }
}
