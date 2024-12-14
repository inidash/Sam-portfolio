"use client"; 
import React from 'react'
import {delay, motion } from 'framer-motion'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
 
import { FaPhoneSquareAlt, FaEnvelopeSquare,  FaMapMarkerAlt } from "react-icons/fa";
import { SelectGroup, SelectLabel } from '@radix-ui/react-select';
import { contactInfo } from '@/constants';
const Contact = () => {
  return (
    <motion.section
      initail={{opacity: 0}}
      animate={{
        opacity: 1,
        transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}
      }}
    >
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row gap-[30px]'>
          {/* info  */}
          <div className='flex-1 flex lg:justify-start items-center mb-8 lg:mb-0'>
            <ul className='flex flex-col gap-10'>
              {contactInfo.map(({ icon, title, description}, i) => (
                <li key={i} className='flex items-center gap-6'>
                  <div className='h-[52px] w-[52px] lg:h-[72px] lg:w-[72px] rounded-xl bg-[#27272c] text-cyan-400 flex items-center justify-center'>
                    <div className='text-[28px]'>{icon}</div>
                  </div>
                  <div className='flex-1'>
                    <p className='text-white/60'>{title}</p>
                    <h3 className='text-1xl'>{description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {/* form  */}
          <div className='lg-[50%] lg:justify-end mb-6'>
            <form action="" className='flex flex-col gap-8 p-10 rounded-xl bg-[#27272c]'>
              <h3 className='text-4xl text-cyan-400 font-semibold'>Let&apos;s work together</h3>
              <p className="text-white/60">
                Accept my apologies, I intend to use react email on this form but the  site has been unreachable lately. I am still working on how to receive your emails. Feel free to contact me via my email. Peace!
              </p>
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                <Input type="text" placeholder="Full name" disabled />
                <Input type="email" placeholder="Email address" disabled />
                <Input type="phone" placeholder="Phone" disabled />
                <Select disabled>
                  <SelectTrigger>
                    <SelectValue>Select a service</SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select a service</SelectLabel>
                      <SelectItem value="front end dev">Front end development</SelectItem>
                      <SelectItem value="back end dev">Back end development</SelectItem>
                      <SelectItem value="ui ux design">UI/UX design</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
                <Textarea disabled className="h-[200px]" placeholder="Type your message here" />

                <Button size="md" disabled className="max-w-40">Send Message</Button>
            </form>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact