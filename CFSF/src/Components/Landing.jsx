import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import GC from '../Images/GC.png'
import { Link } from 'react-router-dom';
import Latest from './Latest';
import Testimonial from './Testimonial';


const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 1.5,
    },
  },
};
const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const cardVariants = {
  rest: { rotateY: 0 },
  hover: {
    rotateY: 50,
    transition: {
      duration: 0.8, // Adjust duration as needed for a smooth flip
    },
  },
};

const cardsVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.6,
    },
  }),
  hover: {
    scale: 1.0, // Adjust scale as needed
    transition: {
      type: "tween",
      stiffness: 40, // Adjust stiffness as needed
      duration: 0.3,
    },
  },
};



const Landing = () => {
  const [hover, setHover] = useState(false);
  const textVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };



  const cards = [
    {
      title: 'Education',
      description: `At CFSF, we believe that education is the key to unlocking a bright future for individuals and communities. We advocate for sustained public funding of education to ensure that all children regardless of their socioeconomic background, have access to quality education.`,
      icon: (
        <div className="flex justify-center">
          <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M56 45.4799V21.3399C56 18.9399 54.04 17.1599 51.66 17.3599H51.54C47.34 17.7199 40.96 19.8599 37.4 22.0999L37.06 22.3199C36.48 22.6799 35.52 22.6799 34.94 22.3199L34.44 22.0199C30.88 19.7999 24.52 17.6799 20.32 17.3399C17.94 17.1399 16 18.9399 16 21.3199V45.4799C16 47.3999 17.56 49.1999 19.48 49.4399L20.06 49.5199C24.4 50.0999 31.1 52.2999 34.94 54.3999L35.02 54.4399C35.56 54.7399 36.42 54.7399 36.94 54.4399C40.78 52.3199 47.5 50.0999 51.86 49.5199L52.52 49.4399C54.44 49.1999 56 47.3999 56 45.4799Z" stroke="#397537" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M36 22.98V52.98" stroke="#397537" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M27.5 28.98H23" stroke="#397537" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M29 34.98H23" stroke="#397537" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      )
    },
    {
      title: 'Health',
      description: `At CFSF, we believe that access to quality healthcare is a fundamental human right. Our advocacy is dedicated to ensuring that everyone, regardless of their socio-economic status, can access the medical care they need to live healthy, productive lives.`,
      icon: (
        <div className="flex justify-center">
          <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M29.9399 56H41.9399C51.9399 56 55.9399 52 55.9399 42V30C55.9399 20 51.9399 16 41.9399 16H29.9399C19.9399 16 15.9399 20 15.9399 30V42C15.9399 52 19.9399 56 29.9399 56Z" stroke="#397537" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M15.9399 37.4L27.9399 37.36C29.4399 37.36 31.1199 38.5 31.6799 39.9L33.9599 45.66C34.4799 46.96 35.2999 46.96 35.8199 45.66L40.3999 34.04C40.8399 32.92 41.6599 32.88 42.2199 33.94L44.2999 37.88C44.9199 39.06 46.5199 40.02 47.8399 40.02H55.9599" stroke="#397537" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      )
    },
    {
      title: 'Housing & Shelter',
      description: `At CFSF, we believe that a safe and secure home is a fundamental human right. Our advocacy in this regard  is dedicated to asking government at all levels to provide essential housing solutions for citizens. Our philosophy is that every individual and family have access to a liveable and affordable place to call home. `,
      icon: (
        <div className="flex justify-center">
          <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M30.04 17.6801L19.26 26.0801C17.46 27.4801 16 30.4601 16 32.7201V47.5401C16 52.1801 19.78 55.9801 24.42 55.9801H47.58C52.22 55.9801 56 52.1801 56 47.5601V33.0001C56 30.5801 54.38 27.4801 52.4 26.1001L40.04 17.4401C37.24 15.4801 32.74 15.5801 30.04 17.6801Z" stroke="#397537" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M36 47.98V41.98" stroke="#397537" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      )
    },
    {
      title: 'Food Relief Funding',
      description: `At CFSF, we believe that access to nutritious food is a fundamental human right. Our food justice advocacy aims to combat hunger and food insecurity by agitating for the necessary resources to farmers and especially small holders who form the bulk of the farming communities. We also advocate for a removal of all impediemts that make food scarce and expensive.`,
      icon: (
        <div className="flex justify-center">
          <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 56H56" stroke="#397537" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M47.12 32C50.8 32 53.78 34.68 53.78 38V56" stroke="#397537" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M18.22 56V38C18.22 34.68 21.2 32 24.88 32H38.6" stroke="#397537" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M23.12 32V26.34C23.12 23.94 25.28 22 27.96 22H44.06C46.72 22 48.88 23.94 48.88 26.34V32" stroke="#397537" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M52.94 40H52.04C50.56 40 49.34 41.2 49.34 42.7V43.32C49.34 44.8 48.14 46.02 46.64 46.02C45.16 46.02 43.94 44.82 43.94 43.32V42.7C43.94 41.22 42.74 40 41.24 40C39.76 40 38.54 41.2 38.54 42.7V43.32C38.54 44.8 37.34 46.02 35.84 46.02C34.36 46.02 33.14 44.82 33.14 43.32V42.7C33.2 41.2 32 40 30.52 40C29.04 40 27.82 41.2 27.82 42.7" stroke="#397537" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M19.06 39.96L19.8 39.98C21.28 40 22.46 41.2 22.46 42.68V43.34C22.46 44.82 23.66 46.04 25.16 46.04" stroke="#397537" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M28 22V18" stroke="#397537" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M44 22V18" stroke="#397537" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M36 22V16" stroke="#397537" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      )
    },  
  ];
  

  return (
    // HANDCHAIN SECTION!!!
<>

<div className="flex flex-col md:flex-row items-center justify-center min-h-screen mt-[-170px] p-4 md:p-10 xs:mt-[30px] md:mt-[-100px] xl:mt-[90px]">
      <motion.div
        className="w-full md:w-1/2 flex justify-center items-center md:mr-24 ml-8"
        initial={{ x: '-100vw' }}
        animate={{ x: 0 }}
        transition={{ type: 'tween', duration: 9 }}
      >
        <img
          src={GC}
          alt="Handchain image"
          className="max-w-full h-auto object-cover"
          style={{
            mixBlendMode: 'multiply',
            backgroundColor: '#FFFFFF', // Ensure this matches the design
          }}
        />
      </motion.div>
      <motion.div
        className="w-full md:w-1/2 mt-4 md:mt-0 text-left md:text-left space-y-4 p-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.7 }}
        transition={{ staggerChildren: 1.0 }}
      >
        <motion.div
          className="flex flex-col items-center md:items-start"
          variants={textVariant}
        >
          <p className="text-green font-montserrat relative">
            About us
            <span className="absolute w-[126px] h-[2px] bg-gr top-1/2 transform -translate-y-1/2 ml-0 xs:ml-[9px] md:ml-[9px] xl:ml-[8px]"></span>
          </p>
        </motion.div>

        <motion.h2 className="text-2xl md:text-4xl font-[600] text-gr font-playfair" variants={textVariant}>
        Empowering Communities Since 2015
        </motion.h2>

        <motion.p className="text-xl sm:text-2xl md:text-[16px] leading-6 md:leading-[26px] text-black font-[400] font-montserrat" variants={textVariant}>
          Citizens free service forum, CFSF, is a non-profit <br />making, non-political and non-governmental <br /> organization, founded in the year 2015 and <br /> subsequently registered by the corporate affairs <br /> commission (CAC) on the 23rd day of February, 2016 <br /> (Reg. No. CAC/IT/84336).
        </motion.p>
        <motion.a href="/About" className="inline-block px-6 py-3 text-white bg-green rounded hover:bg-darkgreen" variants={textVariant}>
          Read More
        </motion.a>
      </motion.div>
    </div>
      {/* // HANDCHAIN SECTION!!! */}


      {/* CFSF SECTION!!!! */}
      <div className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-7xl mx-auto text-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
       <motion.div className="flex items-center justify-center mb-[90px]" variants={itemVariants}>

          <div className="w-[329px] h-[2px] bg-red-600 mr-2"></div>
          <h2 className="text-lg text-red-600 font-semibold">
            Welcome To CFSF
          </h2>
          <div className="w-[329px] h-[2px] bg-red-600 ml-2"></div>
        </motion.div>

      </motion.div>

      <motion.div
        className="mt-10 flex flex-col md:flex-row justify-center items-center xs:gap-14 sm:gap-12 gap-20"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div
        className="bg-lightgr p-6 rounded-lg shadow-lg max-w-sm w-full md:w-1/2 lg:w-1/3"
        variants={cardVariants}
        initial="rest"
        animate={hover ? "hover" : "rest"}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <motion.div className="text-center justify-center" variants={itemVariants}>
          <svg className='sm:mr-20 xs:mr-20' width="30" height="33" viewBox="0 0 30 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.3039 0.201703C14.4779 0.0721625 14.6892 0.00147819 14.9066 2.29293e-05C15.124 -0.00143233 15.3362 0.0664181 15.5119 0.193617C18.1558 2.10725 21.403 3.246 24.036 3.90499C25.3443 4.23246 26.4832 4.4373 27.2926 4.55994C27.6878 4.61952 28.0843 4.6703 28.4817 4.71222L28.5427 4.71896H28.559C28.8129 4.74057 29.0494 4.85616 29.2216 5.04284C29.3939 5.22952 29.4893 5.47368 29.4891 5.72698V14.8235C29.4891 21.3312 25.1328 29.1286 15.2259 32.2942C15.0231 32.3591 14.8049 32.3591 14.6022 32.2942C4.71554 29.134 0 21.3501 0 14.4866V5.72698C0 5.20141 0.406746 4.76208 0.935516 4.71896H0.953141L1.01822 4.71222C1.07652 4.70683 1.16465 4.69874 1.28125 4.68527C1.51174 4.65966 1.85341 4.61923 2.28049 4.55859C3.13465 4.43596 4.33184 4.22977 5.69173 3.90229C8.43455 3.24196 11.7536 2.10321 14.3039 0.201703ZM22.7398 11.1701C22.9336 10.9835 23.0449 10.728 23.0493 10.4599C23.0536 10.1917 22.9506 9.93287 22.7629 9.74023C22.5752 9.54758 22.3181 9.43694 22.0484 9.43264C21.7786 9.42835 21.5181 9.53075 21.3243 9.71732L11.5028 19.1642L8.4793 16.4339C8.27837 16.2627 8.01819 16.1761 7.75405 16.1925C7.4899 16.2089 7.2426 16.327 7.06468 16.5218C6.88676 16.7165 6.79223 16.9725 6.80118 17.2354C6.81014 17.4984 6.92186 17.7474 7.11263 17.9298L10.8411 21.2988C11.0324 21.4716 11.2826 21.5655 11.541 21.5615C11.7993 21.5575 12.0465 21.4559 12.2322 21.2773L22.7398 11.1701Z" fill="#E63946"/>
          </svg>
          <h3 className="text-lg font-medium text-green ml-[-116px] mt-[-29px] mb-4 xs:ml-[-30px]">Our Mission</h3>
          <p className="text-gray-600 justify-center items-center text-left">
          To raise awareness and empower citizens and communities by providing unhindered access to quality public goods, services and programs and thus, promoting citizens active and popular participation in governance.
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        className="bg-lightgr p-6 rounded-lg shadow-lg max-w-sm w-full md:w-1/2 lg:w-1/3"
        variants={cardVariants}
        initial="rest"
        animate={hover ? "hover" : "rest"}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <motion.div className="text-center justify-center" variants={itemVariants}>
          <svg className='sm:mr-20 xs:mr-20' width="37" height="32" viewBox="0 0 37 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.2864 0V2.68994C12.7179 2.0467 11.0361 1.71533 9.3542 1.71533C5.97157 1.71533 2.58894 3.04081 0 5.71126L6.29283 12.2022H8.39043V14.3659C10.0156 16.0422 12.1321 16.9194 14.2675 17.0168V21.4416H8.6172V27.2893C8.6172 29.4334 10.318 31.1878 12.3967 31.1878H31.2941C34.431 31.1878 36.9633 28.5758 36.9633 25.3401V0H14.2864ZM12.1888 12.4946V8.30374H7.88021L5.91488 6.27654C7.01216 5.83974 8.17804 5.61508 9.3542 5.6138C11.8864 5.6138 14.2486 6.6274 16.0439 8.45968L18.7084 11.2081L18.3305 11.5979C17.8557 12.0924 17.2905 12.4848 16.6677 12.7525C16.0449 13.0202 15.3769 13.1578 14.7022 13.1573C13.814 13.1573 12.9447 12.9234 12.1888 12.4946ZM33.1838 25.3401C33.1838 26.4121 32.3334 27.2893 31.2941 27.2893C30.2547 27.2893 29.4043 26.4121 29.4043 25.3401V21.4416H18.0659V16.3931C19.143 15.9447 20.1446 15.282 21.0139 14.3854L21.3918 13.9955L26.7398 19.4923H29.4043V16.7439L18.0659 5.10699V3.89847H33.1838V25.3401Z" fill="#E63946"/>
          </svg>
          <h3 className="text-lg font-medium text-green ml-[-116px] mt-[-29px] mb-4 xs:ml-[-30px]">Our Vision</h3>
          <p className="text-gray-600 justify-center items-center text-left">
          Achieving a world where citizens fully participate, engage and collectively dictate the direction and content of policy formulation and implementation with direct bearing on general human development agenda.
          </p>
        </motion.div>
      </motion.div>
      </motion.div>
    </div>
       {/* CFSF SECTION!!!! */}



       {/* DONATE SECTION !!!! */}

       <section className="py-12 bg-gray-50 mb-[1480px] xs:mb-[1170px] sm:mb-[1030px] lg:mb-[230px] md:mb-[50px]">
      <div className="max-w-7xl mx-auto text-center ">
        <h2 className="text-[39px] leading-[47px] font-bold font-playfair items-center justify-center text-green">We've transformed Over 1,000 <br /> communities and lives</h2>
        <p className="mt-4 text-green font-[400] text-[23px] leading-[27px] font-roboto ">Public Services and Social Justice.</p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 h-[350px]">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="bg-white border-[1px] border-green p-6 rounded-lg shadow-lg"
              custom={index}
              initial="hidden"
              whileInView="visible"
              variants={cardsVariants}
              whileHover="hover"
            >
              <div className="text-4xl">{card.icon}</div>
              <h3 className="mt-4 text-[20px] font-[600] leading-[30px] items-center text-green">{card.title}</h3>
              <p className="mt-2 text-black font-roboto font-[400] text-left leading-[24px] text-[16px] justify-center items-center">{card.description}</p>
            
            </motion.div>
          ))}
        </div>
      </div>
    </section>
       {/* DONATE SECTION !!!! */}
       <Latest/>
       <Testimonial/>
  </>
  );
};

export default Landing;
