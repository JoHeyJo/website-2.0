// MIGRATED
import buglyImg from '../images/buglyImg.png';
import sharebbImg from '../images/sharebbImg.png';
import mySiteImg from '../images/mySite.png';
import { Project } from './interfaces';


export const PRODUCT: Project = {
  name: "product",
  image: "/product.png",
  cardHeader: "Product site",
  cardSummary:
    "Polished React single-page application showcases product features and details.",
  tech: "React | TypeScript | Tailwind | Vercel",
  description:
    "Polished React single-page application showcases product features and details.",
  heading: "Product site",
  specs: [
    "Smooth scroll-driven layout anchored by an embedded product demo.",
    "Responsive, dark-mode-ready design adapts across devices.",
    "Linked to supporting documentation for a more robust customer experience.",
  ],
  links: {
    github: "https://github.com/JoHeyJo/sling-it-product-site",
    demo: "https://product.slingitdrinks.com/",
  },
};

export const DOCS: Project = {
  name: "docs",
  image: "/docs.png",
  cardHeader: "React Router Application",
  cardSummary:
    "Showcases a wide range of features implemented by React's functional component system providing an engaging user experience. Integrated with AWS(S3) enabling user photo uploads.",
  tech: "React | JavaScript | Python | Flask | SQLAlchemy",
  description: "Create user, browse or add listings!",
  heading: "AirBnB clone",
  specs: [
    "Features user signup, authorization, and authentication.",
    "User actions and routes are protected with JSON Web Tokens & encrypted passwords.",
    "Relational database built with Flask and SQLAlchemy.",
  ],
  links: {
    github:
      "https://github.com/JoHeyJo/sling-it-product-site/blob/main/src/sections/Documentation.tsx",
    demo: "https://product.slingitdrinks.com/docs/?section=getting-started",
  },
};

export const BLOG: Project = {
  name: "Share BnB",
  image: "/blog.png",
  cardHeader:"Portfolio Website",
  cardSummary: "Single Page Application featuring a fully responsive design and a collection of diverse projects",
  tech: "React | TypeScript | Bootstrap",
  description: "Displays collection of diverse projects",
  heading: "Portfolio website",
  specs: [
    "Fully responsive with a polished minimalist design that focuses on functionality.",
    "Integrated with Emailjs. Allows email submissions directly from website.",
    "Interactive and dynamic content.",
  ],
  links: {
    github: "https://github.com/JoHeyJo/website-2.0",
    demo: "https://www.joannesfigueroa.com/" 
  }
}
export const BUGLY: Project = {
  name: "Bugly",
  image: "/bugly.png",
  cardHeader: "Blog Application",
  cardSummary:
    "React application that catalogs projects and corresponding bugs. Retro minimalist design aesthetic with modern dynamic functionality. Currently active and tracking progress on live projects",
  tech: "React | TypeScript | Python | Flask | SQLAlchemy | Bootstrap",
  description: "Browse projects and their corresponding bugs.",
  heading: "Blog application",
  specs: [
    "Catalogs and organizes projects and all its corresponding posts (aka bugs).",
    "Admin actions are protected in the client-side & additional server-side validation with JSON Web Tokens.",
    "Relational database built with Flask, SQLAlchemy, and SQL.",
  ],
  links: {
    github: "https://github.com/JoHeyJo/product",
    demo: "https://product-olive.vercel.app/",
  },
};
