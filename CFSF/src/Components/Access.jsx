import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import View from '../Images/View.png';
import GroupH from '../Images/GroupH.png';
import HighV from '../Images/HighV.png';

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

const Access = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center py-10 w-full md:w-full overflow-hidden">
        <h1 className="text-[30px] font-bold leading-[90px] font-playfair text-center text-green mb-8">
          Access To Public Services
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
                Ensuring Equitable Access To Essential Public Services Is A Cornerstone Of Our Commitment To Improving Quality Of Life. <span><p>Our Focus Areas Include:</p></span>
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
            <div className="relative p-3 bg-green flex flex-col items-center mx-auto max-w-[90%] sm:max-w-[400px] lg:max-w-[490px] overflow-hidden h-[90px] mt-[-90px] xs:mt[-89px] md:mt-[-80px] sm:mt-[-90px] lg:mt-[-69px]">
              <div className="text-[16px] leading-[42px] font-montserrat font-bold text-white mb-4 text-center">
                Access To Safe And Quality Drinking Water:
              </div>
            </div>
          </motion.div>
          <motion.p className="text-black text-center text-pretty xs:text-left md:ml-[60px] lg:ml-[140px] justify-center md:text-left mt-[50px] text-[16px] xs:h-[20px] xl:ml-[200px] leading-[42px] font-[500] font-montserrat" initial="hidden" animate="visible" variants={textVariants}>
            We Advocate For The Availability Of Clean And Safe Drinking Water For All, Recognizing It As A Fundamental Human Right And A Critical Factor For Public Health.
          </motion.p>

          <motion.div className="w-full" variants={imageVariants}>
            <img src={HighV} alt="View Background" className="w-full object-cover rounded-lg xs:mt-[140px] mt-[119px] h-[190px]" />
          </motion.div>
          <motion.div
            className="relative mb-8 bg-green-300 rounded-lg"
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            <div className="relative p-3 bg-green flex flex-col items-center mx-auto max-w-[90%] sm:max-w-[400px] lg:max-w-[490px] overflow-hidden h-[90px] mt-[-50px] sm:mt-[-49px] lg:-mt-[49px]">
              <div className="text-[16px] leading-[42px] font-montserrat font-bold text-white mb-4 text-center">
                Access To State Provided Uninterrupted Electricity Supply:
              </div>
            </div>
          </motion.div>
          <motion.p className="text-black text-pretty text-center xs:text-left justify-center  md:ml-[60px] md:text-left lg:ml-[140px] mt-[60px] xl:ml-[200px] text-[16px] leading-[42px] font-[500] font-montserrat" initial="hidden" animate="visible" variants={textVariants}>
            We Aim To Guarantee A Reliable And Uninterrupted Electricity Supply, Which Is Vital For Economic Development, Education, And Overall Well-Being.
          </motion.p>
    
          <motion.div className="w-full" variants={imageVariants}>
            <img src={GroupH} alt="HighV Background" className="w-full object-cover rounded-lg mt-[119px] h-[190px]" />
          </motion.div>
          <motion.div
            className="relative mb-8 bg-green-300 rounded-lg"
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            <div className="relative p-3 bg-green flex flex-col items-center mx-auto max-w-[90%] sm:max-w-[400px] lg:max-w-[490px] overflow-hidden h-[99px] mt-[-48px] sm:mt-[-50px] lg:mt-[-49px]">
              <div className="text-[16px] leading-[42px] font-montserrat font-bold text-white mb-4 text-center">
                Health And Access To Sanitation And Waste Disposal Services:
              </div>
            </div>
          </motion.div>
          <motion.p className="text-black text-pretty mb-[70px]  xs:text-left justify-center text-center md:ml-[60px] lg:ml-[140px] md:text-left xl:ml-[200px] mt-[50px] text-[16px] leading-[42px] font-[500] font-montserrat" initial="hidden" animate="visible" variants={textVariants}>
            We Promote Comprehensive Health Services, Effective Sanitation, And Efficient Waste Disposal Systems To Ensure A Healthy Environment And Reduce The Spread Of Diseases.
          </motion.p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Access;
