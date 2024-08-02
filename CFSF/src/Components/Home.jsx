import React, { useState, useEffect, useRef } from 'react';
import Navbar from './Navbar';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import BC from '../Images/BC.png';
import Landing from './Landing';
import Footer from './Footer';

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [bgPosition, setBgPosition] = useState('center top -320px');
  const startTimeRef = useRef(null);
  const intervalRef = useRef(null);

  const slides = [
    {
      title: "Transforming Lives <br /> Through Public Service",
      subtitle: "Empowering Citizens, Enabling Communities"
    },
    {
      title: "Public Service <br/> and Social Justice",
      subtitle: "Empowering Citizens, Enabling Communities"
    }
  ];

  useEffect(() => {
    const updateSlide = () => {
      const now = Date.now();
      if (startTimeRef.current === null) {
        startTimeRef.current = now;
      }
      const elapsed = now - startTimeRef.current;
      const index = Math.floor(elapsed / 4000) % slides.length;
      setCurrentSlide(index);
    };

    const startInterval = () => {
      updateSlide(); // Call immediately to set initial slide
      intervalRef.current = setInterval(updateSlide, 1000);
    };

    startInterval();

    // Cleanup function
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      startTimeRef.current = null;
    };
  }, [slides.length]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      } else {
        startTimeRef.current = Date.now();
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
        intervalRef.current = setInterval(() => {
          const elapsed = Date.now() - startTimeRef.current;
          const index = Math.floor(elapsed / 4000) % slides.length;
          setCurrentSlide(index);
        }, 1000);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [slides.length]);

  const variants = {
    enter: { opacity: 0, x: 100 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };

  useEffect(() => {
    const updateBackgroundPosition = () => {
      const screenWidth = window.innerWidth;
      let position = 'center top -320px';
      if (screenWidth <= 768) {
        position = 'center top -480px';
      } else if (screenWidth <= 640) {
        position = 'center top -490px';
      }  if (screenWidth <= 409) {
        position = 'center top 790px';
      } else if (screenWidth <= 1034) {
        position = 'center top -120px';
      }
      setBgPosition(position);
    };

    window.addEventListener('resize', updateBackgroundPosition);
    updateBackgroundPosition(); // Call initially to set the position

    return () => {
      window.removeEventListener('resize', updateBackgroundPosition);
    };
  }, []);

  return (
    <>
      <Navbar />
      
      <div className="text-white min-h-screen flex flex-col justify-center items-center relative overflow-hidden xl:mt-[118px] md:mt-[100px] lg:mt-[100px] xs:mt-[6px] mt-[-45px] mb-28">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 200 200"
          className="absolute left-0 top-0 w-full h-full lg:w-[80%] md:w-[88%] sm:w-[90%] xs:w-[100%] lg:left-[-315px] md:left-[-150px] sm:left-[-100px]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon points="0,0 200,0 100,200 0,200" fill="#397537" />
        </svg>

        <div
          className="z-10 bg-green text-center w-full max-w-10xl mx-auto flex flex-col justify-center h-[300px] xs:h-[309px] sm:h-auto md:h-auto lg:h-auto xl:h-auto items-center sm:py-10 px-1 xs:px-0 xs:py-1 xl:py-4 py-[2px]"
          style={{
            backgroundImage: `url(${BC})`,
            backgroundSize: 'cover',
            backgroundPosition: bgPosition,
          }}
        >
          <h2 className="text-2xl sm:text-2xl md:-2xl xs:text-3xl mt-9  md:mb-[29px] sm:mb-1 font-montserrat font-bold">
            {slides[currentSlide].subtitle}
          </h2>
          <AnimatePresence mode="wait">
            <motion.h1
              key={currentSlide}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4 }}
              className="text-2xl sm:text-4xl xs:text-4xl md:text-7xl mt-8 lg:text-7xl xl:text-7xl font-playfair font-bold leading-tight sm:mb-2 md:mb-9"
            >
              <span dangerouslySetInnerHTML={{ __html: `${slides[currentSlide].title}` }} />
            </motion.h1>
          </AnimatePresence>

          <div className="flex flex-row md:flex-row sm:flex-row justify-center space-y-0 sm:space-y-0 xl:mt-24 xl:space-x-6 xs:space-x-4 sm:space-x-6 space-x-4 mt-10 sm:mt-2 md:mt-12">
          
            <Link
              to="/About"
              className="border border-white text-white px-3 sm:px-4 py-3 rounded-full text-xs sm:text-sm hover:bg-white hover:text-green-700 transition duration-300"
            >
              Know About Us
            </Link>
          </div>

          <div className="flex justify-center space-x-1 my-2 sm:my-3 md:my-8 mt-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 sm:w-2 sm:h-2 md:w-3 md:h-3 rounded-full ${
                  index === currentSlide ? 'bg-red-500' : 'bg-white'
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
  
      <Landing />
      <Footer/>
    </>
  );
}

export default Home;
