import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CountUp from 'react-countup';

const testimonials = [
  {
    name: 'John Smith',
    Location: 'Abuja',
    image: (
      <svg width="93" height="93" viewBox="0 0 93 93" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="46.5" cy="46.5" r="46.5" fill="#397537"/>
        <path d="M40.9002 61H36.0618V33.3682H46.608C49.7328 33.3682 52.1646 34.1242 53.9034 35.6362C55.6674 37.1482 56.5494 39.265 56.5494 41.9866C56.5494 43.8262 56.121 45.4012 55.2642 46.7116C54.4326 47.9968 53.1978 48.9796 51.5598 49.66L56.814 61H51.522L46.8348 50.6806H40.9002V61ZM40.9002 37.6774V46.4092H46.608C48.1452 46.4092 49.3422 46.0186 50.199 45.2374C51.0558 44.4562 51.4842 43.3726 51.4842 41.9866C51.4842 40.6006 51.0558 39.5422 50.199 38.8114C49.3422 38.0554 48.1452 37.6774 46.608 37.6774H40.9002Z" fill="white"/>
      </svg>
    ),
    quote: `The NGO has truly changed my life. Their support and resources have been invaluable in helping me get back on my feet. The team is incredibly compassionate and dedicated to making a difference. I can't thank them enough for all they've done for me.`,
  },
  {
    name: 'Ahmed Khan',
    Location: 'Gwarinpa ',
    image: (
      <svg width="93" height="93" viewBox="0 0 93 93" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="46.5" cy="46.5" r="46.5" fill="#397537"/>
        <path d="M40.9002 61H36.0618V33.3682H46.608C49.7328 33.3682 52.1646 34.1242 53.9034 35.6362C55.6674 37.1482 56.5494 39.265 56.5494 41.9866C56.5494 43.8262 56.121 45.4012 55.2642 46.7116C54.4326 47.9968 53.1978 48.9796 51.5598 49.66L56.814 61H51.522L46.8348 50.6806H40.9002V61ZM40.9002 37.6774V46.4092H46.608C48.1452 46.4092 49.3422 46.0186 50.199 45.2374C51.0558 44.4562 51.4842 43.3726 51.4842 41.9866C51.4842 40.6006 51.0558 39.5422 50.199 38.8114C49.3422 38.0554 48.1452 37.6774 46.608 37.6774H40.9002Z" fill="white"/>
      </svg>
    ),
    quote: `As a beneficiary of the NGO's programs, I have seen firsthand the positive changes they bring to people's lives. Their educational initiatives have provided me with opportunities I never thought possible. I am now pursuing my dreams thanks to their support..`,
  },
  {
    name: 'Emily',
    Location: 'Abuja',
    image: (
      <svg width="93" height="93" viewBox="0 0 93 93" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="46.5" cy="46.5" r="46.5" fill="#397537"/>
        <path d="M40.9002 61H36.0618V33.3682H46.608C49.7328 33.3682 52.1646 34.1242 53.9034 35.6362C55.6674 37.1482 56.5494 39.265 56.5494 41.9866C56.5494 43.8262 56.121 45.4012 55.2642 46.7116C54.4326 47.9968 53.1978 48.9796 51.5598 49.66L56.814 61H51.522L46.8348 50.6806H40.9002V61ZM40.9002 37.6774V46.4092H46.608C48.1452 46.4092 49.3422 46.0186 50.199 45.2374C51.0558 44.4562 51.4842 43.3726 51.4842 41.9866C51.4842 40.6006 51.0558 39.5422 50.199 38.8114C49.3422 38.0554 48.1452 37.6774 46.608 37.6774H40.9002Z" fill="white"/>
      </svg>
    ),
    quote: `This NGO has been a beacon of hope in our community. Their health and wellness programs have improved the quality of life for many families here. The staff is always helpful and goes above and beyond to assist those in need. We are forever grateful for their presence.`,
  },
  {
    name: ' Michael Brown',
    Location: 'Kano',
    image: (
      <svg width="93" height="93" viewBox="0 0 93 93" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="46.5" cy="46.5" r="46.5" fill="#397537"/>
        <path d="M40.9002 61H36.0618V33.3682H46.608C49.7328 33.3682 52.1646 34.1242 53.9034 35.6362C55.6674 37.1482 56.5494 39.265 56.5494 41.9866C56.5494 43.8262 56.121 45.4012 55.2642 46.7116C54.4326 47.9968 53.1978 48.9796 51.5598 49.66L56.814 61H51.522L46.8348 50.6806H40.9002V61ZM40.9002 37.6774V46.4092H46.608C48.1452 46.4092 49.3422 46.0186 50.199 45.2374C51.0558 44.4562 51.4842 43.3726 51.4842 41.9866C51.4842 40.6006 51.0558 39.5422 50.199 38.8114C49.3422 38.0554 48.1452 37.6774 46.608 37.6774H40.9002Z" fill="white"/>
      </svg>
    ),
    quote: 'The environmental initiatives led by this NGO have had a significant impact on our local ecosystem. Their efforts in raising awareness and driving change are commendable. I am proud to be associated with such a proactive and responsible organization.',
  }
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);


  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 3000); // Change testimonial every 5 seconds
    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);
  


  return (
    <>
      {/* WHAT PEOPLE SAY !!! */}
    <div className="flex flex-col items-center text-center px-12 py-8 mt-[32px]">
      <h2 className="text-[18px] leading-[28px] font-montserrat font-[600] text-black mb-2">Our Testimonials</h2>
      <h3 className="text-[39px] leading-[50px] font-playfair font-[700] text-green mb-6">What People Say</h3>
      <div className="relative w-full max-w-lg">
         <button onClick={handlePrev} className="absolute left-0 top-1/2 transform -translate-y-1/2">
         <svg width="40" height="40" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: '-47px' }}>
            <circle cx="25" cy="25" r="25" fill="#397537"/>
            <path d="M28 15L18 25L28 35" stroke="white" strokeWidth="2"/>
          </svg>
        </button>
        <button onClick={handleNext} className="absolute right-0 top-1/2 transform -translate-y-1/2">
          <svg width="40" height="40" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '-52px' }}>
            <circle cx="25" cy="25" r="25" fill="#397537"/>
            <path d="M22 15L32 25L22 35" stroke="white" strokeWidth="2"/>
          </svg>
        </button>
      
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-4"
          >
            <div className="flex justify-center">{testimonials[currentIndex].image}</div>
            <blockquote className="text-green text-[17px] italic text-left leading-[28px] font-[500] font-montserrat mb-4">"{testimonials[currentIndex].quote}"</blockquote>
            <div className="font-bold font-playfair text-[20px] leading-[28px] text-black">{testimonials[currentIndex].name}</div>
            <div className="text-green font-montserrat text-[16px] leading-[24px] font-[600]">{testimonials[currentIndex].Location}</div>
          </motion.div>
   
      </div>
      </div>
    {/* WHAT PEOPLE SAY !!! */}

