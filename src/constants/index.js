import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  threejs,
  pyrogram,
  gtaicon,
  nextjs,
  marketingIcon,
  carrent,
  jobit,
  tripguide,
  python,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "project",
    title: "Projects",
  },
];

const services = [
  {
    title: "Nextjs Developer",
    icon: web,
  },
  {
    title: "  Python Developer",
    icon: mobile,
  },
  {
    title: "Gta Modding & SEO",
    icon: backend,
  },
  {
    title: "Bot's & API Development",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: " Python",
    icon: python,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "threejs",
    icon: threejs,
  },
  {
    name: "pyrogram",
    icon: pyrogram,
  },
];

const experiences = [
 {
  title: "GTA Mod Developer",
  company_name: "Freelance / Modding Community",
  icon: gtaicon,
  iconBg: "#383E56",
  date: "2020 - Present",
  points: [
        "Developing advanced GTA Pc and GTA Android mods including CLEO scripts, custom maps, animations, vehicles, UI systems, and graphic enhancement packs.",
    "Creating optimized mods and assets for both PC and Android platforms to improve gameplay experience for a wider audience.",
    "Working with game scripting, asset customization, texture optimization, and gameplay mechanics design.",
    "Building and testing custom content like missions, open-world enhancements, and realistic visual effects for GTA mods.",
    "Actively involved in modding communities, troubleshooting compatibility issues, and improving performance across devices.",
    "Currently studying reverse engineering and game architecture, preparing to explore GTA 6 modding when the game releases.",
  ],
},
  {
  title: "Python Developer",
  company_name: "Freelance / API & Bot Development",
  icon: python,
  iconBg: "#306998",
  date: "2025 - Present",
  points: [
    "Developing scalable backend applications and APIs using Python, Flask, and FastAPI for production-ready systems.",
    "Building high-performance Telegram bots using Pyrogram, supporting automation, messaging, and user interaction features.",
    "Managing and deploying REST APIs capable of handling 10,000+ active users with optimized response time and stability.",
    "Working on database integration, authentication systems, and secure API architecture for real-world applications.",
    "Designing and maintaining bot-based systems with real-time updates, scheduling, and automation workflows.",
    "Continuously improving system performance, scalability, and reliability for large user base applications.",
  ],
},
  {
  title: "React.js / Next.js Developer",
  company_name: "E2X Infotech",
  icon: nextjs,
  iconBg: "#000000",
  date: "",
  points: [
    "Developing high-performance web applications using React.js, Next.js, and the MERN stack based on specific client requirements.",
    "Implementing complex frontend animations and interactive layouts using GSAP, Framer Motion, and Aceternity UI components.",
    "Building scalable full-stack features with Node.js, Express, and MongoDB, ensuring seamless integration between frontend and backend.",
    "Developing dynamic, SEO-friendly interfaces with Next.js.",
    "Translating client design concepts into responsive, pixel-perfect user interfaces with Tailwind CSS and modern UI libraries.",
    "Optimizing application performance, including smooth scrolling with Lenis and efficient data fetching for real-time user experiences.",
  ],
},
 {
    title: "SEO, Automation & Marketing",
    company_name: "Freelance / Client Solutions",
    icon: marketingIcon,
    iconBg: "#1A1A1A",
    date: "Dec 2025 - Present",
    points: [
      "Optimizing client websites to maximize search engine visibility, organic reach, and top-tier rankings on SERPs.",
      "Successfully driving and managing high-volume web traffic through data-driven SEO and targeted promotional campaigns.",
      "Developing custom automation bots and backend APIs tailored specifically to client workflows and business growth.",
      "Optimizing high-traffic websites to maintain fast load times, seamless user experience, and top search engine rankings.",
      "Building automated systems for seamless content distribution, scheduling, and repetitive marketing workflows.",
      "Leveraging advanced analytics tools to monitor traffic patterns, optimize campaigns, and ensure sustained digital presence.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but you proved me wrong.",
    name: "Abhay",
    designation: "Client",
    company: "Nepal",
    image: "https://medical-gray-dhdqp6uxps.edgeone.app/photo_2026-05-25_02-21-19.jpg",
  },
  {
    testimonial:
      "I've never met a Bot developer who truly cares about their clients' success like you does.You are Ranking up my channel",
    name: "Amit",
    designation: "Admin",
    company: "NR Bot's",
    image: "https://vitreous-aqua-ztgx8o51bg.edgeone.app/photo_2026-05-25_02-28-13.jpg",
  },
  {
    testimonial:
      "After optimizing our website, our traffic increased by 50%. We can't thank you enough!",
    name: "Mohank",
    designation: "Marketing Head",
    company: "Affliate site",
    image: "https://rising-harlequin-34zvc53sb9.edgeone.app/photo_2026-05-25_02-28-49.jpg",
  },
];

const projects = [
  {
    name: "Custom Vector Database Engine",
    description:
      "Built a custom Vector Database Engine in Node.js with HNSW, KD-Tree, and Brute Force search algorithms. Developed a local RAG pipeline using Nomic Embed for fast, context-aware responses, along with REST APIs and a real-time 2D visualization dashboard using HTML5 Canvas.",
    tags: [
      {
        name: "Node.js,",
        color: "green-text-gradient",
      },
      {
        name: "HNSW",
        color: "pink-text-gradient",
      },
      {
        name: "KD-Tree",
        color: "blue-text-gradient",
      },
      {
        name: "Ollama,",
        color: "green-text-gradient",
      },
      {
        name: "Vector Embeddings",
        color: "pink-text-gradient",
      },
      
    ],
    image: carrent,
    source_code_link: "https://github.com/TheZenithCoder6/VectorDB-JS-.git",
  },
  {
    name: "Access System",
    description:
      "Built a high-performance Telegram bot and backend API using Pyrogram, AIOHTTP, and MongoDB to handle 10,000+ concurrent requests. Developed dynamic admin controls, automated QR payment verification, and channel access automation with real-time Telegram logging.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Pyrogram",
        color: "green-text-gradient",
      },
      {
        name: "Aiohttp",
        color: "pink-text-gradient",
      },
       {
        name: "MongoDB",
        color: "blue-text-gradient",
      },
      {
        name: "Automation",
        color: "green-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/TheZenithCoder6/Access-System",
  },
  {
    name: "Full-Stack Art Gallery Platform",
    description:
      "Developed a premium Next.js web platform with GSAP and Framer Motion animations, integrated an AI chatbot powered by Llama, and built secure Django REST APIs with JWT authentication, PostgreSQL, and Razorpay payment integration.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Django REST Framework",
        color: "green-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "pink-text-gradient",
      },
      {
        name: "GSAP",
        color: "blue-text-gradient",
      },
      {
        name: "AI Chatbot",
        color: "green-text-gradient",
      },
      {
        name: "Razorpay",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/TheZenithCoder6/finalfrontend.git",
  },
];

export { services, technologies, experiences, testimonials, projects };
