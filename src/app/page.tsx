import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import WorkExperienceSection from "@/components/ui/WorkExperienceSection";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10   dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2]">
      {/* Hero Section */}
      <section className="relative flex items-center justify-between md:px-6 px-2 py-12 md:py-16 lg:py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-b-3xl shadow-lg  ">
        <div className="max-w-4xl space-y-3">
          {/* Text Content */}
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Hi, I'm {DATA.name} 👋
            {/* Hi, I'm Saurabh Sonkar  👋 */}

          </h1>
          <p className="text-lg md:text-xl w-full font-medium leading-relaxed">
            {DATA.description}
          </p>

        </div>

        {/* Hero Image */}
        <div className="relative flex-shrink-0 ">
          <div className="relative w-40 h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden shadow-xl ring-4 ring-white dark:ring-gray-800">
            <img
            src={DATA.avatarUrl}
            alt={DATA.name}
            className="w-full h-full"
          />
          
            <div className="absolute bottom-0 right-0 bg-green-500 h-4 w-4 rounded-full border-2 border-white dark:border-gray-800"></div>
          </div>
        </div>
      </section>

      <section
        id="about"
        className=" w-full py-10 px-6 rounded-lg   shadow-sm"
      >
        <div className="w-full  mx-auto space-y-8 px-6 ">
          {/* Section Header */}
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 dark:text-white text-center">
              About Me
            </h2>
          </BlurFade>

          {/* Section Content */}
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Profile Image */}
              {/* <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden shadow-lg">
          <img
            src={DATA.avatarUrl}
            alt={`${DATA.name} Avatar`}
            className="w-full h-full object-cover"
          />
        </div> */}

              {/* About Text */}
              <div>
                <Markdown className="  text-gray-700 dark:text-gray-300 font-medium text-base md:text-lg leading-relaxed">
                  {DATA.summary}
                </Markdown>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>
      <WorkExperienceSection />

      <section
        id="skills"
        className="py-12 px-6 dark:to-gray-800  rounded-lg "
      >
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Section Header */}
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-3xl font-extrabold text-center text-gray-800 dark:text-white">
              My Skills
            </h2>
            <p className="mt-2 text-center text-lg text-gray-600 dark:text-gray-400">
              A showcase of my expertise and technical abilities.
            </p>
          </BlurFade>

          {/* Skills Grid */}
          <div className="flex flex-wrap justify-center gap-4">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <div className="px-4 py-2 text-xs font-medium text-green-700 bg-blue-50 border border-green-300 rounded-lg hover:scale-105 transition transform">
                  {skill}
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      

      <section id="education" className="py-12 ">
        <div className="container mx-auto px-6 lg:px-12 ">
          <div className="text-center mb-10">
            <BlurFade delay={BLUR_FADE_DELAY * 7}>
              <h2 className="text-3xl font-extrabold">Education</h2>
              <p className="text-lg  mt-3">
                Explore my academic milestone and institution.
              </p>
            </BlurFade>
          </div>
          <BlurFade delay={BLUR_FADE_DELAY * 8}>
            <div className="relative  dark:bg-black bg-white shadow-xl  border rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-95">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-800 opacity-0 hover:opacity-100 transition-opacity duration-300 z-10 "></div>
              <div className="flex flex-col md:flex-row items-center gap-8 p-4 relative z-20 w-full ">
                <div className="flex-shrink-0">
                  <img
                    src={DATA.education[0].logoUrl}
                    alt={DATA.education[0].school}
                    className="h-24 w-24 rounded-full object-cover shadow-lg"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-semibold ">
                    {DATA.education[0].school}
                  </h3>
                  <p className="text-md  mt-2">{DATA.education[0].degree}</p>
                  
                </div>
                <div className="flex justify-center md:justify-end w-full md:w-auto">
                  <a
                    href={DATA.education[0].href}
                    target="_blank"
                    rel="noopener noreferrer"
                    // className="inline-block px-6 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                   <p className="text-sm  mt-1">
                    {DATA.education[0].start} - {DATA.education[0].end}
                  </p>
                  </a>
                </div>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      <section id="projects">
        <div className=" space-y-12  w-full py-12 ">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  My Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Check out my latest work
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;ve worked on a variety of projects, from simple
                  websites to complex web applications. Here are a few of my
                  favorites.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="w-full px-8  mx-auto flex flex-col gap-10">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Contact
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Want to chat? Just shoot me a dm{" "}
                <Link
                  href={DATA.contact.social.X.url}
                  className="text-blue-500 hover:underline"
                >
                  with a direct question on twitter
                </Link>{" "}
                and I&apos;ll respond whenever I can. I will ignore all
                soliciting.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
