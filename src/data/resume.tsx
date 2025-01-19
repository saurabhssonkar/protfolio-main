import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Saurabh Sonkar",
  initials: "HR",
  url: "https://github.com/saurabhssonkar",
  location: "UP, India",
  locationLink: "https://www.google.com/maps/place/UP",
  description:
    "Tech Enthusiast turned Software Engineer. I really enjoy learning new tech. I love building things and helping people.",
  summary:
    "I’m a full stack developer with  1.5+ years of experience a deep love for coding and technology. My journey has led me to develop a strong foundation in [Web development, DevOps, and the emerging world of Web3](#education). I thrive on building innovative [products](#projects) . Always eager to expand my skills and tackle new challenges, I’m actively seeking lucrative opportunities to leverage my tech expertise and drive impactful projects. Whether it’s through creating seamless web experiences or exploring the future of decentralized applications, I’m excited to contribute to the tech landscape and grow alongside it.",
  avatarUrl: "/Profiel.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Javascript",
    "Node.js",
    "Git",
    "MongoDB",
    "Postgres",
    "Docker",
    "Linux",
    "GitHub Actions",
    "Prisma",
    "MonoRepo",
    "WebSocket",
    "WebRTC",
    "Kafka",
    "Redis",
    "Nginx",
    "CI/CD",
    "OpenAPI",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // {
    //   href: "https://devhrithik.hashnode.dev",
    //   icon: NotebookIcon,
    //   label: "Blog",
    // },
  ],
  contact: {
    email: "saurabhssonkar@gmail.com",
    tel: "+91 9076578103",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/saurabhssonkar",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/saurabh-sonkar/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: 'https://x.com/Sau55843Sonkar',
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        // url: "https://dub.sh/dillion-youtube",
        url: '',
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:saurabhssonkar@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Edumitram Private Limited",
      period: "June 2023 - Present",
      project: "Hem Aunty Publications",
      link: "https://hemaunty.org",
      description: [
        "Contributed to the development of a robust e-book platform as part of a corporate initiative, featuring an intuitive admin panel, categorized book listings, secure online payment integration via Razorpay API, and support for over 1,000 daily active users. Delivered a scalable and secure solution that facilitated seamless transactions, resulting in 100+ monthly sales. Enhanced user experience and supported business growth through efficient platform design and implementation aligned with organizational objectives.",
      ],
      technologies: [
        "React",
        "Tailwindcss",
        "Node.js",
        "PostgresSQL",
        "Typescript",
        "Redux",
        "Razorpay API"
      ],
    },
    {
      // company: "SOCIETY - RADHI ADDA",
      // title: "Full Stack Developer",
      // period: "Aug 2022 - Dec 2022",
      project: "Society Management Web App",
      link: "https://radhiadda.com",
      description: [
        "Contributed to the development of a scalable society management web application as part of a corporate project. Key features included secure user authentication, an integrated messaging system, and a multimedia gallery. Additionally, implemented advanced modules such as secure registration, a family tree module, and a matrimony feature with comprehensive profile management controls, delivering a user-centric and functional solution tailored to community needs.",
      ],
      technologies: [
        "React",
        "Tailwindcss",
        "Node.js",
        "PostgresSQL",
        "Typescript",
        "Redux"
      ],
    },
    {
      
      // period: "June 2023 - Present",
      project: "LMS (Learning Management System)",
      link: "https://educrafter.edumitram.com",
      description: [
        // "Developed a comprehensive Learning Management System (LMS) featuring school creation, user management, course management, live classes, and MCQ features. Uploaded recorded lectures to enhance student engagement.",
        // ,

        "Contributed to the development of a comprehensive Learning Management System (LMS) as part of a corporate project, designed to address diverse educational requirements. The platform included advanced features such as multi-school management, role-based access control, detailed course administration, live interactive classes,rich-text-editor and a robust MCQ module. Additionally, implemented functionality for uploading and managing recorded lectures, significantly enhancing student engagement, accessibility, and the overall user experience. This scalable and user-focused solution facilitated seamless collaboration between educators and learners while aligning with organizational goals."
      ],
      technologies: [
        "React",
        "Tailwindcss",
        "Node.js",
        "PostgresSQL",
        "Typescript",
      ],
    },
   
   
    {
      // company: "Gamification",
      // title: "Frontend",
      // period: "Aug 2022 - Dec 2022",
      project: "Gamified Quiz",
      description: [
        "Contributed to the development of a gamified MCQ quiz application for children as part of a corporate project, utilizing Angular 16, SOAP API, MySQL, and Bootstrap. The application featured a hierarchical structure, support for single and multi-selection MCQs, dynamic result report generation, and a score-based level unlocking system. Delivered an engaging and interactive user experience, aligned with the project’s educational and entertainment goals."

      ],
      technologies: [
        "ASP.Net Core",
        "Soap Api",
        "MySQL",
        "Typescript",
        "Bootstrap",
        "Angular 16",
      ],
    },
  ],
  education: [

    {
      school: "Dr. A.P.J. Abdul Kalam Technical University, India",
      href: "https://aktu.ac.in/",
      degree: "Bachelor's Degree of Engineering",
      logoUrl: "/jadavpur.png",
      start: "2018",
      end: "2022",
    },
  ],
  projects: [
    {
      title: "Snakes and Ladders Game",
      href: "https://snake-ladder-game-eight.vercel.app/",
      dates: "September 2024",
      active: true,
      description:
        "Developed an engaging online multiplayer game featuring advanced matchmaking capabilities, group chat functionality, real-time player count tracking, global chat, and seamless friend request interactions between users. This project combines real-time communication with smooth gameplay mechanics, enhancing user experience and fostering a dynamic online gaming community. Through careful design and implementation, the platform supports both social interactions and competitive play, ensuring a highly immersive and interactive environment for players.",
      technologies: [
        "ReactJS",
        "TailwindCSS",
        "Node js",
        "Postrgess",
        "Mysql",
        "Radis",
        "Web Socket"
      ],
      links: [
        {
          type: "Website",
          href: "https://snake-ladder-game-eight.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/saurabhssonkar/Snake-Ladder/tree/main",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/AI_Landing-Page.png",
      video: "",
    },

    {
      title: "Studynotion",
      href: "https://lmsnotionstudy.vercel.app/",
      dates: "September 2024",
      active: true,
      description:
        "Developed a dynamic educational platform that streamlines student registration, course purchases, and content navigation, with integrated Razorpay API for secure online payments. Empowered instructors with intuitive tools to create, organize, and manage courses, sections, and lectures, providing a seamless experience for both educators and learners. This platform effectively combines user-friendly design with robust functionality, enhancing the learning experience while ensuring secure and efficient payment processing.",
      technologies: [
        "React js",
        "TailwindCSS",
        "Node js",
        "Mongodb",
        "JWT",
        "RazorPay"
      ],
      links: [
        {
          type: "Website",
          href: "https://lmsnotionstudy.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/saurabhssonkar/Education-Tech-Course",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Todolist.png",
      video: "",
    },
    {
      title: "Portfolio",
      href: "",
      dates: "September 2024",
      active: true,
      description:
        "Developed an amazing Portfolio to showase my work to potentiol recruiters. I used latest web desiging techniques like [TailwindCSS](https://tailwindcss.com/) and [Shadcn UI](https://ui.shadcn.com/) to make it look good and [Next.js](https://nextjs.org/) to make it fast.",
      technologies: [
        "Next.js",
        "ReactJS",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/Portfolio.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "SIH Hackathon",
      dates: "September 2024 - Present",
      location: "Kolkata, India",
      description:
        "Developed a web application that helps in ships re-routing using cuttinf edge traffic and optimizing the time taken to reach the destination.",
      image: "Smart-India-Hackathon-2023.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/DevHrithik",
        },
      ],
    },
  ],
};
