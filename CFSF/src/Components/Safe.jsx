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

const Safe = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center py-7 w-full md:w-full overflow-hidden">
        <h1 className="text-[30px] font-bold leading-[90px] font-playfair text-center text-green mb-[-10px]">
        Safe Environment
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
              We are committed to fostering a safe environment by addressing key issues such as climate change, desertification, and the impact of extractive industries.
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
              Climate Change
              </div>
            </div>
          </motion.div>
          <motion.p className="text-black text-center xs:text-left text-pretty md:ml-[60px] lg:ml-[140px] justify-center md:text-left mt-[50px] text-[16px] xs:h-[20px] xl:ml-[200px] leading-[42px] font-[500] font-montserrat" initial="hidden" animate="visible" variants={textVariants}>
          Climate change poses one of the greatest threats to our planet, impacting ecosystems, weather patterns, and human livelihoods. Our mission is to raise awareness about the causes and consequences of climate change, promote sustainable practices, and advocate for policies that mitigate its effects. By working together, we can reduce greenhouse gas emissions, support renewable energy initiatives, and protect our environment for future generations.
          </motion.p>

          <motion.div className="w-full" variants={imageVariants}>
            <img src={GroupH} alt="View Background" className="w-full object-cover rounded-lg xs:mt-[400px] sm:mt-[310px] md:mt-[280px] lg:mt-[209px] mt-[119px] h-[190px]" />
          </motion.div>
          <motion.div
            className="relative mb-8 bg-green-300 rounded-lg"
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            <div className="relative p-3 bg-green flex flex-col items-center mx-auto max-w-[90%] sm:max-w-[400px] lg:max-w-[490px] overflow-hidden h-[60px] mt-[-50px] sm:mt-[-49px] lg:-mt-[49px]">
              <div className="text-[16px] leading-[42px] font-montserrat font-bold text-white mb-4 text-center">
              Desertification
              </div>
            </div>
          </motion.div>
          <motion.p className="text-black text-pretty text-center xs:text-left justify-center md:ml-[60px] md:text-left lg:ml-[140px] mt-[60px] xl:ml-[200px] text-[16px] leading-[42px] font-[500] font-montserrat" initial="hidden" animate="visible" variants={textVariants}>
          Desertification, the process by which fertile land becomes desert, is a critical environmental issue affecting millions of people worldwide. It results from various factors, including deforestation, overgrazing, and poor agricultural practices. We aim to combat desertification by promoting sustainable land management, reforestation projects, and community education programs. Together, we can restore degraded lands, improve soil health, and ensure a sustainable future for those living in vulnerable regions.
          </motion.p>
    
          <motion.div className="w-full" variants={imageVariants}>
            <img src={GroupH} alt="HighV Background" className="w-full object-cover rounded-lg mt-[119px] h-[190px]" />
          </motion.div>
          <motion.div
            className="relative bg-green-300 rounded-lg"
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            <div className="relative p-3 bg-green flex flex-col items-center mx-auto max-w-[90%] sm:max-w-[400px] lg:max-w-[490px] overflow-hidden h-[60px] mt-[-48px] sm:mt-[-50px] lg:mt-[-49px]">
              <div className="text-[16px] leading-[42px] font-montserrat font-bold text-white mb-4 text-center">
              Extractives
              </div>
            </div>
          </motion.div>
          <motion.p className="text-black text-pretty xs:text-left justify-center text-center md:ml-[60px] lg:ml-[140px] md:text-left xl:ml-[200px] mt-[50px] text-[16px] leading-[42px] font-[500] font-montserrat" initial="hidden" animate="visible" variants={textVariants}>
          The extractive industries, such as mining and oil extraction, play a significant role in the global economy but often come at a high environmental cost. Our focus is on promoting responsible extraction practices that minimize environmental degradation and protect biodiversity. We advocate for transparency, accountability, and community involvement in the decision-making processes related to extractive activities. By supporting sustainable development, we can balance economic growth with the preservation of our natural resources.
          </motion.p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Safe;