{/* ACHIEVEMENT STATS!!!!! */}
<section className="py-10 bg-white mt-20 w-full">
  <div className="container mx-auto text-center">
    <h2 className="text-[39px] leading-[47px] font-bold font-playfair text-green justify-center mb-4">Our Achievements</h2>
    <p className="text-[18px] justify-center text-black font-[400] leading-[27px] font-roboto mb-8">
    Empowering rural children, providing healthcare, vocational training for women, planting trees, delivering emergency aid, engaging youth, constructing wells, renovating schools, and distributing nutritious meals.
    </p>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      <div>
        <p className="text-[40px] leading-[48px] font-bold font-roboto text-green">
          <CountUp end={200} duration={100} prefix="+" suffix="M" />
        </p>
        <p className="text-green font-[400] font-roboto text-[16px] leading-[24px]">Humans impacted</p>
      </div>
      <div>
        <p className="text-[40px] leading-[48px] font-bold font-roboto text-green">
          <CountUp end={50} duration={100} suffix="K" />
        </p>
        <p className="text-green font-[400] font-roboto text-[16px] leading-[24px]">Collaborators</p>
      </div>
      <div>
        <p className="text-[40px] leading-[48px] font-bold font-roboto text-green">
          <CountUp end={370} duration={100} suffix="k" />
        </p>
        <p className="text-green font-[400] font-roboto text-[16px] leading-[24px]">Assisted communities</p>
      </div>
      <div>
        <p className="text-[40px] leading-[48px] font-bold font-roboto text-green">
          <CountUp end={100} duration={100} suffix="+" />
        </p>
        <p className="text-green font-[400] font-roboto text-[16px] leading-[24px]">Donations</p>
      </div>
    </div>
  </div>
</section>
{/* ACHIEVEMENT STATS!!!!! */}



      </>
  );
};

export default Testimonial;
