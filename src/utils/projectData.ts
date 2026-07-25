// MIGRATED
import buglyImg from '../images/buglyImg.png';
import sharebbImg from '../images/sharebbImg.png';
import mySiteImg from '../images/mySite.png';
import { Project } from './interfaces';


export const PRODUCT: Project = {
  name: "product",
  image: "/product.png",
  cardHeader: "Product app",
  cardSummary:
    "Component driven React single-page application. Polished interface showcases product features and details.",
  tech: "React | TypeScript | Tailwind | Vercel",
  description:
    "Component driven React single-page application. Polished interface showcases product features and details.",
  heading: "Product site",
  specs: [
    "Smooth scroll-driven layout anchored by an embedded product demo.",
    "Responsive, dark-mode-ready design adapts across devices and themes.",
    "Linked to supporting resources for a more robust customer experience.",
  ],
  links: {
    github: "https://github.com/JoHeyJo/sling-it-product-site",
    demo: "https://product.slingitdrinks.com/",
  },
};

export const DOCS: Project = {
  name: "docs",
  image: "/docs.png",
  cardHeader: "Documentation site",
  cardSummary:
    "Browser app with dynamic SVG braces anchoring user to selected menu. Redraws itself as user clicks around or window resize.",
  tech: "React | Typescript | Tailwind | Vercel",
  description: "Create user, browse or add listings!",
  heading: "AirBnB clone",
  specs: [
    "Self-measuring SVG connector so its tip stays locked to selected item through any reflow.",
    "Thoughtful, subtle, and purposeful animation ensures a smooth user experience.",
    "React, Typescript, and Tailwind leverage class driven dark mode with a single root toggle.",
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
