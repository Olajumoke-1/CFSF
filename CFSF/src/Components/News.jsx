import React from 'react';
import { motion } from 'framer-motion';
import Footer from './Footer';
import Navbar from './Navbar';
import Nig from '../Images/Nig.png';
import Tinubu from '../Images/Tinubu.png';
import Tinubus from '../Images/Tinubus.png';
import Govt from '../Images/Govt.png';
import Police from '../Images/Police.png';

const articles = [
  {
    title: "CFSF Cautions Security Agencies Against Intimidating Nigerians Planning Protest Over Economic Hardship",
    image: Nig,
    link: "https://thetrumpet.ng/cfsf-cautions-security-agencies-against-intimidating/"
  },
  {
    title: "Hunger Protest; CFSF Cautions Security Agencies Against Intimidating Nigerians",
    image: Nig,
    link: "https://thevoice.com.ng/hunger-protest-cfsf-cautions-security-agencies-against-intimidating-nigerians/"
  },
  {
    title: "CFSF To Security Agencies: Stop Intimidating Nigerians Planning Protest Over Hunger, Insecurity",
    image: Tinubu,
    link: "https://nigerianewsflight.com.ng/cfsf-to-security-agencies-stop-intimidating-nigerians-planning-protest-over-hunger-insecurity/"
  },
  {
    title: "CFSF Cautions Security Agencies Over Intimidation Of Nigerians Planning Protest",
    image: Police,
    link: "https://www.vanguardngr.com/2024/07/cfsf-cautions-security-agencies-over-intimidation-of-nigerians-planning-protest/"
  },
  {
    title: "Tinubu's Govt Asked To Stop Criminalizing Peaceful Protests",
    image: Tinubus,
    link: "https://platinumpostng.com/2024/07/21/tinubus-govt-asked-to-stop-criminalising-peaceful-protests/"
  },
  {
    title: "Govt Failure In Prioritising Access To Water Responsible For Cholera Woes In Nigeria – CFSF",
    image: Govt,
    link: "https://www.peoplesdailyng.com/govt-failure-in-prioritising-access-to-water-responsible-for-cholera-woes-in-nigeria-cfsf/"
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const News = () => {
  return (
    <>
      <Navbar />

      <div className="container mx-auto p-4 mt-[90px]">
      <h2 className="relative text-2xl font-bold text-green xl:ml-[128px] mb-8 px-4 md:px-0 flex flex-col sm:flex-row items-center sm:items-baseline">
  <span className="mb-2 sm:mb-0">Featured Stories</span>
  <span className="block w-full sm:w-24 md:w-32 lg:w-48 xl:w-56 h-[2px] bg-gr mt-2 sm:mt-0 sm:ml-4 sm:relative sm:top-[-4px]"></span>
</h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 1 } } }}
        >
          {articles.map((article, index) => (
            <motion.a
              key={index}
              href={article.link}
              className="block group h-full"
              variants={cardVariants}
            >
              <div className="flex flex-col h-full">
                <div className="aspect-w-16 aspect-h-9 flex-shrink-0">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="object-cover w-full h-full rounded-t group-hover:opacity-75 transition duration-200"
                  />
                </div>
                <div className="bg-white p-4 rounded-b shadow-md flex-grow flex flex-col justify-between">
                  <p className="text-md font-semibold group-hover:text-green-700 transition duration-200">
                    {article.title}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
};

export default News;
