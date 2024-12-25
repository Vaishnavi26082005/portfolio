import React from 'react';
import { PROJECTS } from '../constants';
import {motion} from "framer-motion";

const Project = () => {
  return (
    <div className="pb-24">
      <motion.h2 
      whileInView={{opacity:1,y:0 }}
      initial={{opacity:0,y:-100 }}
      transition={{duration:0.5}}
      className="my-20 text-center text-5xl">Projects</motion.h2>
      <div className="flex flex-wrap justify-center gap-8">
        {PROJECTS.map((project, index) => (
          <motion.div 
          whileInView={{opacity:1,x:0 }}
         initial={{opacity:0,x:-100 }}
         transition={{duration:1}}
          key={index} className="max-w-sm rounded overflow-hidden shadow-lg">
            < img 
             whileInView={{opacity:1,x:0 }}
             initial={{opacity:0,x:100 }}
             transition={{duration:1}}className="w-full rounded-xl" style={{width:'300px',height:'300px'}} src={project.image} alt={project.title} />
            <div
            
            className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{project.title}</div>
              <p
               
              className="text-gray-700 text-base">{project.description}</p>
            </div>
            <div   className="px-6 pt-4 pb-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div 
             whileInView={{opacity:1,x:0 }}
             initial={{opacity:0,x:100 }}
             transition={{duration:1}}
             className="px-6 pb-4 flex justify-between">
              {project.Demo && (
                <a  
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-800 hover:bg-blue-400 text-white font-bold py-2 px-2 rounded-lg"
                >
                  Demo
                </a>
              )}
              {project.Github && (
                <a
                
                  href={project.Github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-800 hover:bg-blue-400 text-white font-bold py-2 px-2 rounded-lg"
                >
                  GitHub
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Project;
