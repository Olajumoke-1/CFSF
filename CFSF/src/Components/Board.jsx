import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Sani from '../Images/Sani.jpg';
import Bomoi from '../Images/Bomoi.jpg';
import Sheu from '../Images/Sheu.jpg';
import Footer from './Footer';

const directors = [
  {
    id: 'sani-baba',
    name: 'Comrade Sani Baba',
    title: 'Executive Director',
    image: Sani,
    email: 'sanibaba@cfsf.com.ng',
  },
  
  {
    id: 'aminu-shehu',
    name: 'Aminu Mohammed Shehu',
    title: 'Deputy Executive Director - Finance and Admin',
    image: Sheu,
    email: 'aminuakc@cfsf.com.ng',
  },

  {
    id: 'bomoi-ibraheem',
    name: 'Bomoi Mohammed Ibraheem',
    title: 'Deputy Executive Director',
    image: Bomoi,
    email: 'imbomoi@cfsf.com.ng',
  },
];

const names = [
  'Muhammad Aliyu A.',
  'Lekke Yusuf Zambuk',
  'Ukpo Owuna Musa',
  'Moradeke Abiodun B.',
];

const listItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
    },
  }),
};

const Board = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-2">
        <h1 className="text-5xl font-bold mb-8 mt-[80px] text-center text-green">Board Of Trustees</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-[128px] sm:p-[2px]">
          {directors.map((director, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-[10px] w-full h-full flex flex-col items-center"
            >
              <img
                src={director.image}
                alt={director.name}
                className="w-[590px] p-[19px] h-full object-cover rounded-lg sm:p-[30px] xl:p-[60px]"
              />
              <h2 className="text-center text-xl font-semibold mt-4">{director.name}</h2>
              <p className="text-center text-gray-600">{director.title}</p>
              <div className="flex flex-col items-center mt-4">
                <div className="flex items-center mb-2">
                  <a href={`mailto:${director.email}`} className="text-red-600">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="26" height="26" viewBox="0 0 48 48">
                      <path fill="#4caf50" d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"></path>
                      <path fill="#1e88e5" d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"></path>
                      <polygon fill="#e53935" points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"></polygon>
                      <path fill="#c62828" d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"></path>
                      <path fill="#fbc02d" d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"></path>
                    </svg>
                  </a>
                </div>
                <Link to={`/profile/${director.id}`} className="px-4 py-2 bg-green text-white rounded-lg">
                  Read More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-28 text-center">
          <ul className="list-disc list-inside inline-block text-left text-nowrap space-y-12 leading-[20px]">
            {names.map((name, index) => (
              <motion.li
                key={index}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={listItemVariants}
                className="text-3xl text-green xs:text-4xl md:text-5xl"
                style={{ overflowWrap: 'break-word', wordWrap: 'break-word', hyphens: 'auto' }}
              >
                {name}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
};

export default Board;