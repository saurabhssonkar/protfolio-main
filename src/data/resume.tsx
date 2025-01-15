import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Hrithik Roy",
  initials: "HR",
  url: "https://github.com/DevHrithik",
  location: "Kolkata, India",
  locationLink: "https://www.google.com/maps/place/kolkata",
  description:
    "Tech Enthusiast turned Software Engineer . I love building things and helping people. Very active on Twitter.",
  summary:
    "I’m a passionate [pre-final year undergrad](#education) with a deep love for coding and technology. My journey has led me to develop a strong foundation in [Web development, DevOps, and the emerging world of Web3](#education). I thrive on building innovative [products](#projects) and sharing my insights through blogging. Always eager to expand my skills and tackle new challenges, I’m actively seeking lucrative opportunities to leverage my tech expertise and drive impactful projects. Whether it’s through creating seamless web experiences or exploring the future of decentralized applications, I’m excited to contribute to the tech landscape and grow alongside it.",
  avatarUrl: "/hrithik.jpeg",
  skills: [
    "React",
    "Next.js",
    "Javascript",
    "Typescript",
    "Node.js",
    "Go",
    "Git",
    "MongoDB",
    "Postgres",
    "Docker",
    "Kubernetes",
    "Linux",
    "GitHub Actions",
    "Prisma",
    "Drizzle",
    "MonoRepo",
    "WebSocket",
    "WebRTC",
    "Kafka",
    "Redis",
    "GraphQL",
    "Nginx",
    "AWS",
    "CI/CD",
    "Grafana",
    "Prometheus",
    "OpenAPI",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    {
      href: "https://devhrithik.hashnode.dev",
      icon: NotebookIcon,
      label: "Blog",
    },
  ],
  contact: {
    email: "hrithikroy1854@gmail.com",
    tel: "+91 9749727619",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/DevHrithik",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/devhrithik",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/Hrithikstwts",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/dillion-youtube",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:hrithikroy1854@gmail.com",
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
      href: "https://github.com/DevHrithik",
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
      school: "Jadvapur University, India",
      href: "https://jadavpuruniversity.in/",
      degree: "Bachelor's Degree of Engineering",
      logoUrl: "/jadavpur.png",
      start: "2022",
      end: "2026",
    },
  ],
  projects: [
    {
      title: "AI Landing Page",
      href: "https://ai-landing-page-eta.vercel.app",
      dates: "September 2024",
      active: true,
      description:
        "Developed a stunning landing page, built with Next.js, React.js, Tailwind CSS, and Framer Motion, offers a highly responsive and visually engaging experience. Designed with a strong focus on aesthetics and fluid animations, it provides a seamless user interface across all devices, ensuring a captivating first impression for visitors.",
      technologies: [
        "Next.js",
        "ReactJS",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://ai-landing-page-eta.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/DevHrithik/AI-Landing_Page",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/AI_Landing-Page.png",
      video: "",
    },
    {
      title: "CRM Dashboard",
      href: "https://crm-dashboard-v1.vercel.app",
      dates: "September 2024",
      active: true,
      description:
        "This CRM dashboard, built using Next.js, React.js, Tailwind CSS, Shadcn, Prisma, and Postgres, integrates the latest features to streamline customer relationship management. It offers a sleek, user-friendly interface, real-time data management, and powerful backend capabilities, providing a complete solution for efficient and organized business operations.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://crm-dashboard-v1.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/DevHrithik/CRM_Dashboard-v1",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/CRM-Dashboard.png",
      video: "",
    },
    {
      title: "TodoListAI",
      href: "https://todolistai.vercel.app",
      dates: "September 2024",
      active: true,
      description:
        "This Todoist clone replicates all the core features of the popular task management app, offering a seamless and intuitive experience for organizing tasks, setting priorities, and tracking progress. Designed with a user-friendly interface, it enables efficient task management for individuals and teams alike.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "OpenAI API",
        "Convex",
      ],
      links: [
        {
          type: "Website",
          href: "https://todolistai.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/DevHrithik/TodoListAI",
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
