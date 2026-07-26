// MIGRATED
import { Project } from "./interfaces";

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
    "An interactive documentation browser styled like an unfolding code block. A left-hand directory tree drives a dynamically rendered content panel, threaded together by a hand-drawn SVG connector that redraws itself to stay locked to whatever the user selects - giving the whole page a docs-meets-code feel that stays fluid through any reflow.",
  tech: "React | Typescript | Tailwind | Vercel",
  description: "Create user, browse or add listings!",
  heading: "AirBnB clone",
  specs: [
    <>
      <span className="fw-bold">Self-measuring SVG connector:</span> A brace
      anchored to the active menu item measures its own geometry and redraws so
      its tip stays locked to the target through clicks, reflows, and window
      resizes.
    </>,
    <>
      <span className="fw-bold">Dynamic-detail navigation:</span> A directory
      tree on the left renders content, with
      <code>lucide-react</code> and FontAwesome icons dynamically marking the
      selected directory giving it a more immersive aesthetic.
    </>,
    <>
      <span className="fw-bold">Purpose-driven design:</span> The interface
      mirrors a docs-meets-code aesthetic, with navigation instructions for the
      product surfaced in "code blocks" — the way a developer reads and
      implements from documentation — while self-referencing links resolve terms
      in place to keep the content lean.
    </>,
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
  cardHeader: "Blog website",
  cardSummary:
    "Blog application that tracks product features: In progress, Planned, and Shipped.",
  tech: "React | TypeScript | Tailwind",
  description: "Displays collection of diverse projects",
  heading: "Portfolio website",
  specs: [
    "Interactive design toggles between grid and list view.",
    "Thoughtfully designed making navigating and searching through cards a seamless experience.",
    "",
  ],
  links: {
    github: "https://github.com/JoHeyJo/website-2.0",
    demo: "https://www.joannesfigueroa.com/",
  },
};
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
