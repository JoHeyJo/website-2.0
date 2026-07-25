// MIGRATED
import { Project } from './interfaces';

export const PRODUCT: Project = {
  name: "product",
  image: "/product.png",
  cardHeader: "Product app",
  cardSummary:
    "A single-page product showcase built with React and Vite, leading with a hero demo video and scroll through featured sections that link straight to documentation and product sign-up. Responsive and theme-aware, it turns a product pitch into a fast, self-guided walkthrough.",
  tech: "React | TypeScript | Tailwind | Vercel | AWS (Route 53)",
  description:
    "A single-page product showcase built with React and Vite. Leads with a hero demo video, scroll through featured sections that link straight to documentation and product sign-up. Responsive and theme-aware, it turns a product pitch into a fast, self-guided walkthrough.",
  heading: "Product site",
  specs: [
    <>
      <span className="fw-bold">Theme-aware dark mode:</span> Reads the
      visitor's system preference via <code>window.matchMedia</code> and
      persists manual overrides in <code>localStorage</code>, so the chosen
      theme survives refreshes and return visits.
    </>,
    <>
      <span className="fw-bold">Guided navigation:</span>{" "}
      <code>React Router</code> with <code>HashLink</code> drives smooth
      scroll-to-section jumps and links each feature to its supporting
      documentation.
    </>,
    <>
      <span className="fw-bold">Production deployment:</span> Hosted on Vercel
      with a custom subdomain routed through AWS Route 53.
    </>,
  ],
  links: {
    github: "https://github.com/JoHeyJo/sling-it-product-site",
    demo: "https://product.slingitdrinks.com/",
  },
};

export const DOCS: Project = {
  name: "docs",
  image: "/docs.png",
  cardHeader: "Documentation website",
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
  name: "blog",
  image: "/blog.png",
  cardHeader:"Blog website",
  cardSummary: "Blog application that tracks product features: In progress, Planned, and Shipped.",
  tech: "React | TypeScript | Bootstrap",
  description: "Displays collection of diverse projects",
  heading: "Portfolio website",
  specs: [
    "Interactive design toggles between grid and list view.",
    "Thoughtfully designed making navigating and searching through cards a seamless experience.",
    "",
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
