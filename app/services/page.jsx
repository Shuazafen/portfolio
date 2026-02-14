"use client"
import {BsArrowDownRight} from "react-icons/bs"
import Link from "next/link";

const services = [
  {
    num: '01',
    title: 'Front-end Development',
    description: 'I build responsive and user-friendly interfaces using React, Next.js and modern ui components. My focus is on creating seamless user experiences with clean, efficient code.',
    href: ''
  },
  {
    num: '02',
    title: 'Back-end Development',
    description: 'I build robust and scalable back-end systems using Django, Django Rest Framework, and modern database technologies. My focus is on creating secure, efficient, and maintainable server-side applications that support seamless front-end integration. ',
    href: ''
  },
  {
    num: '03',
    title: 'Deployment & Dockerization',
    description: 'I provide end-to-end deployment services for web applications, ensuring seamless transition from development to production. My expertise includes setting up CI/CD pipelines, configuring production environments, and implementing Dockerization to ensure consistent application performance across different environments.',
    href: ''
  },
  {
    num: '04',
    title: 'cloud computing',
    description: 'Cloud computing provides on-demand access to computing resources like data storage and computing power over the internet. It allows users to access and use these resources remotely.',
    href: ''
  },
];

import {motion} from 'framer-motion';

const Service = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
         <motion.div initial={{opacity:0}} animate={{opacity:1, transition: {
          delay:2.4, duration:0.4, ease:"easeIn"
         },}}
         className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
          {services.map((service, index)=> {
            return <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
              <div className="w-full flex justify-between items-center">
                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
                 <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white
                 group-hover:bg-accent transition-all duration-500 flex justify-center
                 items-center hover:-rotate-45">
                  <BsArrowDownRight className="text-primary text-3xl"/>
                 </Link>
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white
              group-hover:text-accent transition-all duration-500">{service.title}</h2>

              <p className="text-white/60">{service.description}</p>

              <div className="border-b border-white/20 w-full"></div>
            </div>
          })}
          </motion.div> </div>
    </section>
  )
}

export default Service
