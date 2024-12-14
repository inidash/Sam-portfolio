import { Button } from '@/components/ui/button'
import React from 'react'
import { FaCloudDownloadAlt } from "react-icons/fa";

import SocialMedia from '@/components/SocialMedia';
import Photo from '@/components/Photo';
import Stats from '@/components/Stats';
import { approach } from '@/constants';
import Link from 'next/link';
const Home = () => {
  return (
    <>
      <section className='h-full'>
        <div className='container mx-auto h-full'>
          <div className='flex flex-col xl:flex-row justify-between items-center xl:pt8 xl:mb-24'>
            <div className='order-2 xl:order-none text-center xl:text-left'>
              <span className='text-xl'>Software Developer</span>
              <h1 className='h1 mb-6'>Hello i&apos;m 
                <br/> <span className='text-cyan-500'>Samson Inalegwu Emmanuel</span>
              </h1>
              <p className='max-w-[500px] mb-9 text-white/80'>
                Transforming concepts into seamless user experience.
                 I prioritize client collaboration, fostering open communication
                I am very flexible with time zone communication.
              </p>
              {/* download button and social media handle  */}
              <div className='flex flex-col xl:flex-row items-center gap-8'>
                  <Link download href='/assets/cv/sam-resume.pdf'>
                    <Button variant='outline' size='lg' className='flex flex-row items-center justify-center gap-2'>
                      <span>View CV</span>
                      <FaCloudDownloadAlt className='text-xl'/>
                    </Button>
                  </Link>
                
                <div className='mb-8 xl:mb-0'>
                  <SocialMedia containerStyle='flex gap-8' iconStyle='rounded-full h-9 w-9 border border-cyan-400 flex justify-center items-center text-cyan-400 text-base hover:text-primary hover:bg-cyan-400 hover:transition-all duration-500' />
                </div>
              </div>
            </div>
            <div className='order xl:order-none mb-8 xl:mb-0'>
              <Photo />
            </div>
          </div>
        </div>
        <Stats />
      </section>
      <section>
        <div className='container mx-auto'>
          <h1 className='font-extrabold uppercase my-5 text-cyan-400 text-3xl'>My approach</h1>
          <div className='flex flex-col xl:flex-row justify-between items-center xl:pt-8 xl:mb-24'>
            {approach.map(({title, description}, i) => (
              <div key={i} className='mb-4 flex flex-col h-[300px] w-[70] lg:text-start text-center justify-center items-center gap-6 px-[30px] py-[20px] bg-slate-900 text-white border border-cyan-400 rounded-2xl lg:w-[300px] lg:h-[350px] hover:bg-slate-950 transition-all duration-500'>
                <h2 className='font-bold uppercase text-cyan-400 lg:text-xl text-md text-center'>{title}</h2>
                <p className='font-semibold text-white text-sm lg:text-md text-center'>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Home