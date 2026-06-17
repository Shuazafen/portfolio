"use client"
import { motion } from "framer-motion"
import React, { useState } from "react"

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import { DiSqllite } from "react-icons/di";
import { BsArrowUpRight, BsGithub } from 'react-icons/bs'
import { FaReact, FaNodeJs, FaHtml5, FaDocker, FaAws } from 'react-icons/fa'
import { BiLogoDjango } from 'react-icons/bi'
import { SiTailwindcss, SiNextdotjs, SiTypescript, SiMongodb, SiCelery, SiSupabase } from 'react-icons/si'

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'


import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    title: "CWPAI",
    category: "Fullstack",
    description: "Built using React, Typescript, Supabase and Tailwind CSS. This app is a platform for women empowerment with hosted events and outreaches.",
    image: "/assets/cwpai.png",
    link: "https://cwpai.africa",
    github: "https://github.com/Shuazafen/",
    stack: [{
      name: "React",
      icon: <FaReact />
    },
    {
      name: "typescript",
      icon: <SiTypescript />
    },
    {
      name: "supabase",
      icon: <SiSupabase />
    },
    {
      name: "Tailwind css",
      icon: <SiTailwindcss />
    }]
  },
  {
    title: "Titans Careers Academy",
    category: "Fullstack",
    description: "This is a website for students who are registered to Titans careers. A place where actual learning happens, from course videos, quiz modules and job like interface and experience",
    image: "/assets/titans-academy.png",
    link: "https://www.titanscareershub.com/",
    github: "https://github.com/Shuazafen/titan-hub",
    stack: [{
      name: "Typescript",
      icon: <SiTypescript />
    },
    {
      name: "Supabase",
      icon: <SiSupabase />
    },
    {
      name: "Aws s3",
      icon: <FaAws />
    },
    {
      name: "Tailwind css",
      icon: <SiTailwindcss />
    },
  {
     name: "Docker",
      icon: <FaDocker />
  }]
  },
  {
    title: "LMS app",
    category: "Backend",
    description: "A backend for a learning management system built using Django Rest Framework, Mongodb, celery and Docker.",
    image: "/assets/titans-api.png",
    link: "https://lms-backend-bn1v.onrender.com",
    github: "https://github.com/Shuazafen/lms-backend",
    stack: [{
      name: "Django",
      icon: <BiLogoDjango />
    },
    {
      name: "MongoDB",
      icon: <SiMongodb />
    },
    {
      name: "Celery",
      icon: <SiCelery />
    },
    {
      name: "Docker",
      icon: <FaDocker />
    }]
  },
  // {
  //   title: "React E-commerce app",
  //   category: "Fullstack",
  //   description: "Built using React for frontend and Django-Rest for backend. This is a Fullstack application using microservices architecture and sqlite database.",
  //   image: "",
  //   link: "https://presentationproject.vercel.app",
  //   github: "https://github.com/Shuazafen/presentationproject",
  //   stack: [{
  //     name: "Django",
  //     icon: <BiLogoDjango />
  //   },
  //   {
  //     name: "MongoDB",
  //     icon: <SiMongodb />
  //   },
  //   {
  //     name: "Sqlite",
  //     icon: <DiSqllite />
  //   }
  //   ]
  // },

]

const Work = () => {
  const [project, setProject] = useState(projects[0])

  const [swiper, setSwiper] = useState(null);

  const handleSlideChange = (swiper) => {
    // set current slide index
    const currentIndex = swiper.activeIndex;
    // update project stats based on current slide
    setProject(projects[currentIndex]);
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[80vh] flex flex-col justify-center py-12 lg:px-6 ">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:gap-[30px] items-center">
          <div className="w-full lg:w-[50%] lg:h-[460px] flex flex-col
          lg:justify-between order-2 lg:order-none">


            {/* Project title and category */}
            <div className="flex items-center justify-start gap-[3px]">
              <h2 className="text-[42px] font-bold leading-none text-white hover:text-accent transition-all duration-500 capitalize cursor-default">
                {project.title}
              </h2>
              <div className="px-3 py-1 border border-accent text-accent rounded-md text-xs font-medium">
                {project.category}
              </div>
            </div>

            {/* Project description */}
            <p className="text-white/90 max-w-[300px] mt-6 group-hover:text-accent transition-all duration-500">
              {project.description}
            </p>

            {/* stack */}
            <div className="flex flex-wrap gap-3 mt-6">
              {project.stack.map((item, index) => (
                <TooltipProvider key={index}>
                  <Tooltip>
                    <TooltipTrigger className="bg-white/5 group flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/10 transition-all duration-500">
                      <span className="text-xl text-accent">
                        {item.name}
                      </span>
                      {item.icon}
                    </TooltipTrigger>
                    <TooltipContent className="bg-black/90 text-white">
                      <p>{item.name}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
            </div>

            {/* project buttons */}
            <div className="flex items-center gap-4 mt-auto pt-6">
              {/* live link */}
              <Link href={project.link} target="_blank" rel="noopener noreferrer">
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                      <BsArrowUpRight className="text-white text-3xl group-hover:text-accent group-hover:rotate-45 transition-all duration-500" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Live project</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
              {/* github link */}
              <Link href={project.github} target="_blank" rel="noopener noreferrer">
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                      <BsGithub className="text-white text-3xl group-hover:text-accent transition-all duration-500" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Github repository</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
            </div>



          </div>
          <div className="w-full lg:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="lg:h-[520px] mb-12"
              onSwiper={setSwiper}
              onSlideChange={handleSlideChange}
            >
              {projects.map((item, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div
                      className="h-[460px] relative group flex justify-center items-center bg-pink-50/20 rounded-xl overflow-hidden cursor-pointer"
                      onClick={() => swiper?.slideNext()}
                    >
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10 transition-all duration-500 group-hover:bg-black/20"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        {item.image ? (
                          <Image
                            src={item.image}
                            fill
                            className="object-cover"
                            alt={item.title}
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-white/20">
                            No Image Available
                          </div>
                        )}
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>

    </motion.section>
  )
}

export default Work
