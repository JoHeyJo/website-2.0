// MIGRATED
import { Project } from "./interfaces";

export const PRODUCT: Project = {
  name: "product",
  image: "/product.png",
  cardHeader: "Product Launch Site",
  cardSummary:
    "A single-page product showcase built with React and Vite, leading with a hero demo video and scroll through featured sections that link straight to documentation and product sign-up. Responsive and theme-aware, it turns a product pitch into a fast, self-guided walkthrough.",
  tech: "React | TypeScript | Tailwind | Vercel | AWS (Route 53)",
  description:
    "A single-page product showcase built with React and Vite. Leads with a hero demo video, scroll through featured sections that link straight to documentation and product sign-up. Responsive and theme-aware, it turns a product pitch into a fast, self-guided walkthrough.",
  heading: "Product Launch Site",
  specs: [
    <>
      <span className="fw-bold">Theme-aware dark mode:</span> Reads the
      visitor's system preference via <code>window.matchMedia</code> and
      persists manual overrides in <code>localStorage</code>, so the chosen
      theme persists across refreshes and return visits.
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
  cardHeader: "Interactive Documentation Browser",
  cardSummary:
    "An interactive documentation browser styled like an unfolding code block. A left-hand directory tree drives a dynamically rendered content panel, threaded together by a hand-drawn SVG connector that redraws itself to stay locked to whatever the user selects - giving the whole page a docs-meets-code feel that stays fluid through any reflow.",
  tech: "React | Typescript | Tailwind | Vercel",
  description:
    "An interactive documentation browser styled like an unfolding code block. A left-hand directory tree drives a dynamically rendered content panel, threaded together by a hand-drawn SVG connector that redraws itself to stay locked to whatever the user selects - giving the whole page a docs-meets-code feel that stays fluid through any reflow.",
  heading: "Interactive Documentation Browser",
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
  cardHeader: "Product Roadmap & Changelog",
  cardSummary:
    "A product updates and roadmap page that organizes every release into filterable tickets — shipped, in progress, or planned — viewable as a grid or a list. Search, status filters, and richly detailed cards turn a changelog into a browsable, self-serve product history.",
  tech: "React | TypeScript | Tailwind | Vercel",
  description:
    "A product updates and roadmap page that organizes every release into filterable tickets — shipped, in progress, or planned — viewable as a grid or a list. Search, status filters, and richly detailed cards turn a changelog into a browsable, self-serve product history.",
  heading: "Product Roadmap & Changelog",
  specs: [
    <>
      <span className="fw-bold">Grid/list view toggle:</span> Switches the same
      ticket data between a card grid and a linear list, letting users browse
      the roadmap in whichever density suits them.
    </>,
    <>
      <span className="fw-bold">Memoized search and filtering:</span> Combines
      free-text search with status filters (shipped, in progress, planned)
      utilizing <code>useMemo</code>, so results update instantly without
      recomputing on every render.
    </>,
    <>
      <span className="fw-bold">Data-driven ticket model:</span> Cards render
      from a typed schema: status, version, tags, linked resources, and
      pull-request references — populated from a JSON source. So content layer
      stays decoupled from the UI.
    </>,
  ],
  links: {
    github: "https://github.com/JoHeyJo/website-2.0",
    demo: "https://product.slingitdrinks.com/blog",
  },
};
export const BUGLY: Project = {
  name: "Bugly",
  image: "/bugly.png",
  cardHeader: "Full-Stack Bug Tracker",
  cardSummary:
    "Full-stack bug tracker with a retro-minimalist interface back by a relational Flask backend. Projects and their associated bug posts are cataloged, organized, and tracked live — with authenticated admin actions guarding every write operation behind JSON Web Tokens.",
  tech: "React | TypeScript | Python | Flask | SQLAlchemy | Bootstrap | Heroku",
  description:
    "Full-stack bug tracker with a retro-minimalist interface back by a relational Flask backend. Projects and their associated bug posts are cataloged, organized, and tracked live — with authenticated admin actions guarding every write operation behind JSON Web Tokens.",
  heading: "Full-Stack Bug Tracker",
  specs: [
    <>
      <span className="fw-bold">Token-based authentication:</span> Admin actions
      are gated client-side and validated server-side with JSON Web Tokens, so
      only authenticated users reach protected operations.
    </>,
    <>
      <span className="fw-bold">RESTful CRUD API:</span> A Flask backend exposes
      full create, read, update, and delete operations through structured REST
      routes, driving every change to projects and their bug posts.
    </>,
    <>
      <span className="fw-bold">Relational data model:</span> SQLAlchemy maps
      projects to their corresponding bug posts as related records in a SQL
      database.
    </>,
  ],
  links: {
    github: "https://github.com/JoHeyJo/product",
    demo: "https://bugly-olive.vercel.app/users/1",
  },
};
