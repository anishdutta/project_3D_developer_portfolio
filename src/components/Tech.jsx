import React from "react";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div>
       <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
        MY PROFICIENCIES AND EXPERTISE
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          My Tech Stack.
        </h2>
      </motion.div>
    <div className="flex flex-row flex-wrap justify-center gap-10 mt-10">
      {technologies.map((technology,ind) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas onMouseOver={()=>{
            console.log("hover");
            const doc = document.getElementsByClassName(`${ind}-hover`);
            doc[0].classList.remove('hidden')
          }} onmouseleave={
            ()=>{
              console.log("leave");
              const doc = document.getElementsByClassName(`${ind}-hover`);
              doc[0].classList.add('hidden')
            }
          } icon={technology.icon} />
          <div class={`hidden group-hover:block text-center bg-gray-800 text-white text-sm py-1 px-2 rounded-md shadow-md whitespace-nowrap ${ind}-hover`}>
          {technology.name}
          </div>
        </div>
      ))}
    </div></div>
  );
};

export default SectionWrapper(Tech, "");
