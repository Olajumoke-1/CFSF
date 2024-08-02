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

const Govern = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center py-10 w-full md:w-full overflow-hidden">
        <h1 className="text-[30px] font-bold leading-[90px] font-playfair text-center text-green mb-8">
        Good governance, Accountability and Transparency.
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
              Effective governance is the cornerstone of a thriving society. We are committed to promoting good governance through:
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
              Press freedom
              </div>
            </div>
          </motion.div>
          <motion.p className="text-black text-center text-pretty md:ml-[60px] xs:text-left lg:ml-[140px] justify-center md:text-left mt-[50px] text-[16px] xs:h-[20px] xl:ml-[200px] leading-[42px] font-[500] font-montserrat" initial="hidden" animate="visible" variants={textVariants}>
          A free and independent press is vital to democracy. We advocate for:
          Protecting the rights of journalists to report the truth without fear of censorship or retribution.
          Ensuring that media outlets can operate independently and without undue influence from governmental or private entities.
          Promoting access to accurate and unbiased information, enabling citizens to make informed decisions and hold power to account.
         </motion.p>

          <motion.div className="w-full" variants={imageVariants}>
            <img src={GroupH} alt="View Background" className="w-full object-cover rounded-lg xs:mt-[320px] lg:mt-[200px] sm:mt-[259px] md:mt-[240px] mt-[119px] h-[190px]" />
          </motion.div>
          <motion.div
            className="relative mb-8 bg-green-300 rounded-lg"
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            <div className="relative p-3 bg-green flex flex-col items-center mx-auto max-w-[90%] sm:max-w-[400px] lg:max-w-[490px] overflow-hidden h-[90px] mt-[-50px] sm:mt-[-49px] lg:-mt-[49px]">
              <div className="text-[16px] leading-[42px] font-montserrat font-bold text-white mb-4 text-center">
              Social and economic justice for the poor.
              </div>
            </div>
          </motion.div>
          <motion.p className="text-black text-pretty text-center xs:text-left justify-center  md:ml-[60px] md:text-left lg:ml-[140px] mt-[60px] xl:ml-[200px] text-[16px] leading-[42px] font-[500] font-montserrat" initial="hidden" animate="visible" variants={textVariants}>
          Economic disparity and social injustice undermine the fabric of society. We are dedicated to:
        Advocating for policies and programs that provide fair opportunities for all, particularly those who are marginalized and disadvantaged.
        Ensuring access to essential services such as healthcare, education, and housing for all individuals, regardless of their economic status.
        Promoting sustainable economic practices that create job opportunities and uplift communities out of poverty.
        Championing the rights of workers and ensuring fair wages, safe working conditions, and the elimination of exploitation and discrimination in the workplace.
        By prioritizing these core values, we strive to build a more just, equitable, and inclusive society where every individual has the opportunity to thrive and contribute to the common good.
          </motion.p>
  
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Govern;
