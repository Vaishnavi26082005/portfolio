import { CONTACT } from "../constants";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import {motion } from "framer-motion"

const Contact = () => {
  return (
    <div className="border-t border-b-blue-950 pb-20">
      <motion.h2
       whileInView={{opacity:1,y:0 }}
       initial={{opacity:0,y:-100 }}
       transition={{duration:0.5}}
      className="my-10 text-center text-5xl">Get In Touch..</motion.h2>
      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{opacity:1,x:0 }}
          initial={{opacity:0,x:-100 }}
          transition={{duration:1}}
         className="my-4">{CONTACT.address}</motion.p>
        <motion.p
         whileInView={{opacity:1,x:0 }}
         initial={{opacity:0,x:-100 }}
         transition={{duration:1}} className="my-4">
          <a href={`tel:${CONTACT.phoneNo}`} className="text-blue-500 hover:underline">
            {CONTACT.phoneNo}
          </a>
        </motion.p>
        <p className="my-4">
          <a href={`mailto:${CONTACT.email}`} className="text-blue-500 hover:underline">
            {CONTACT.email}
          </a>
        </p>
        <motion.div 
        whileInView={{opacity:1,x:0 }}
        initial={{opacity:0,x:100 }}
        transition={{duration:1}}
        className="flex justify-center space-x-4 mt-6">
          <a
            href={CONTACT.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-4 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white transition-colors"
          >
            <FaLinkedin />
            <span>LinkedIn</span>
          </a>
          <a
            href={CONTACT.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-4 py-2 border border-gray-800 text-gray-800 rounded hover:bg-gray-800 hover:text-white transition-colors"
          >
            <FaGithub />
            <span>GitHub</span>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
