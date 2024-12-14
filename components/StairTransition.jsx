"use client"
import {AnimatePresence, delay, motion} from 'framer-motion'
import { usePathname } from 'next/navigation'
import Stair from './Stair'


const StairTransition = () => {
    const pathname = usePathname()
  return (
    <AnimatePresence mode='wait'>
        <div key={pathname}>
            <div className='h-screen w-screen top-0 right-0 fixed left-0 pointer-events-none z-40 flex'>
                <Stair />
            </div>
            <motion.div 
                className="h-screen w-screen fixed top-0 bg-primary pointer-events-none"
                initial={{opacity: 1}}
                animate={{
                    opacity: 0,
                    transition: {
                        delay: 1, 
                        duration: 0.4,
                        ease: "easeInOut"
                    }
                }}
            />
        </div>
    </AnimatePresence>
  )
}

export default StairTransition