import {motion} from 'framer-motion'


const stairAnimation =  {
    initial: {
        top: "0%"
    },
    animate: {
        top: "100%"
    },
    exit:{
        top: ["100%", "0%"]
    }
}
const Stair = () => {

    // calculate the reverse stagger of the steps
    const reverseIndex = (index) => {
        const totalsteps = 1;
        return totalsteps - index - 1;
    }
  return (
    <>
        {/* render 6 step animation */}
        {[...Array(1)].map((_, index)=> (
            <motion.div 
                key={index}
                variants={stairAnimation}
                initial='initial'
                animate='animate'
                exit='exit'
                transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                    delay: reverseIndex(index) * 0.1,
                }}
                className="w-full h-full bg-white relative"
            />
        ))}
    </>
  )
}

export default Stair