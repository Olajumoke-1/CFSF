import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 1 },
};

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 p-4 space-y-8">
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ delay: 1, duration: 1, staggerChildren: 0.3 }}
            variants={sectionVariants}
            className="w-full max-w-3xl mx-auto mt-8"
          >
            <motion.h1
              variants={sectionVariants}
              className="text-center text-[40px] leading-[90px] mb-14 font-playfair font-bold text-green"
            >
              Contact Us
            </motion.h1>
             </motion.div>

       {/* Form Section */}
       <motion.div
  initial="hidden"
  animate="visible"
  transition={{ delay: 1, duration: 2, staggerChildren: 0.3 }}
  variants={sectionVariants}
  className="w-full max-w-[1440px] bg-light p-4 sm:p-8 md:p-12 rounded-lg shadow-md mx-auto mt-8 min-h-[345px]"
>
  <motion.form
    variants={sectionVariants}
    className="space-y-4"
    action="mailto:Citizenfreeservicesformula@Gmail.Com"
    method="POST"
    encType="multipart/form-data"
  >
    <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
      <input
        type="text"
        placeholder="First Name"
        className="w-full sm:w-[calc(50%-12px)] md:w-[calc(50%-16px)] max-w-full p-2 border border-gray-300 rounded"
        required
      />
      <input
        type="text"
        placeholder="Last Name"
        className="w-full sm:w-[calc(50%-12px)] md:w-[calc(50%-16px)] max-w-full p-2 border border-gray-300 rounded"
        required
      />
    </div>
    <input
      type="email"
      placeholder="Email"
      className="w-full md:w-[calc(100%-32px)] max-w-full p-2 border border-gray-300 rounded"
      required
    />
    <textarea
      placeholder="Message"
      className="w-full md:w-[calc(100%-32px)] max-w-full p-2 border border-gray-300 rounded"
      rows="4"
      required
    ></textarea>
    <br />
    <button
      type="submit"
      className="block w-full sm:w-[232px] mx-auto p-2 text-center bg-green text-white rounded hover:bg-lightgr"
    >
      Click Here To Submit
    </button>
  </motion.form>
</motion.div>


</div>
        {/* Office Address Section */}
        <div className='mt-[-90px] mb-20'>
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ delay: 1, duration: 2, staggerChildren: 0.3 }}
            variants={sectionVariants}
            className="w-full max-w-3xl mx-auto mt-8"
          >
            <motion.div
              variants={sectionVariants}
              className="space-y-4 text-center"
            >
              <h2 className="text-[24px] leading-[50px] font-bold text-green">Office Address</h2>
              <p className='text-[16px] leading-[26px] font-montserrat font-[500]'>Kano: Suite No.B4 Express Plaza, No.700, Aminu Kano Way, Kano.<br />Abuja: No.27 Suez Crescent, Ibrahim Abacha Estate, Wuse Zone 4 Abuja.</p>

              <h2 className="text-[24px] leading-[50px] font-bold text-green">Email</h2>
              <p><Link href="mailto:Citizenfreeservicesformula@Gmail.Com" className="text-green">citizensfreeserviceforum1@gmail.com</Link></p>

              <h2 className="text-[24px] leading-[50px] font-bold text-green">Phone Numbers</h2>
              <p>+2347061588228, +2348036082833, +2348082731089.</p>
            </motion.div>
          </motion.div>
        </div>

        
      <Footer/>
    
    </>
  );
};

export default Contact;
