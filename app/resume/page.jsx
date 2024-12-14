"use client"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { experience, aboutMe, education, skills } from "@/constants"
import {motion} from 'framer-motion'

// function buildGraph(connections) {
//     const graph = {};
//     connections.forEach(connection => {
//         const [room1, room2] = connection.split('-');
//         if (!graph[room1]) graph[room1] = [];
//         if (!graph[room2]) graph[room2] = [];
//         graph[room1].push(room2);
//         graph[room2].push(room1);
//     });
//     return graph;
// }

// function bfsShortestPath(graph, start, end) {
//     if (!graph[start] || !graph[end]) return [];

//     const queue = [[start]];
//     const visited = new Set();

//     while (queue.length > 0) {
//         const path = queue.shift();
//         const room = path[path.length - 1];

//         if (room === end) return path;

//         if (!visited.has(room)) {
//             visited.add(room);
//             const neighbors = graph[room];
//             neighbors.forEach(neighbor => {
//                 const newPath = [...path, neighbor];
//                 queue.push(newPath);
//             });
//         }
//     }

//     return [];
// }

// function findShortestPath(connections, start, end) {
//     const graph = buildGraph(connections);
//     return bfsShortestPath(graph, start, end);
// }

// // Example usage:
// const connections = ['RoomA-RoomB', 'RoomB-RoomC', 'RoomC-RoomD', 'RoomA-RoomD'];
// const start = 'RoomA';
// const end = 'RoomD';
// const shortestPath = findShortestPath(connections, start, end);
// console.log(shortestPath);  // Output: ['RoomA', 'RoomD']

const page = () => {
  return (
    <motion.div
      className="min-h[80vh] flex justify-center items-center py-12 xl:py0"
      initial={{opacity: 0}} animate={{
      opacity: 1,
      transition: {
        delay:2.24, duration: 0.4, ease: 'easeIn'
      }
    }}>
      <div className="container mx-auto">
        <Tabs defaultValue='about' className='flex flex-col gap-[60px] xl:flex-row'>
          <TabsList className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0'>
            <TabsTrigger value="about">About me</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent value='about' className='w-full'>
            <div className="flex flex-col gap-6 text-center xl:text-left">
                <h3 className="text-4xl font-bold">{aboutMe.title}</h3>
                <p className="max-w-[600px] mx-auto text-white/60 xl:mx-0">{aboutMe.description}</p>
                  <ul className="grid grid-cols-1 gap-y-6 xl:mx-0 mx-auto max-w-[620px] lg:grid-cols-2">
                    {aboutMe.items.map(({fieldName, fieldValue}, i) => (
                      <li key={i} className="flex justify-center items-center gap-4 xl:justify-start">
                        <span className="text-white/60">{fieldName}</span>
                        <span className="text-lg">{fieldValue}</span>
                      </li>
                    ))}
                  </ul>
              </div>
            </TabsContent>
            <TabsContent value='education' className='w-full'>
            <div className="flex flex-col gap-6 text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] mx-auto text-white/60 xl:mx-0">{education.description}</p>
                <ScrollArea className='h-[400px]'>
                  <ul className="grid grid-cols-1 gap-[20px] lg:grid-cols-2">
                    {education.items.map(({institution, degree, duration}, i) => (
                      <li key={i} className="bg-[#232329] rounded-xl flex flex-col justify-center items-center h-[150px] lg:items-start py-6 px-12 gap-1">
                        <span className="text-cyan-400">{duration}</span>
                        <h3 className="text-md font-bold max-w-[260px] min-h-[45px] text-center xl:text-start">{degree}</h3>
                        <div className="flex items-center gap-3">
                        <span className="h-[6px] w-[6px] rounded-full bg-cyan-400"></span>
                        <p className="text-white/60">{institution}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value='skills' className='w-full h-full'>
              <div className="flex flex-col gap-6 text-center xl:text-left">
                <h3 className="text-4xl font-bold">{skills.title}</h3>
                <p className="max-w-[600px] mx-auto text-white/60 xl:mx-0">{skills.description}</p>
              </div>
              <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:gap-[20px]">
                {skills.items.map(({icon, name}, i) =>(
                  <li key={i} >
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="group w-full h-[120px] flex justify-center items-center rounded-xl bg-[#232329]">
                          <div className="text-6xl group-hover:text-cyan-400 transition-all duration-300">{icon}</div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{name}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </li>
                ))}
              </ul>
            </TabsContent>
            <TabsContent value='experience' className='w-full'>
              <div className="flex flex-col gap-6 text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] mx-auto text-white/60 xl:mx-0">{experience.description}</p>
                <ScrollArea className='h-[400px]'>
                  <ul className="grid grid-cols-1 gap-[20px] lg:grid-cols-2">
                    {experience.items.map(({company, position, duration}, i) => (
                      <li key={i} className="bg-[#232329] rounded-xl flex flex-col justify-center items-center h-[150px] lg:items-start py-6 px-12 gap-1">
                        <span className="text-cyan-400">{duration}</span>
                        <h3 className="text-lg font-bold max-w-[260px] min-h-[60px] text-center xl:text-start">{position}</h3>
                        <div className="flex items-center gap-3">
                        <span className="h-[6px] w-[6px] rounded-full bg-cyan-400"></span>
                        <p className="text-white/60">{company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default page