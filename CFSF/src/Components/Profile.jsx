import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import 'tailwindcss/tailwind.css';
import Navbar from './Navbar';
import Sani from '../Images/Sani.jpg';
import Wabba from '../Images/Wabba.jpg';
import Bomoi from '../Images/Bomoi.jpg';
import Sheu from '../Images/Sheu.jpg';
import Philip from '../Images/Philip.jpg'
import Moradeke from '../Images/Moradeke.jpg'
import Footer from './Footer';


const profiles = {
  'sani-baba': {
    name: 'Comrade Sani Baba',
    title: 'Executive Director',
    image: Sani,
    description: `Comrade Sani Baba worked with the Nigeria Union of Local Government Employees from 1985 to 2006. He rose from Organizing Secretary to Sate Secretary in Kaduna, Benue, Kano and Bauchi States and left the union as the pioneer Head of Education and Training.
    He joined Public Services International (PSI), a global union federation in 2006 as an Assistant Project Coordinator and subsequently became the Sub Regional Secretary for English speaking East and West Africa in 2011. In 2017 he was appointed as the Regional Secretary for Africa and Arab Region of PSI.
    At PSI he coordinated projects that challenged water and energy privatisation, climate change and migration of health or workers from Africa to Europe.
    He also assisted in setting up trade union sector networks in the region to campaign against privatisation of key public services. In its place he worked with allies to promote alternatives to Public Private Privatisation otherwise known as PPPs.
    Sani is a strong supporter of quality public services delivery campaigns in the areas of health, education, tax justice, water, good governance and transparency, among others. 
    Fired by the zeal to deliver winnable campaigns he initiated collaboration between trade unions and civil society organisations in the Afro region to support workers and community participation in demanding for quality water service delivery. 
    He brings his more than three decades experience to pilot the affairs of the Citizens Free Service Forum (CFSF) as its executive director.`
  },

  'ayuba-wabba': {
    name: 'Comrade Ayuba Philibus Wabba',
    title: 'Chairman of the Board of CFSF',
    image: Wabba,
    description: `Ayuba Philibus Wabba began his trade union activism at the Medical and Health Workers' Union of Nigeria. He was its first secretary in Borno State, before ascending the ladder to become the national president.  In 2007, he was elected national treasurer of the Nigeria Labour Congress (NLC) and subsequently got elected as the national president in 2015. Three years after, in 2018, he was elected as president of the International Trade Union Confederation and used that office to oppose Nigeria’s participation in the African Continental Free Trade Area.
    In trade union circles Ayuba is known as a dogged fighter with strong convictions on issues of workers’ rights. He is also a social critic and a believer in the rule of law and accountability.
    He has been a member of various boards including the Board of Management, Lagos University Teaching Hospital, Board of Management, National Health Insurance Scheme, National Labour Advisory Council, Board of Management, University of Nigeria Teaching Hospital, Enugu, and Board of Management, National Productivity Centre, among others.
    He is an alumnus of the prestigious National Institute for Policy and Strategic Studies (NIPSS).`
  },

  'bomoi-ibraheem': {
    name: 'Bomoi Mohammed Ibraheem',
    title: 'Deputy Executive Director',
    image: Bomoi,
    description: `BOMOI	MOHAMMED IBRAHEEM, currently the General Secretary of the Nigeria Civil Service Union started his career at the union’s national headquarters. He was at a point the State Secretary of the union between 1992 and 2020. 
    He is vast in the art of negotiation and collective bargaining, and has been a member of the National Joint Public Service Negotiation Council since 2021 as National Secretary.  
    He brings his wealth of experience into the Citizens Free Service Forum as its deputy executive director, programmes.`
  },

  'aminu-shehu': {
    name: 'Aminu Mohammed Shehu',
    title: 'Deputy Executive Director - Finance and Admin',
    image: Sheu,
        description: `Aminu Shehu is a commentator on public policy issues who has traversed many areas of human endeavor in the quest of adding value, making a difference and ultimately making the world a better place. 
        Shehu studied Sociology at the Ahmadu Bello University (ABU) Zaria, the Abubakar Tafawa Balewa University (ATBU), Bauchi, before obtaining post-graduate diploma in Management at the Abubakar Tafawa Balewa University (ATBU). He also holds a Master’s in Public Policy and Administration from the Bayero University Kano (BUK), Kano. 
        He is an environmental activist and has been variously involved in the activities of groups and associations concerned about the environment. They include the Kanawa Landscape Gardeners Association, Gardeners Association of Kano and the Greener Kano Movement. Presently he is the Director, Ack Landscale Gardening and Consultancy Services. 
        His passion for pro-people causes informed his decision to join the Citizens Free Service Forum.`
  },
  'moradeke-abiodun': {
    name: 'Moradeke Abiodun Badru',
    title: 'Assistant Director, Research and Publicity',
    image: Moradeke,
        description: `Moradeke Abiodun Badru is Assistant Director, Research and Publicity for CFSF. She brings her wealth of experience and as a gender specialist to the CFSF family. Moradeke holds various offices including Principal Assistant General Secretary/Equality Officer at the National Association of Nigeria Nurses and Midwives and at the Public Serces International (PSI) where she is project coordinator. She holds a Master's Degree Gender/Global Labor Practices from the Global Labour University and also studied at the Berlin School of Economics and Law`
  },

  'philip-jakpor': {
    name: 'Philip Jakpor',
    title: 'Media Advisor',
    image: Philip,
    description: `Philip Jakpor started his work career in 2003 as a journalist at the defunct NewAge Newspaper in Lagos. In the course of his work in the newsroom, he interfaced with diverse audiences, including industry players and victims of big corporations who were mostly defenceless. Jakpor's passion for exposing the activities of such corporations and the need to challenge them blossomed at the Environmental Rights Action where he worked with a team of committed activists and grassroots movements that were determined to hold big corporations to account. Between 2009 and 2015, he was the facilitator of journalism trainings funded in Nigeria by the Ministry of Foreign Affairs of Finland which targeted the training of over 250 journalists across Nigeria on reporting the environment. Beyond the environment, Jakpor deployed his media expertise in the advocacy work that culminated in Nigeria’s domestication of the World Health Organisation Framework Convention on Tobacco Control in 2015 and is still involved in exposing and countering the tobacco industry’s unrelenting efforts at thwarting enforcement of lifesaving public health laws in Nigeria and globally. Jakpor was a foundation staff of the Corporate Accountability and Public Participation Africa (CAPPA) where he was director of programmes till September 2023 when he left to head Renevlyn Development Initiative. Jakpor is well-traveled and continues to deploy his expertise in helping organisations form workable and effective media strategies. He brings this wealth of experience to the Citizens Free Service Forum as its media advisor.`,
  },
 
};

const Profile = () => {
  const { id } = useParams();
  const profile = profiles[id];

  if (!profile) {
    return <div>Profile not found</div>;
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4 mt-[159px]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="flex flex-col md:flex-row items-center md:items-start"
        >
          <img src={profile.image} alt={profile.name} className="w-full md:w-1/3 h-auto object-cover rounded-lg xl:ml-[26px]" />
          <div className="md:ml-32 mt-4 md:mt-0">
            <h2 className="text-3xl font-semibold font-roboto text-green">{profile.name}</h2>
            <p className="text-black font-[300] text-[19px] leading-[26px] font-playfair mb-5 mt-4">{profile.title}</p>
            <p className="text-black font-playfair text-[20px] leading-[32px] font-[200]">{profile.description}</p>
          </div>
        </motion.div>
      </div>
      <br />
      <br />
      <br />
      <Footer/>
    </>
  );
};

export default Profile;
