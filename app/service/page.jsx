"use client"
import { motion } from 'framer-motion';
import Link from 'next/link';
import {BsArrowDownRight} from 'react-icons/bs'

import { services } from '@/constants';

const Service  = () => {
  return (
    <section className='min-h-[80vh] flex justify-center py-12 flex-col xl:py-0'>
      <div className="container mx-auto">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-[60px]"
          initial={{opacity:0}} 
          animate={
            {
              opacity: 1,
               transition: {
                delay: 2.4,
               duration: 0.4,
                ease: "easeIn"
              }
            }
          }
        >
          {services.map(({num, title, description, href}, i) => (
            <div key={i} className='flex-1 flex flex-col justify-center gap-6 group'>
              <div className='flex justify-between items-center w-full'>
                <div className='text-3xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500'>{num}</div>
                <Link href={href} className='w-[70px] h-[70px] flex justify-center items-center bg-white hover:bg-cyan-400 rounded-full transition-all duration-500 hover:-rotate-45'>
                  <BsArrowDownRight className='text-primary text-3xl'/>
                </Link>
              </div>
              <h2 className='text-[42px] leading-none font-bold group-hover:text-outline-hover transition-all duration-500'>{title}</h2>
              <p className='text-white/60'>{description}</p>
              <div className="border-b border-white w-full"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Service 