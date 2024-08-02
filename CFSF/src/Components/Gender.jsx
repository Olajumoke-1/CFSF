import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import View from '../Images/View.png';
import GroupH from '../Images/GroupH.png';

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 3, staggerChildren: 2 } },
};

const imageVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 5,
      staggerChildren: 1
    } 
  },
};

const Gender = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center py-10 w-full md:w-full overflow-hidden">
        <h1 className="text-[30px] font-bold leading-[90px] font-playfair text-center text-green mb-8">
        Gender Justice
        </h1>
        <div className="w-full max-w-9xl px-4 md:px-8 space-y-8">
          <motion.div
            className="relative mb-8 bg-green-200 rounded-lg"
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            <div className="relative p-6 bg-green min-h-[90px] mt-[20px] mb-[-70px] md:mb-[-70px] lg:mb-[-60px] sm:mb-[-70px] max-w-[100%] mx-auto">
              <motion.h2 className="text-[16px] leading-[42px] font-bold text-white mb-4 text-center text-pretty">
              We are dedicated to advocating for the rights of women and youth, ensuring their voices are heard and their needs are met. Our initiatives focus on:
              </motion.h2>
            </div>
          </motion.div>
          <motion.img 
          src={View} 
          alt="Background" 
          className="w-full object-cover rounded-lg mt-[-118px] h-[210px]"
          initial="hidden"
          animate="visible"
          variants={imageVariants}
          />

          <motion.div
            className="relative mb-8 bg-green-300 rounded-lg"
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            <div className="relative p-3 bg-green flex flex-col items-center mx-auto max-w-[90%] sm:max-w-[400px] lg:max-w-[490px] overflow-hidden h-[60px] mt-[-90px] xs:mt[-89px] md:mt-[-80px] sm:mt-[-90px] lg:mt-[-69px]">
              <div className="text-[16px] leading-[42px] font-montserrat font-bold text-white mb-4 text-center">
              Rights of Women and Youth
              </div>
            </div>
          </motion.div>
          <motion.p className="text-black text-center text-pretty md:ml-[60px] xs:text-left lg:ml-[140px] justify-center md:text-left mt-[50px] text-[16px] xs:h-[20px] xl:ml-[200px] leading-[42px] font-[500] font-montserrat" initial="hidden" animate="visible" variants={textVariants}>
          We are dedicated to advocating for the rights of women and youth, ensuring their voices are heard and their needs are met. Our initiatives focus on:
          Empowerment: Providing resources and opportunities for women and youth to achieve economic independence and personal growth.
          Education: Promoting access to quality education and training programs to enhance their skills and knowledge.
          Health and Well-being: Ensuring access to comprehensive healthcare services, including reproductive health and mental health support.
          Protection: Safeguarding against violence, discrimination, and exploitation through legal support and community programs.
          Participation: Encouraging active participation in political, social, and economic decision-making processes.
         </motion.p>

          <motion.div className="w-full" variants={imageVariants}>
            <img src={GroupH} alt="View Background" className="w-full object-cover rounded-lg xs:mt-[699px] lg:mt-[340px] sm:mt-[469px] md:mt-[460px] xl:mt-[319px] h-[190px]" />
          </motion.div>
          <motion.div
            className="relative mb-8 bg-green-300 rounded-lg"
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            <div className="relative p-3 bg-green flex flex-col items-center mx-auto max-w-[90%] sm:max-w-[400px] lg:max-w-[490px] overflow-hidden h-[90px] mt-[-50px] sm:mt-[-49px] lg:-mt-[49px]">
              <div className="text-[16px] leading-[42px] font-montserrat font-bold text-white mb-3 text-center">
              Rights of IDPs, Migrants, and Refugees
              </div>
            </div>
          </motion.div>
          <motion.p className="text-black text-pretty text-center xs:text-left justify-center  md:ml-[60px] md:text-left lg:ml-[140px] mt-[60px] xl:ml-[200px] text-[16px] leading-[42px] font-[500] font-montserrat" initial="hidden" animate="visible" variants={textVariants}>
          We are committed to protecting and promoting the rights of Internally Displaced Persons (IDPs), migrants, and refugees. Our efforts include:
          Advocacy: Raising awareness about the challenges faced by these vulnerable groups and advocating for their rights at local, national, and international levels.
          Support Services: Providing essential services such as housing, healthcare, education, and legal assistance to help them rebuild their lives.
          Integration: Facilitating social and economic integration through community programs, language courses, and employment opportunities.
          Safety and Security: Ensuring their safety and protection from abuse, exploitation, and human trafficking.
          Empowerment: Empowering them with skills and resources to achieve self-reliance and contribute positively to their new communities.
          </motion.p>
  
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Gender;
