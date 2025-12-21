const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: false,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "Jun 23, 2025",
    title:"YOLOv8 — Aircraft Detection",
    image: "/images/blog1.jpg",
    link: "https://colab.research.google.com/drive/1vnLI7nZ1aV2iTX5kvqJ2K3yLxGonguGT?usp=sharing",
  },
  {
    id: 2,
    date: "Jun 21, 2025",
    title: "Machine Learning — Parkinson’s Dataset",
    image: "/images/blog2.jpg",
    link: "https://colab.research.google.com/drive/1MQUOqKXS7h5xKKtbuTw-IgQf-hqor22F?usp=sharing",
  },
  {
    id: 3,
    date: "Mar 31, 2025",
    title: "Machine Learning Classification — Learning Project",
    image: "/images/blog3.jpg",
    link: "https://colab.research.google.com/drive/1_UeWt1RB0wCXCAJH6JKNtXl4US8BfO98?usp=sharing",
  },
];

const techStack = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "Learning TypeScript"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "Sass", "CSS", "GSAP"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "Redis"],
  },
  {
    category: "Database",
    items: ["MongoDB", "PostgreSQL"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub", "Docker"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/PsylanL",
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/dylan-l%C3%B3pez-guzm%C3%A1n-2949781b9/",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/gal1.png",
  },
  {
    id: 2,
    img: "/images/gal2.jpeg",
  },
  {
    id: 3,
    img: "/images/gal3.png",
  },
  {
    id: 4,
    img: "/images/gal4.jpeg",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "Cromatizate - Daltonism Academic Project",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-12", // icon position inside Finder
      windowPosition: "top-[5vh] left-5", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "Cromatizate Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Cromatizate is an academic project that improves visual accessibility for people with color vision deficiencies (color blindness) through image processing, semantic metadata generation (JSON-LD), and the selective use of one AI model.",
          ],
        },
        {
          id: 2,
          name: "cromatizate.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/PsylanL/Cromatizate",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "cromatizate.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/cromatizate.png",
        },
        {
          id: 5,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://google.com",
          position: "top-60 right-20",
        },
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "Apple Clone - Three.js & React Project",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-92",
      windowPosition: "top-[20vh] left-7",
      children: [
        {
          id: 1,
          name: "Apple Clone Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "A Vite + React single-page experience mirroring Apple’s product storytelling with immersive 3D, smooth scroll-driven animations, and responsive design. Built for front-end learners and showcase enthusiasts who want a polished product page clone with modern web tech.",
          ],
        },
        {
          id: 2,
          name: "apple-clone.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/PsylanL/apple-clone-dlg",
          position: "top-20 left-20",
        },
        {
          id: 4,
          name: "apple-clone.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/apple-clone.png",
        },
        {
          id: 5,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://google.com",
          position: "top-60 left-5",
        },
      ],
    },

    // ▶ Project 3
    {
      id: 7,
      name: "DevOverflow - Modern Clone of StackOverflow",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[33vh] left-7",
      children: [
        {
          id: 1,
          name: "DevOverflow Clone Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Currently work-in-progress, DevOverflow is a modern clone of StackOverflow built with Next.js and Tailwind CSS. It aims to provide a seamless Q&A platform for developers, featuring user authentication, question posting, answer submission, and voting functionalities.",
          ],
        },
        {
          id: 2,
          name: "devoverflow.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/PsylanL/devflow",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "devoverflow.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/devoverflow.png",
        },
        {
          id: 5,
          name: "JSM Pro  - DevOverflow.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://www.figma.com/design/2vtjgodtBxTdg0zOUHPvXh/JSM-Pro---DevOverflow?node-id=1-49&p=f&t=tS2PahRare0nw8hn-0",
          position: "top-60 right-20",
        },
      ],
    },
    // ▶ Project 4
    {
      id: 8,
      name: "Evaluaproject - Academic Evaluation Tool",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-50 left-80",
      windowPosition: "top-[47vh] left-7",
      children: [
        {
          id: 1,
          name: "Evaluaproject - Evaluation Platform.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "EvaluaProject is an educational platform designed to help university students learn the economic and technical fundamentals of project formulation and evaluation through hands-on practice.",
            "It provides predefined templates for different productive processes, automatic calculation of financial and economic indicators, intuitive and responsive interfaces for classroom use, and visual tools that make results easier to understand.",
            "The core forecasting engine is already deployed and validated, supporting arithmetic and geometric progressions, least-squares regression, and linear regression.",
          ],
        },
        {
          id: 2,
          name: "evaluaproject.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://evaluaproject.onrender.com/",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "evaluaproject.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/evaluaproject.png",
        },
        {
          id: 5,
          name: "evaluaproject.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://google.com",
          position: "top-60 right-20",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/dylan2.jpeg",
    },
    {
      id: 2,
      name: "me-traveling.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "/images/dylan3.jpeg",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/dylan-short.png",
      description: [
        "Hey! I’m Dylan 👋, a web developer who enjoys building, interactive websites that actually work well.",
        "I specialize in JavaScript, React, and Next.js. ",
        "I love making things feel clean, smooth and fast.",
        "Outside of dev work, you'll find me playing videogames at 2AM, hanging out with my friends at some random place, or impulse-buying gadgets I absolutely convinced myself I needed 😅",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // can add `href` to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };