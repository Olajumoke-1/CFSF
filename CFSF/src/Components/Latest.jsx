import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Link } from 'react-router-dom';
import Tinubus from '../Images/Tinubus.png';
import Govt from '../Images/Govt.png';
import Police from '../Images/Police.png';

const newsData = [
  {
    id: 1,
    image: Tinubus,
    date: '30 JULY 2024',
    title: 'News',
    description: `Tinubu's Govt Asked To Stop Criminalizing Peaceful Protests`,
  },
  {
    id: 2,
    image: Police,
    date: '29 JULY 2024',
    title: 'News',
    description: `CFSF Cautions Security Agencies Over Intimidation Of Nigerians Planning Protest`,
  },
  {
    id: 3,
    image: Govt,
    date: '12 JUNE 2024',
    title: 'News',
    description: `Govt Failure In Prioritising Access To Water Responsible For Cholera Woes In Nigeria – CFSF`,
  },
];

const Latest = () => {
  const controls = useAnimation();
  const ref = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            controls.start(i => ({
              opacity: 1,
              y: 0,
              transition: { delay: i * 0.7 },
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

   

    ref.current.forEach(element => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      console.log('Unobserving elements:', ref.current);
      ref.current.forEach(element => {
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [controls]);

  return (
    <div className="p-8 mt-[-300px] md:mt-[450px] lg:mt-10 xl:mt-12 xs:mt-[-129px]">
      <h2 className="relative text-[18px] leading-[28px] font-[600] text-green mb-4 font-montserrat ">
        Latest News
        <span className="absolute w-[126px] h-[2px] bg-gr top-1/2 transform -translate-y-1/2 ml-0 xs:ml-[9px] md:ml-[9px] xl:ml-[8px]"></span>
      </h2>
      <h3 className="text-[39px] leading-[50px] font-[700] text-green mb-8 font-playfair ">News Media</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {newsData.map((item, index) => (
          <motion.div
            key={item.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
            custom={index}
            ref={el => (ref.current[index] = el)}
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
          >
            <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <p className="text-gray-500 text-sm mb-2"><i className="fas fa-calendar-alt"></i> {item.date}</p>
              <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
              <p className="text-gray-700 mb-4">{item.description}</p>
              <Link to="/News" className="bg-red-500 text-white px-4 py-2 rounded-lg">Read More</Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Latest;
