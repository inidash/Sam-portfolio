import { stats } from '@/constants'
import React from 'react'

const Stats = () => {
  return (
    <section className='pt-4 pb-12 xl:pt-0 xl:pb-0'>
      <div className='container mx-auto'>
        <div className='flex flex-wrap gap-8 items-center max-w-[80vw] xl:max-w-none'>
          {stats.map(({num, text}, i) => (
          <div key={i} className='flex-1 flex gap-4 justify-center items-center xl:justify-start'>
            <h1 className='text-4xl font-extrabold xl:text-6xl'>{num}</h1>
            <p className={`${text.length < 15 ? 'max-w-[100px]' : 'max-w-[150px]'} leading-snug text-white/80`}>{text}</p>
          </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats