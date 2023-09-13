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
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
  threejs,
  bik,
  potluck,
  srm,
  upjao,
  scaape,
  voice4mutes,
  holagraph,
  firebase,
  psql,
  es,
  aws,
  dot,
  c19,
  nutrical,
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
    id: "/src/assets/anish_dutta.pdf",
    title: "Resume",
    externalLink: true,
  },
];

const services = [
  {
    title: "Backend Development",
    icon: backend,
  },
  {
    title: "Devops",
    icon: creator,
  },

  {
    title: "Web Developement",
    icon: web,
  },

  {
    title: "App Development",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "TypeScript",
    icon: typescript,
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
    name: "git",
    icon: git,
  },

  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "PsSQL",
    icon: psql,
  },
  {
    name: "Elastic search",
    icon: es,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "SDE",
    company_name: "Bik (Formerly Bikayi)",
    icon: bik,
    iconBg: "#000000",
    date: "Feb 2022 - Present",
    points: [
      "Orchestrated cross-functional teamwork to build a robust foundation for core product features, resulting in a successful launch with over 1 million visits within the first month.",
      "Designed and executed a scalable system to facilitate the seamless migration of Shopify segments, encompassing a vast dataset of more than 10 million entries, to our platform.",
      "Prioritised and resolve critical production issues within an average of 30 minutes, exceeding the company's SLA of 1 hour.",
      "Implemented indexing and query optimization resulting in a decrease of database response time by 70% within 2 weeks.",
    ],
  },
  {
    title: "WEB Developer Intern",
    company_name: "Upjao",
    icon: upjao,
    iconBg: "#FFFFFF",
    date: "Dec 2021 - Feb 2022",
    points: [
      "Architected an innovative, custom CMS-integrated corporate page for www.upjao.ai using html, css , jQuery and PHP for cms.",
      "Successfully spearheaded the implementation of DevOps practices for the product, resulting in improved collaboration, streamlined workflows, and accelerated software delivery",
    ],
  },
  {
    title: "FULL-STACK Developer",
    company_name: "Potluck",
    icon: potluck,
    iconBg: "#000000",
    date: "March 2021 - Dec 2023",
    points: [
      "Spearheaded the end-to-end design and development of the microservice backend for the Potluck Go product. ",
      "Developed and maintained huge e-commerce web platforms and corporate pages.",
      "Written custom components using velo apis for wix e-commerce",
      "Successfully managed a critical school admission portal powered by PHP and Node.js. Diligently addressed bugs. Implemented responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "B-Tech CSE with specialization in software engineering",
    company_name: "SRM IST",
    icon: srm,
    iconBg: "#FFFFFF",
    date: "April 2019 - April 2022",
    points: [
      "Graduated with a Bachelor of Science in Computer Science with a CGPA of 9",
      "Secured funding from SIIC innovation and incubation centre",
      "Led and Completed multiple projects including CRM systems, E- commerce Apps, applications, SEO and more.",
    ],
  },
];

const testimonials = [
  {
    testimonial: [
      "Secured an honorable mention and 1000 dollars cash prize in AWS Graviton Hackathon.",
      "Secured 5th position in AWS Wavelength 5g computation Hackathon out of 1000+ participants and 1.8lacs cash prize.",
      "Secured incubation and funding from SRM Innovation and incubation centre.",
    ],
    name: "Achievements",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial: [
      "Augmented Reality Apps for E-commerce https://medium.com/@ad1328/aws-serverless-architecture-with-flutter-c17108f6e621",
      "AWS Serverless Architechure with flutter https://medium.com/@ad1328/aws-serverless-architecture-with-flutter-c17108f6e621",
    ],
    name: "Featured posts",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial: [
      "Google Cloud Foundation, Issuer : Google",
      "Cloud Computing Foundation, Issuer: IIT Kharagpur",
      "Javascript by Cambridge certification authority",
    ],
    name: "Certifications",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Scaape",
    description: `Innovative Scaape Matching Algorithm:
      Which is a sophisticated ranking points system that intelligently matched users based on their preferences and activities leading to more meaningful connections.
      
      Location-Based Bounding Box Algorithm:
      Developed a location-based bounding box algorithm as a part of the "Scaape" project. This algorithm utilized Google Maps API to efficiently locate and present "scaapes" in proximity to the user's location. This feature not only improved user convenience but also increased the app's usability by offering relevant suggestions.
      
      `,
    tags: [
      {
        name: "node",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "AWS EC2",
        color: "pink-text-gradient",
      },
      {
        name: "Google Maps Api",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "green-text-gradient",
      },
    ],
    image: scaape,
    source_code_link: "https://scaape.app/",
  },
  {
    name: "holagraph.com",
    description: `A common platform for Loan Providers, Trainers, Companies, and
      youth to meet and grow together It is a clean and elegant Multipurpose platform which curates to all the needs of youth of our country.  `,
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: holagraph,
    source_code_link: "https://holagraphcorporate.com/",
  },
  {
    name: "Voice4Mutes",
    description: `
    Our project is inspired by the current scenario/status of speech and hearing impaired people and how the biggest challenges faced by them are lack of social interaction, language and communication problems. We plan to reduce this divide. Voice4mutes powers individuals to overcome the barrier of communication using technology.                            `,
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "flask",
        color: "pink-text-gradient",
      },
    ],
    image: voice4mutes,
    source_code_link: "https://github.com/anishdutta/Voice4Mutes",
  },
  {
    name: "Dot",
    description: `Developed a dynamic client dashboard within NODE.js x React.js, integrating Google Maps APIs for real-time visualization of IoT device installations on an interactive map. Leveraged AWS Lambda functions to handle complex business logic and employed AWS DynamoDB for efficient data aggregation and pipeline management. This project streamlined data monitoring and enhanced client decision-making through intuitive, location-based insights.
    `,
    tags: [
      {
        name: "reacnodetjs",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "flask",
        color: "pink-text-gradient",
      },
    ],
    image: dot,
  },
  {
    name: "C19 Watcher",
    description: `Developed a suite of Machine Learning and Deep Learning models capable of seamless integration with any camera module. These models were then seamlessly integrated into a high-performance serverless application, aptly named "C19 Watcher." Leveraging state-of-the-art AI technologies, this application empowers real-time monitoring and analysis, contributing to advanced solutions for monitoring and managing COVID-19-related data and scenarios.
    `,
    tags: [
      {
        name: "python / flask",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "AWS serverless",
        color: "pink-text-gradient",
      },
    ],
    image: c19,
    source_code_link:"https://github.com/anishdutta/C19Watcher",
  },
  {
    name: "Nutrical",
    description: `Leveraged built-in pedometer sensor APIs on both iOS and Android devices, enabling seamless tracking of various physical activities.

    Robust and Secure Backend: Implemented a highly secure server architecture atop AWS, utilizing serverless technologies for enhanced scalability and data protection.
    
    Scalability: Engineered the system to be highly scalable, ensuring it can accommodate a growing user base without compromising performance or security.
    
  
    `,
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "AWS lambda",
        color: "green-text-gradient",
      },
      {
        name: "Android life cycle",
        color: "pink-text-gradient",
      },
    ],
    source_code_link:"https://play.google.com/store/apps/details?id=com.inventeurs.nutrical",
    image: nutrical,
  },
];

export { services, technologies, experiences, testimonials, projects };
