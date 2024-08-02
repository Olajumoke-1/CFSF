import React from 'react'
import { motion } from 'framer-motion'
import Navbar from './Navbar'
import Trade from '../Images/Trade.png'
import June from '../Images/June.png'
import Footer from './Footer'

function About() {
  return (
    <>
      <div>
        <Navbar/>
      </div>

      <motion.div 
        className="relative h-[300px] xl:h-[500px] sm:h-[400px] md:h-[502px] flex items-center justify-start overflow-hidden mt-10 sm:mt-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 w-full ml-0 xl:ml-0">
          <img
            src={Trade}
            alt="About Us"
            className="h-full w-full object-cover mix-blend-overlay"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-green via-green to-transparent opacity-100"></div>
        
        <div className="relative z-10 text-white w-full px-4">
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-[65px] font-bold text-left leading-tight sm:leading-snug md:leading-[90px] font-playfair max-w-[70%] sm:max-w-[50%] md:max-w-[40%] lg:max-w-[30%] xl:ml-[120px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            About Us
          </motion.h1>
        </div>
      </motion.div>

      <div className="container mx-auto px-4 md:px-16 lg:px-20 xl:px-24 py-8 md:py-16 justify-center">
        
        <motion.div 
          className="bg-green-100 px-4 md:px-8 mb-6 rounded-lg justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2 }}
        >
          <motion.p 
            className="text-sm md:text-base font-[400] font-montserrat py-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2 }}
          >
            <span className='text-green font-[500] font-montserrat'>Citizens Free Service Forum (CFSF)</span> is a non-profit, non-political organization founded in the year 2015 and subsequently registered at the corporate affairs commission (CAC) on the 23rd day of february, 2016 (Reg. No. CAC/IT/84936).
          </motion.p>
        </motion.div>
        
        <motion.p 
          className="mb-4 px-4 md:px-8 text-sm md:text-base justify-center font-[400] font-montserrat py-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2.5 }}
        >
          CFSF is a platform of likeminded advocates, professionals and activists concerned about addressing the sustained decline in the living standard of nigerians and the need to redress the inherent contradictions in both content and processes of policy formulation and implementation.
        </motion.p>
        
        <motion.p 
          className="mb-8 px-4 md:px-8 text-sm md:text-base justify-center font-[400] font-montserrat py-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 3 }}
        >
          CFSF works in partnership with relevant organizations, individuals and interest groups to challenge any observed aberration or anomalies in governance processes that degrade and dehumanizes nigerians and humanity in general. In concert with genuine stakeholders, CFSF also suggests policy amendment and the jettisoning of any policy that is assessed as flawed and proposes workable alternatives.
        </motion.p>
        
        <div className="flex flex-col md:flex-row justify-center items-start md:items-center">
          <div className="w-full md:w-1/2 pr-0 md:pr-8 mb-8 md:mb-0">
            <motion.h3 
              className="text-[24px] leading-[50px] md:text-2xl font-bold text-green mb-4 px-4 md:px-8 font-playfair py-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 3.5 }}
            >
              Our Approach
            </motion.h3>
            
            <motion.div 
              className="bg-green-100 p-4 mb-4 rounded-lg px-4 md:px-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 4 }}
            >
              <motion.p 
                className="text-sm  md:text-base font-montserrat font-[400] py-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 4.5 }}
              >
                To raise awareness of citizens on government policies and challenge anti-people initiatives
              </motion.p>
          
              <motion.p 
                className="text-sm md:text-base font-montserrat font-[400] py-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 5 }}
              >
                To organize free enlightenment programs and campaigns on policy issues.
              </motion.p>
            </motion.div>
          </div>
          
          <motion.div 
            className="w-full md:w-1/2 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 5.5 }}
          >
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden relative z-10 mx-auto">
              <img src={June} alt="People raising hands" className="w-full h-full" />
            </div>
            <div className="w-32 h-32 bg-red-300 rounded-full absolute top-2 mt-[-50px] xs:left-[calc(66%-40px)] sm:left-[calc(66%-54px)] md:left-[calc(66%-36px)] left-[calc(66%-64px)] z-20"></div>
            <div className="w-24 h-24 bg-green rounded-full absolute bottom-[-30px] left-[calc(40%-48px)] z-0"></div>
          </motion.div>
        </div>
      </div>

      <br />
      <Footer/>
    </>
  )
}

export default About