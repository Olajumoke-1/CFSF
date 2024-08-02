import React from 'react';
import LogoW from '../Images/LogoW.png';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';


const Footer = () => {
  return (
    <footer className="bg-green text-white py-8 md:p-4 sm:py-6 md:h-[400px] w-full overflow-hidden xs:h-[auto] xs:overflow-auto">
      <div className="container mx-auto flex flex-col md:flex-row flex-nowrap justify-between items-center space-y-8 md:space-y-0 md:space-x-4 lg:space-x-8">
        <div className="order-1 md:order-1 flex justify-center md:justify-start md:ml-30 w-full md:w-auto xl:ml-48">
          <img src={LogoW} alt="CFSF Logo" className="w-34 h-34 bg-green p-2 mt-8" />
        </div>
        <div className="order-2 md:order-2 flex flex-col md:flex-row flex-nowrap justify-evenly items-start w-full md:w-2/3 lg:w-auto md:justify-between xl:space-x-20 flex-1 space-y-12 md:space-y-0 md:space-x-4 lg:space-x-8">
          <div className="space-y-4 mx-4 md:mx-8 flex-shrink-0">
            <h4 className="font-semibold text-lg md:text-base">Quick Links</h4>
            <ul className="space-y-2 text-sm md:text-base">
              <li><Link to="/" className="hover:underline">Home</Link></li>
              <li><Link to="/About" className="hover:underline">About Us</Link></li>
              <li><Link to="/" className="hover:underline">Thematic Areas</Link></li>
              <li><Link to="/Media" className="hover:underline">Media</Link></li>
            </ul>
          </div>
          <div className="space-y-4 mx-4 md:mx-0 flex-shrink-0">
            <h4 className="font-semibold text-lg md:text-base">Get In Touch</h4>
            <ul className="space-y-2 text-sm md:text-base">
              <li><Link to="/Contact" className="hover:underline">Contact Us</Link></li>
              <li><Link to="/Donate" className="hover:underline">Donate</Link></li>
            </ul>
          </div>
          <div className="space-y-4 mx-4 md:mx-0 flex-shrink-0 md:max-w-[200px] lg:max-w-none">
            <h4 className="font-semibold text-lg md:text-base">Address</h4>
            <p className="text-sm md:text-base">Kano: Suite No.B4 Express plaza,, No.700, Aminu Kano Way, Kano.</p>
           <p> Abuja: No.27 Suez Crescent, Ibrahim Abacha Estate, Wuse Zone 4 Abuja.</p>
            <div className="flex space-x-4 mt-8 ">
              <a href="https://twitter.com" className="hover:opacity-75"><i className="fab fa-twitter"></i></a>
              <a href="https://instagram.com" className="hover:opacity-75"><i className="fab fa-instagram"></i></a>
              <a href="https://youtube.com" className="hover:opacity-75"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white mt-12 pt-4">
        <div className="container mx-auto flex flex-col md:flex-row flex-nowrap justify-between items-center space-y-4 md:space-y-0 text-sm md:text-base">
          <p className="text-center md:text-left ml-4 md:ml-20">2024 CFSF. All rights reserved.</p>
          <div className="flex justify-center md:justify-start space-x-4 mr-4 md:mr-20 whitespace-nowrap">
            <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
            <a href="/terms-of-service" className="hover:underline">Terms of Service</a>
            <a href="/cookies-settings" className="hover:underline">Cookies Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
