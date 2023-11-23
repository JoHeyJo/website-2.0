export type Project = {
  name: string;
  image: string;
  tech: string;
  description: string;
  heading: string;
  specs: string[];
  links: {
    github: string,
    demo: string,
  }
}

export const Bugly: Project = {
  name: "Bugly",
  image: "./images/buglyImg.png",
  tech: "React | TypeScript | Python | Flask | SQLAlchemy",
  description: "Browse projects and their corresponding bugs.",
  heading: "Blog application",
  specs: [
    "Catalogs and organizes projects and all its corresponding posts (aka bugs).",
    "Admin actions are protected by client - side & server - side validation with JSON Web Tokens.",
    "Relational database built with Flask, SQLAlchemy, and SQL."
  ],
  links: {
    github: "https://github.com/JoHeyJo/bugly",
    demo: "https://bugly-olive.vercel.app/"
  }
}

export const shareBB: Project = {
  name: "Share BnB",
  image: "./images/sharebbImg.png",
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