"use client"
import React, { useRef, useState } from 'react'
import Link from 'next/link'
import "swiper/css";
import {delay, motion} from 'framer-motion'
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';
import { Autoplay, Grid, Pagination, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { projects } from '@/constants'
import Image from 'next/image';
import ProjectSlideBtn from '@/components/ProjectSlideBtn';
import {FaGithub} from 'react-icons/fa'
const Project = () => {
  const [project, setProject] = useState(projects[0]);
  const videoRef = useRef()

  const handleSlideChange = (swiper) => {

    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex])
  }
  return (
    <motion.section 
      className="min-h-[80vh] flex flex-col justify-center  xl:px-0"
      initial={{opacity:0}} animate={{
      opacity: 1,
      transition: {delay: 2.4, duration: 0.4, ease: "easeIn" }
    }}>
      <div className="coontainer mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px] overflow-x-hidden">
          <div className='w-[400px] xl:w-[500px] flex flex-col order-2 p-4 xl:justify-between xl:order-none lg:h-[400px]'>
            <div className="text-6xl mb-4 lg:mb-0 leading-none font-extrabold text-transparent text-outline">
              {project.num}
            </div>
            <h2 className='capitalize mb-4 lg:mb-0 leading-none font-bold text-[42px] text-white group-hover:text-cyan-400 transition-all duration-500'>{project.category} project</h2>
            <h4 className='capitalize mb-4 lg:mb-0 leading-none text-transparent  font-bold text-2xl text-white group-hover:text-cyan-400 transition-all duration-500'>{project.title} project</h4>
            <p className="mb-4 lg:mb-0 text-white/60">{project.description}</p>
            <ul className='flex gap-3'> 
              {project.stack.map((item, i) => (
                <li key={i} className='text-cyan-400 text-lg'>
                  {item.name}
                  {i !== project.stack.length -1 && ","}
                </li>
              ))}
            </ul>
            <div className="border border-white/20"></div>
            
              <div className='rounded-full h-[50px] cursor-pointer flex justify-center items-center  w-[50px] p-6 bg-white hover:bg-cyan-400 transition-all duration-500 mt-3'>
              <Link  href={project.github}>
                <FaGithub className='text-black text-2xl' />
              </Link>
            </div>
           
          </div>
          <div className='w-[400px] xl:w-[500px] overflow-hidden lg:h-[600px]'>
            <Swiper
              className='lg:h-[600px] max-w-[450px] lg:w-full '
            onSlideChange={handleSlideChange}
            slidesPerView={1}
            spaceBetween={30}
            >
              {projects.map((item, i) => (
                <SwiperSlide key={i}>
                  <div className='h-[400px] lg:h-[600px] w-full group'>
                    <div className="h-[400px] w-[450px] lg:w-full overflow-hidden">
                      <video 
                        className='w-[450px] px-3 h-full lg:w-full lg:h-[400px]'
                        controls
                        autoPlay
                        muted
                      >
                        <source src={item.video} type='video/mp4' />
                      </video>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <ProjectSlideBtn 
                containerstyle='flex gap-2 bottom-0  absolute z-20 justify-between w-full right-0 mb-4 lg:w-max lg:justify-none' 
                btnStyle=' text-cyan-400 flex text-[25px] py-1 rounded-xl hover:bg-cyan-400 hover:text-primary w-[44px] h-44px] justify-center items-center transition-all duration-500'
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Project