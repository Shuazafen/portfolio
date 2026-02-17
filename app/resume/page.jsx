"use client"

import { FaReact, FaNodeJs } from 'react-icons/fa'
import { BiLogoDjango } from 'react-icons/bi'
import { SiTailwindcss, SiNextdotjs, SiTypescript } from 'react-icons/si'

const about = {
  title: 'About me',
  description: 'I am a software engineer with a passion for building user-friendly and accessible web applications. I have experience working with various programming languages and frameworks, including HTML, CSS, JavaScript, React, Django, Figma, and Next.js. I also have a strong background in Tailwind CSS and Next.js.',

  info: [
    {
      fieldName: "Name",
      fieldValue: 'Olomoshua Omozafen',
    },
    {
      fieldName: "Phone",
      fieldValue: "(+234) 9118353135",
    },
    {
      fieldName: "Experience",
      fieldValue: "2+ years",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Nigerian",
    },
    {
      fieldName: "Email",
      fieldValue: "olomoshuaomozafen@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Language",
      fieldValue: "English",
    },
  ]

}



const experience = {
  icon: '',
  title: "My Experience",
  description: 'I am a software engineer focused on building robust and scalable web applications. In my profession journey i have had more opportunities to work on backend development projects and built more experience in this stack.',
  items: [
    {
      institution: "Compellers Digitals",
      position: "Backend Developer",
      duration: "2025 - Present",
    },
    {
      institution: "Titans Careers",
      position: "Backend Developer",
      duration: "2025 - 2026",
    },
    {
      institution: "Cwpai",
      position: "Backend Developer",
      duration: "Winter 2026",
    },
    {
      institution: "Freelance",
      position: "Full Stack Developer",
      duration: "2024 - 2025",
    },

  ],
}

const education = {
  icon: '',
  title: "My Education",
  description: 'Continually learning and expanding my technical expertise through formal education and industry-recognized certifications.',
  items: [
    {
      institution: "Leads city university",
      position: "Software Engineering Student",
      duration: "2026 - Present",
    },
    {
      institution: "Digital Fortress",
      position: "Full Stack Developer",
      duration: "2023 - 2024",
    },
    {
      institution: "Coursera",
      position: "Backend Developer",
      duration: "Winter 2024",
    },
    {
      institution: "Udemy",
      position: "Django Developer",
      duration: "2023 - 2024"
    },
    {
      institution: "Krisbethel College",
      position: "Secondary Student",
      duration: "2017 - 2023",
    }
  ],
}

const skills = {
  title: "My Skills",
  description: "I've developed a deep understanding of modern web technologies, enabling me to build responsive, performant, and visually stunning digital experiences.",
  skillList: [
    {
      icon: <SiTypescript />,
      name: "typescript",
    },
    {
      icon: <FaReact />,
      name: "react",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind css",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js"
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <BiLogoDjango />,
      name: "django"
    }
  ]
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

import { ScrollArea } from "@/components/ui/scroll-area"

import { motion } from "framer-motion"

const Experience = () => (
  <div className="flex flex-col gap-[30px] text-center xl:text-left">
    <h3 className="text-4xl font-bold">{experience.title}</h3>
    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
    <ScrollArea className="h-[400px]">
      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
        {experience.items.map((item, index) => (
          <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
            <span className="text-accent">{item.duration}</span>
            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
            <div className="flex items-center gap-3">
              <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
              <p className="text-white/60">{item.institution}</p>
            </div>
          </li>
        ))}
      </ul>
    </ScrollArea>
  </div>
);

const Education = () => (
  <div className="flex flex-col gap-[30px] text-center xl:text-left">
    <h3 className="text-4xl font-bold">{education.title}</h3>
    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
    <ScrollArea className="h-[400px]">
      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
        {education.items.map((item, index) => (
          <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
            <span className="text-accent">{item.duration}</span>
            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
            <div className="flex items-center gap-3">
              <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
              <p className="text-white/60">{item.institution}</p>
            </div>
          </li>
        ))}
      </ul>
    </ScrollArea>
  </div>
);

const Skills = () => (
  <div className="flex flex-col gap-[30px]">
    <div className="flex flex-col gap-[30px] text-center xl:text-left">
      <h3 className="text-4xl font-bold">{skills.title}</h3>
      <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
    </div>
    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
      {skills.skillList.map((skill, index) => (
        <li key={index}>
          <TooltipProvider delayDuration={100}>
            <Tooltip>
              <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                <div className="text-6xl group-hover:text-accent transition-all duration-300">
                  {skill.icon}
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p className="capitalize">{skill.name}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </li>
      ))}
    </ul>
  </div>
);

const About = () => (
  <div className="flex flex-col gap-[30px] text-center xl:text-left">
    <h3 className="text-4xl font-bold">{about.title}</h3>
    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
    <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
      {about.info.map((item, index) => (
        <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
          <span className="text-white/60">{item.fieldName}</span>
          <span className="text-xl">{item.fieldValue}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Resume = () => {
  return (
    <motion.div initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
      }}
      className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'
    >

      <div className="container mx-auto">
        <Tabs defaultValue='experience'
          className='flex flex-col xl:flex-row gap-[60px]'
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <Experience />
            </TabsContent>

            <TabsContent value="education" className="w-full">
              <Education />
            </TabsContent>

            <TabsContent value="skills" className="w-full">
              <Skills />
            </TabsContent>

            <TabsContent value="about" className="w-full">
              <About />
            </TabsContent>

          </div>
        </Tabs>
      </div>

    </motion.div>
  )
}

export default Resume
