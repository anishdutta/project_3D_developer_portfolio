import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonials,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
  >
    <p className='text-white font-black text-[28px]'>{name}</p>

    <div className='mt-1'>
      <p className='text-white tracking-wider text-[18px]'>
      <ul className="list-disc list-outside">
        {
      testimonials.map((test)=>{
        return <li className="text-white text-sm py-1" dangerouslySetInnerHTML={{ __html: sanitizeText(test) }}></li>
      })
      }
      </ul>
      </p>

      
    </div>
  </motion.div>
);

const sanitizeText = (text)=>{

  const sanitizedText = text.replace(/(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/igm,(url,match)=>{
    console.log("here",match,url)
    return `<u><b><a href=${url} className="sm:text-[28px] text-[14px] text-secondary uppercase tracking-wider" ><p>Do give it a read 🤓📚</p> </a></b></u>`;
  });

  console.log("sanitizeText",sanitizedText)

  return sanitizedText;

}

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Hackathons, Featured posts, Open source, Certifications</p>
          <h2 className={styles.sectionHeadText}>Beyond the code</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {
        testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} testimonials={testimonial.testimonial} name={testimonial.name}/>
        ))
        }
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
