import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import Hse from '../Images/Hse.png';


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

const Tax = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center py-10 w-full md:w-full overflow-hidden">
        <h1 className="text-[30px] font-bold leading-[90px] font-playfair text-center text-green mb-8">
        Tax Justice
        </h1>
        <div className="w-full max-w-9xl px-4 md:px-8 space-y-10">
          <motion.div
            className="relative mb-8 bg-green-200 rounded-lg"
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            <div className="relative p-6 bg-green min-h-[70px] xs:text-left mt-[20px] mb-[-70px] md:mb-[-70px] lg:mb-[-60px] sm:mb-[-70px] max-w-[100%] mx-auto">
              <motion.h2 className="text-[16px] leading-[42px] font-bold text-white mb-4 text-center text-pretty">
              Our mission is to advocate for tax justice, ensuring that governments collect and allocate resources in a way that promotes social equity and economic fairness.
              </motion.h2>
            </div>
          </motion.div>
          <motion.img 
          src={Hse} 
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
            <div className="relative p-3 bg-green flex flex-col items-center mx-auto max-w-[90%] sm:max-w-[400px] lg:max-w-[490px] overflow-hidden h-[60px] mt-[-65px] xs:mt[-38px] md:mt-[-60px] sm:mt-[-60px] lg:mt-[-69px]">
              <div className="text-[16px] leading-[42px] font-montserrat font-bold text-white mb-4 text-center">
              Tax Justice
              </div>
            </div>
          </motion.div>
          <motion.p className="text-black text-center text-pretty xs:text-left md:ml-[60px] lg:ml-[140px] justify-center md:text-left mt-[50px] text-[16px] xl:ml-[200px] leading-[42px] font-[500] font-montserrat" initial="hidden" animate="visible" variants={textVariants}>
          We believe our tax and financial systems are our most potent tools for creating an impartial society that gives equal attention to the needs of every citizen. We advocate for the reprogramme of our tax systems to meet the needs of citizens.
          </motion.p>
  
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default Tax;
