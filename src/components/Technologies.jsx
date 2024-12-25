import { FaNodeJs } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { DiHtml5 } from "react-icons/di"; 
import { DiCss3 } from "react-icons/di"; 
import { SiBootstrap } from "react-icons/si"; 
import { SiJquery } from "react-icons/si"; 
import { SiTailwindcss } from "react-icons/si"; 
import { SiMysql } from "react-icons/si"; 
import {motion} from "framer-motion"


const  iconVariants=(duration)=>(
   {
    initial:{y:-10},
    animate:{
        y:[10,-10],
        transition:{
           duration:duration,
           ease:"linear",
           repeat:Infinity,
           repeatType:"reverse"
        }
    }
   }
)

const Technologies = () => {
  return (
    <div className="pb-24">
      <motion.h2
      whileInView={{opacity:1,y:0}}
      initial={{opacity:0,y:100}}
      transition={{duration:1.5}}
      
      className="my-20 text-center text-5xl">Technologies</motion.h2>

      <motion.div 
      whileInView={{opacity:1,x:0}}
      initial={{opacity:0,x:-100}}
      transition={{duration:1.5}}
      
      className="flex flex-wrap items-center justify-center gap-2">
        <motion.div
        initial="initial"
        animate="animate"
        variants={iconVariants(2)}
        className="p-4 text-center">
          <RiReactjsLine className="text-7xl text-cyan-400" />
          <div className="text-l bg-gradient-to-r from-blue-500 via-white to-blue-500 bg-clip-text text-transparent">React</div>
        </motion.div>


        <motion.div 
        initial="initial"
        animate="animate"
        variants={iconVariants(3)}
        className="p-4 text-center">
          <TbBrandNextjs className="text-7xl" />
          <div className="text-l bg-gradient-to-r from-blue-500 via-white to-blue-500 bg-clip-text text-transparent">Next.js</div>
        </motion.div>

        <motion.di 
        initial="initial"
        animate="animate"
        variants={iconVariants(4)}
        className="p-4 text-center">
          <SiMongodb className="text-7xl text-cyan-500" />
          <div className="text-l bg-gradient-to-r from-blue-500 via-white to-blue-500 bg-clip-text text-transparent">MongoDB</div>
        </motion.di>

        <motion.div
         initial="initial"
         animate="animate"
         variants={iconVariants(2)}
        className="p-4 text-center">
          <FaNodeJs className="text-7xl text-green-500" />
          <div className="text-l bg-gradient-to-r from-blue-500 via-white to-blue-500 bg-clip-text text-transparent">Node.js</div>
        </motion.div>

        <motion.div 
         initial="initial"
         animate="animate"
         variants={iconVariants(3)}
        className="p-4 text-center">
          <DiHtml5 className="text-7xl text-orange-500" />
          <div className="text-l bg-gradient-to-r from-blue-500 via-white to-blue-500 bg-clip-text text-transparent">HTML5</div>
        </motion.div>

        <motion.div
         initial="initial"
         animate="animate"
         variants={iconVariants(4)}
        className="p-4 text-center">
          <DiCss3 className="text-7xl text-blue-500" />
          <div className="text-l bg-gradient-to-r from-blue-500 via-white to-blue-500 bg-clip-text text-transparent">CSS3</div>
        </motion.div>

        <motion.div
         initial="initial"
         animate="animate"
         variants={iconVariants(2)}
         
         className="p-4 text-center">
          <SiBootstrap className="text-7xl text-purple-500" />
          <div className="text-l bg-gradient-to-r from-blue-500 via-white to-blue-500 bg-clip-text text-transparent">Bootstrap</div>
        </motion.div>

        <motion.div
         initial="initial"
         animate="animate"
         variants={iconVariants(3)}
         className="p-4 text-center">
          <SiJquery className="text-7xl text-blue-600" />
          <div className="text-l bg-gradient-to-r from-blue-500 via-white to-blue-500 bg-clip-text text-transparent">jQuery</div>
        </motion.div>

        <motion.div 
         initial="initial"
         animate="animate"
         variants={iconVariants(4)}
        className="p-4 text-center">
          <SiTailwindcss className="text-7xl text-teal-500" />
          <div className="text-l bg-gradient-to-r from-blue-500 via-white to-blue-500 bg-clip-text text-transparent">Tailwind CSS</div>
        </motion.div>

        <motion.div
         initial="initial"
         animate="animate"
         variants={iconVariants(2)}
        className="p-4 text-center">
          <SiMysql className="text-7xl text-blue-800" />
          <div className="text-l bg-gradient-to-r from-blue-500 via-white to-blue-500 bg-clip-text text-transparent">MySQL</div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
