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
  avatarUrl: "/hrithik.jpeg",
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
        url:"https://www.linkedin.com/in/saurabh-sonkar/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url:'https://x.com/Sau55843Sonkar',
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        // url: "https://dub.sh/dillion-youtube",
        url:'',
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
      company: " Edumitram Pvt Ltd",
      href: "",
      badges: [],
      location: "Remote",
      title: "Full Stack Developer",
      logoUrl: "/memoji.jpeg",
      start: "2024",
      end: "Present",
      description:
      " Developed a comprehensive Learning Management System (LMS) featuring school creation, user management, course management, live classes, and MCQ features. Uploaded the recorded lectures"
    },
    {
      company: "Open Source",
      badges: [],
      href: "",
      location: "Remote",
      title: "Contributor",
      logoUrl: "/github-mark.png",
      start: "2023",
      end: "Present",
      description:
        "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
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
        "Developed a stunning landing page, built with Next.js, React.js, Tailwind CSS, and Framer Motion, offers a highly responsive and visually engaging experience. Designed with a strong focus on aesthetics and fluid animations, it provides a seamless user interface across all devices, ensuring a captivating first impression for visitors.",
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
      title: "LMS",
      href: "https://lmsnotionstudy.vercel.app/",
      dates: "September 2024",
      active: true,
      description:
        "This Todoist clone replicates all the core features of the popular task management app, offering a seamless and intuitive experience for organizing tasks, setting priorities, and tracking progress. Designed with a user-friendly interface, it enables efficient task management for individuals and teams alike.",
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
} as const;
