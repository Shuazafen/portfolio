"use client"

import {FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs}  from 'react-icons/fa'
import {BiLogoDjango} from 'react-icons/bi'
import {SiTailwindcss, SiNextdotjs} from 'react-icons/si'

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
    fieldValue: "1+ years",
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
  title: "My experience",
  description: 'I have been working as a software engineer for the past 1 year. I have developed various web applications using HTML, CSS, JavaScript, React, Django, Figma, and Next.js. I also have a strong background in Tailwind CSS and Next.js.',
  items: [
    {
      institution: "Digital Fortress",
      position: "Full Stack Developer",
      duration: "2023 - Present",
    },
    {
      institution: "Coursera",
      position:  "Backend Developer",
      duration: "winter 2024",
    },
    {
      institution: "Udemy",
      position: "django developer",
      duration: "2023 - 2024"
    },
    {
      institution: "Krisbethel college",
      position: "Secondary student",
      duration: "2017 - 2023",
    }
  ],
}

const education = {
  icon: '',
  title: "My experience",
  description: 'I have been working as a software engineer for the past 1 year. I have developed various web applications using HTML, CSS, JavaScript, React, Django, Figma, and Next.js. I also have a strong background in Tailwind CSS and Next.js.',
  items: [
    {
      institution: "Digital Fortress",
      position: "Full Stack Developer",
      duration: "2023 - Present",
    },
    {
      institution: "Coursera",
      position:  "Backend Developer",
      duration: "winter 2024",
    },
    {
      institution: "Udemy",
      position: "django developer",
      duration: "2023 - 2024"
    },
    {
      institution: "Krisbethel college",
      position: "Secondary student",
      duration: "2017 - 2023",
    }
  ],
}

const skills = {
  title: "My skills",
  description: "I  have honed my abilities in a wide range of technologies, including HTML, CSS, JavaScript, React, Django, Figma, Next.js, and Tailwind CSS. My strong foundation in these tools allows me to create efficient, user-friendly, and visually appealing digital experiences. I am eager to leverage my technical expertise and problem-solving skills to contribute to innovative projects and deliver exceptional results.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs/>,
      name: "js",
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
      icon: <FaFigma />,
      name: "figma",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <BiLogoDjango/>,
      name: "django"
    }

  ]
}

import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';

import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from '@/components/ui/tooltip'

import {ScrollArea} from "@/components/ui/scroll-area"

import { motion } from "framer-motion"

const Resume = () => {
  return (
    <motion.div initial={{opacity:0}}
    animate={{opacity:1, 
    transition:{ delay: 2.4, duration: 0.4, ease: "easeIn" }}}
    className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'
    >

      <div className="container mx-auto">
        <Tabs defaultValue='experience'
        className='flex flex-col xl:flex-row gap-[60px]'
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience" className="text-lg font-semibold">Experience</TabsTrigger>
            <TabsTrigger value="education" className="text-lg font-semibold">About</TabsTrigger>
            <TabsTrigger value="skills" className="text-lg font-semibold">Education</TabsTrigger>
            <TabsTrigger value="about" className="text-lg font-semibold">Skills</TabsTrigger>
          </TabsList>

           <div className="min-h-[70vh] w-full">
            <TabsContent value={experience}>
              <Experience />
            </TabsContent>

            <TabsContent value={education}>
              <Education />
            </TabsContent>

            <TabsContent value={skills}>
              <Skills />
            </TabsContent>

            <TabsContent value={about}>
              <About />
            </TabsContent>

            </div>

            

            
            {/* <TooltipProvider>
              <TooltipTrigger className="relative">
                <TooltipContent>
                  <div className="absolute right-0 top-0">
                    <img src="/images/about.jpg" alt="about me" className="w-24 h-24 rounded-full" />
                  </div>
                </TooltipContent>
                <About />
              </TooltipTrigger>
            </TooltipProvider> */}
          

          {/* <TabsContent>
            <TooltipProvider>
              <TooltipTrigger className="relative">
                <TooltipContent>
                  <div className="absolute right-0 top-0">
                    <img src="/images/about.jpg" alt="about me" className="w-24 h-24 rounded-full" />
                  </div>
                </TooltipContent>
                <About />
              </TooltipTrigger>
            </TooltipProvider>

            <Education />

            <Skills />
          </TabsContent> */}


        </Tabs>
      </div>
      
    </motion.div>
  )
}

export default Resume
