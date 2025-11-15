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
  email: "nnakocaj@gmail.com",
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
  {
    title: "Blog",
    url: "/blog",
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
    title: "nnakocaj@gmail.com",
    url: "mailto:nnakocaj@gmail.com",
    icon: "mdi:email",
  },
];

// Home (/)
export const homePageContent: HomePageContent = {
  seo: {
    title: "Anna Kocaj",
    description:
      "I use empathy and curiosity to create intuitive, enjoyable user experiences.",
    image: identity.logo,
  },
  role: "UX/UI Designer and Engineering Student",
  description:
    "I use empathy and curiosity to create intuitive, enjoyable user experiences that not only look good but also work seamlessly.",
  socialLinks: socialLinks,
  links: [
    {
      title: "My Projects",
      url: "/projects",
    },
    {
      title: "About Me",
      url: "/about",
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
  **Empathy** 🤝 <br>
  This is what made me go into designing for users and learning their needs. Learning humans is fascinating!
  <br><br>
  **Figma** 🎨 <br>
  I LOVE this tool. When I first tried it something just clicked, now I use it daily for every design task I can.
  <br><br>
  **Team Work** 👥 <br>
  I love learning about people and I really value making new connections. Meetups, conferences, hackatons - you’ll certainly meet me there!
  <br><br>
  **Goal Focus** 💪 <br>
  Getting things done motivates me. Never heard about it, but needs to be done? I’ll sit down, do some research and deliver the best result I can.
  `, // Markdown is supported
  
  connect: {
    description: `I'm always interested in meeting new people and learning new things. Feel free to connect with me on any of the following platforms.`, // Markdown is supported
  links: socialLinks,
  },
};

// Projects (/projects)
export const projectsPageContent: ProjectPageContent = {
  seo: {
    title: "Projects | Tim Witzdam",
    description: "Check out what I've been working on.",
    image: identity.logo,
  },
  subtitle: "Check out what I've been working on.",
  projects: [
    {
      title: "Project 1",
      description: "Project 1 Description",
      image: "/demo-2.jpg",
      year: "2024",
      url: "https://github.com/TimWitzdam",
    },
    {
      title: "Project 1",
      description: "Project 1 Description",
      image: "/demo-2.jpg",
      year: "2024",
      url: "https://github.com/TimWitzdam",
    },
    {
      title: "Project 1",
      description: "Project 1 Description",
      image: "/demo-2.jpg",
      year: "2024",
      url: "https://github.com/TimWitzdam",
    },
  ],
};

// Blog (/blog)
export const blogPageContent: BlogPageContent = {
  seo: {
    title: "Blog | Tim Witzdam",
    description: "Thoughts, stories and ideas.",
    image: identity.logo,
  },
  subtitle: "Thoughts, stories and ideas.",
};
