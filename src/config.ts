import type {
  NavBarLink,
  SocialLink,
  Identity,
  AboutPageContent,
  ProjectPageContent,
  BlogPageContent,
  HomePageContent,
} from "./types/config";

export const identity: Identity = {
  name: "Anna Kocaj",
  logo: "/avatar.png",
  email: "a.kocaj@pm.me",
};

export const navBarLinks: NavBarLink[] = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Projects",
    url: "/projects",
  },

];

export const socialLinks: SocialLink[] = [
  {
    title: "/in/nnakocaj",
    url: "https://www.linkedin.com/in/nnakocaj/",
    icon: "mdi:linkedin",
    external: true,
  },
  {
    title: "a.kocaj@pm.me",
    url: "mailto:a.kocaj@pm.me",
    icon: "mdi:email",
  },
];

// Home (/)
export const homePageContent: HomePageContent = {
  seo: {
    title: "Anna Kocaj",
    description:
      "Product designer with 3+ years of experience",
    image: identity.logo,
  },
  role: "Product Designer with Startup & Enterprise Experience",
  description:
    "Product Designer with 3+ years of experience designing for complex, technical products. Co-founder of an open-source software company. WCAG accessibility certified.",
  socialLinks: socialLinks,
  links: [
    {
      title: "View My Resume",
      url: "/resume-02.07.26.pdf",
      external: true,
    },
  ],
};

// About (/about)
export const aboutPageContent: AboutPageContent = {
  seo: {
    title: "About | Anna Kocaj",
    description:
      "I use empathy and curiosity to create intuitive, enjoyable user experiences.",
      image: identity.logo,
  },

  superpowers:`
  **Empathy** <br>
  Understanding the humans behind a product is what drew me to design, and what keeps me here. I research deeply and ask the uncomfortable questions.
  <br><br>
  **Team Work** <br>
  I'm comfortable in rooms with engineers, product managers, enterprise clients, and executives. I've pitched decisions, facilitated workshops, and iterated in public.
  <br><br>
  **Goal Focus** <br>
  Getting things done motivates me. Never heard about it, but needs to be done? I’ll sit down, do some research and deliver the best result I can.  `, // Markdown is supported

  learning:`
  **User Research** <br>
  I've run end-to-end studies, including a bachelor's thesis on usability testing, and I'm deepening my knowledge in this area. 
  <br><br>
  **Interaction Design** <br>
  Users love MOTION and it is pretty fun to make designs communicate this way. I’m not a pro, but played around with Lottie and Rive.
  `, // Markdown is supported

  hobbies: `
  Rock Climbing  |  Pottery  |  Baking  |  Photography  |  Digital Art 
  `,

  certifications: [
    {
      title: "WCAG Auditing",
      issuer: "Ministry of Digital Affairs",
    },
    {
      title: "UX-PM Level 1",
      issuer: "UXalliance",
    },
    {
      title: "English C2 Proficient",
      issuer: "EF SET",
    },
  ],

  connect: {
    description: `I'm always interested in meeting new people and learning new things. Feel free to connect with me on any of the following platforms.`, // Markdown is supported
  links: socialLinks,
  },
};

// Projects (/projects)
export const projectsPageContent: ProjectPageContent = {
  seo: {
    title: "Projects | Anna Kocaj",
    description: "Check out what I've been working on.",
    image: identity.logo,
  },
  projects: [
    // {
    //   title: "Linked Accounts Redesign",
    //   description: "Redesigned the linked accounts flow. **Onboarding time went from hours to minutes.**",
    //   image: "/portfolio.png",
    //   year: "2026",
    //   url: "/projects/linked-accounts",
    // },
    // {
    //   title: "Loading Group of Products",
    //   description: "Changed the  product-group loading from recall to recognition to reduce user effort.",
    //   image: "/portfolio.png",
    //   year: "2026",
    //   url: "/projects/loading-group",
    // },
    // {
    //   title: "Edge Cases Workshop",
    //   description: "Facilited a cross-functional workshop to surface and resolve product edge cases.",
    //   image: "/portfolio.png",
    //   year: "2026",
    //   url: "/projects/edge-cases-workshop",
    // },
    {
      title: "Fixing Extension Discoverability",
      description: "Paid extension sales grew ~7.8x in 25 days after solving a discoverability problem.",
      image: "/extension_thumbnail.png",
      year: "2026",
      url: "/projects/pixieditor-extension-store",
    },
    // {
    //   title: "PixiEditor Website",
    //   description: "Drove a major release launch for an editor with 200k+ users. Shipped it in direct collaboration with the engineering team.",
    //   image: "/pixieditor.png",
    //   year: "2025",
    //   url: "/projects/pixieditor-website",
    // },
    {
      title: "Ratusz24",
      description: "1st place at a design competition. Designed an online service that lets users handle administrative matters online.",
      image: "/ratusz_thumbnail.png",
      year: "2025",
      url: "/projects/rekord24",
    },
        {
      title: "Humi",
      description: "3rd place on local hackaton. Designed an AI-powered meeting assistant, creating the product experience and animated visual assets in Figma and Lottie",
      image: "/humi_thumbnail.png",
      year: "2025",
      url: "/projects/humi",
    },
    {
      title: "Apteczka na Szlaku",
      description: "3rd place on local hackaton. Designed for a real Polish mountain-safety initiative. I delivered the full UX from brief to prototype in 24 hours.",
      image: "/apetczka_thumbnail.png",
      year: "2024",
      url: "/projects/apteczka",
    },
  ],
};

// Blog (/blog)
export const blogPageContent: BlogPageContent = {
  seo: {
    title: "Blog | Anna Kocaj",
    description: "Thoughts, stories and ideas.",
    image: identity.logo,
  },
  subtitle: "Thoughts, stories and ideas.",};