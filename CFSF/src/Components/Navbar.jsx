import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import logo from '../Images/logo.png';

const Navbar = () => {
  const location = useLocation();
  const [isThematicOpen, setIsThematicOpen] = useState(false);
  const [isMediaOpen, setIsMediaOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isSmallScreenMenuOpen, setIsSmallScreenMenuOpen] = useState(false);
  const navRef = useRef(null);

  const closeDropdowns = () => {
    setIsThematicOpen(false);
    setIsMediaOpen(false);
    setIsAboutOpen(false);
  };

  useEffect(() => {
    const handleMouseOver  = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        closeDropdowns();
      }
    };

    document.addEventListener('mouseover', handleMouseOver );
    return () => {
      document.removeEventListener('mouseover', handleMouseOver );
    };
  }, []);

  const handleThematicMouseEnter = () => {
    setIsThematicOpen(true);
    setIsMediaOpen(false);
    setIsAboutOpen(false);
  };

  const handleMediaMouseEnter = () => {
    setIsMediaOpen(true);
    setIsThematicOpen(false);
    setIsAboutOpen(false);
  };

  const handleAboutMouseEnter = () => {
    setIsAboutOpen(true);
    setIsThematicOpen(false);
    setIsMediaOpen(false);
  };

  const handleToggleMenu = () => {
    setIsSmallScreenMenuOpen(!isSmallScreenMenuOpen);
  };

  const getLinkClasses = (path) => `
    rounded-md px-4 py-2 text-sm font-medium ${
      location.pathname === path ? 'bg-green text-black' : 'text-black hover:bg-green'
    }
  `;

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };
  const routes = [
    { name: 'News & Articles', link: '/News' },
    { name: 'Video', link: '/Video' },
    { name: 'Gallery', link: '/Gallery' },
  ];
  
  const routess = [
    { name: 'Access To Public Services', link: '/Access' },
    { name: 'Trade Union And Workers Rights', link: '/Trade'  },
    { name: 'Safe Environment', link: '/Safe'  },
    { name: 'Good Governance', link: '/Govern'  },
    { name: 'Gender Justice', link: '/Gender'  },
    { name: 'Tax Justice', link: '/Tax'  },
  ];
  
  
  const routesss = [
    { name: 'Board of Trustees', link: '/Board' },
    { name: 'Management Team', link: '/Manage' },
    { name: 'Team', link: '/Team' },
];
  

   return (
   <nav className="bg-white top-0 w-full z-50" ref={navRef}>
     <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
       <div className="flex items-center justify-between h-18 mt-[42px]">
         <div className="flex items-center">
           <img alt="Company logo" src={logo} className="h-32 w-32 mr-4" />
           <div className="hidden md:flex items-center space-x-14 ml-[226px] lg:ml-[250px] lg:space-x-6 xl:space-x-24 md:ml-[22px] md:space-x-5 sm:space-x-5">
             <Link to="/" className={`${getLinkClasses('/')} font-roboto text-black text-base leading-6 text-[16px]`}>
               Home
             </Link>
             <div className="relative flex items-center" onMouseEnter={handleAboutMouseEnter}>
               <Link to="/About" className={`${getLinkClasses('/About')} whitespace-nowrap font-roboto text-black font-[400] text-[16px] leading-[24px]`}>
                 About
               </Link>
               <span className="ml-[-12px] mt-[3px]">
     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
       <path fillRule="evenodd" clipRule="evenodd" d="M12.3977 15.6629C12.178 15.8826 11.8219 15.8826 11.6022 15.6629L5.86739 9.92804C5.64772 9.70837 5.64772 9.35227 5.86739 9.13259L6.13256 8.86739C6.35222 8.64772 6.70838 8.64772 6.92805 8.86739L12 13.9393L17.0719 8.86739C17.2916 8.64772 17.6477 8.64772 17.8674 8.86739L18.1326 9.13259C18.3522 9.35227 18.3522 9.70837 18.1326 9.92804L12.3977 15.6629Z" fill="black"/>
     </svg>
   </span>
               <AnimatePresence>
                 {isAboutOpen && (
                  <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={dropdownVariants}
                  className="absolute top-full left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
                >
                  {[
                    { name: 'Board of Trustees', link: 'Board' },
                    { name: 'Management Team', link: 'Manage' },
                    { name: 'Team', link: 'Team' }
                  ].map((item) => (
                    <Link
                      key={item.link}
                      to={`/${item.link}`}
                      className="block px-4 py-2 text-sm text-black hover:bg-green"
                      onClick={closeDropdowns}
                    >
                      {item.name}
                    </Link>
                  ))}
                </motion.div>
                 )}
               </AnimatePresence>
             </div>
             <div className="relative flex items-center" onMouseEnter={handleThematicMouseEnter}>
               <Link to="" className={`${getLinkClasses('/Thematic')} whitespace-nowrap font-roboto text-black font-[400] text-[16px] leading-[24px]`}>
                 Thematic Areas
               </Link>
               <span className="ml-[-11px] mt-[3px]">
     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
       <path fillRule="evenodd" clipRule="evenodd" d="M12.3977 15.6629C12.178 15.8826 11.8219 15.8826 11.6022 15.6629L5.86739 9.92804C5.64772 9.70837 5.64772 9.35227 5.86739 9.13259L6.13256 8.86739C6.35222 8.64772 6.70838 8.64772 6.92805 8.86739L12 13.9393L17.0719 8.86739C17.2916 8.64772 17.6477 8.64772 17.8674 8.86739L18.1326 9.13259C18.3522 9.35227 18.3522 9.70837 18.1326 9.92804L12.3977 15.6629Z" fill="black"/>
     </svg>
   </span>
               <AnimatePresence>
                 {isThematicOpen && (
                  <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={dropdownVariants}
                  className="absolute top-full left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
                >
                  {[
                    { name: 'Access to Public Services', link: 'Access' },
                    { name: 'Trade Union and Workers Rights', link: 'Trade' },
                    { name: 'Safe Environment', link: 'Safe' },
                    { name: 'Good Governance', link: 'Govern' },
                    { name: 'Gender Justice', link: 'Gender' },
                    { name: 'Tax Justice', link: 'Tax' }
                  ].map((item) => (
                    <Link
                      key={item.link}
                      to={`/${item.link}`}
                      className="block px-4 py-2 text-sm text-black hover:bg-green"
                      onClick={closeDropdowns}
                    >
                      {item.name}
                    </Link>
                  ))}
                </motion.div>
                
                 )}
               </AnimatePresence>
             </div>
             <div className="relative flex items-center" onMouseEnter={handleMediaMouseEnter}>
               <Link to="/Media" className={`${getLinkClasses('/Media')} whitespace-nowrap font-roboto text-black font-[400] text-[16px] leading-[24px]`}>
                 Media
               </Link>
               <span className="ml-[-11px]  mt-[3px]">
     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
       <path fillRule="evenodd" clipRule="evenodd" d="M12.3977 15.6629C12.178 15.8826 11.8219 15.8826 11.6022 15.6629L5.86739 9.92804C5.64772 9.70837 5.64772 9.35227 5.86739 9.13259L6.13256 8.86739C6.35222 8.64772 6.70838 8.64772 6.92805 8.86739L12 13.9393L17.0719 8.86739C17.2916 8.64772 17.6477 8.64772 17.8674 8.86739L18.1326 9.13259C18.3522 9.35227 18.3522 9.70837 18.1326 9.92804L12.3977 15.6629Z" fill="black"/>
     </svg>
   </span>
               <AnimatePresence>
                 {isMediaOpen && (
                  <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={dropdownVariants}
                  className="absolute top-full left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
                >
                  {[
                     { name: 'News & Articles', link: 'News' },
                    { name: 'Video', link: 'Video' },
                    { name: 'Gallery', link: 'Gallery' }
                  ].map((item) => (
                    <Link
                      key={item.link}
                      to={`/${item.link}`}
                      className="block px-4 py-2 text-sm text-black hover:bg-green"
                      onClick={closeDropdowns}
                    >
                      {item.name}
                    </Link>
                  ))}
                </motion.div>
                
                 )}
               </AnimatePresence>
             </div>
             <Link to="/Contact" className={`${getLinkClasses('/Contact')} font-roboto text-black text-base leading-6 text-[16px]`}>
               Contact
             </Link>
           </div>
         </div>


         {/* SMALL SCREEEN!!!!! */}
         
         <div className="md:hidden">
           <button
             className="inline-flex items-center justify-center p-2 rounded-md text-black hover:bg-green focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black"
             aria-label="Toggle mobile menu"
             onClick={handleToggleMenu}
           >
             {isSmallScreenMenuOpen ? (
               <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
             ) : (
               <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
             )}
           </button>
         </div>
       </div>
     </div>
     <AnimatePresence>
       {isSmallScreenMenuOpen && (
         <motion.div
           initial={{ opacity: 0, x: "100%" }}
           animate={{ opacity: 1, x: 0 }}
           exit={{ opacity: 0, x: "100%" }}
           transition={{ duration: 0.3 }}
           className="md:hidden fixed top-0 right-0 w-64 h-screen bg-white shadow-lg overflow-y-auto z-50"
         >
           <div className="flex justify-end p-4">
             <button
               onClick={() => setIsSmallScreenMenuOpen(false)}
               className="text-black hover:text-gray-500"
             >
               <XMarkIcon className="h-6 w-6" aria-hidden="true" />
             </button>
           </div>
           <div className="flex flex-col space-y-4 p-4">
             <Link to="/" className={getLinkClasses('/')}>
               Home
             </Link>
             <div className="space-y-2">
               <button 
                 onClick={(e) => {
                   e.stopPropagation();
                   setIsAboutOpen(!isAboutOpen);
                 }} 
                 className="flex justify-between w-full px-3 py-2 text-left text-sm font-medium">
            
                 <Link to="/About">
                  About
                </Link>
                 <span className={`${isAboutOpen ? 'transform rotate-180' : ''} transition-transform duration-200`}>
                   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                   </svg>
                 </span>
               </button>
               <AnimatePresence>
                 {isAboutOpen && (
                   <motion.div
                     initial="hidden"
                     animate="visible"
                     exit="hidden"
                     variants={dropdownVariants}
                     className="pl-4"
                   >
                    {routesss.map((route) => (
                     <Link
                       key={route.link}
                       to={route.link}
                       className="block px-3 py-2 rounded-md text-sm font-medium text-black hover:bg-green"
                     >
                       {route.name}
                     </Link>
                     ))}
                   </motion.div>
                 )}
               </AnimatePresence>
             </div>
             <div className="space-y-2">
               <button 
                 onClick={(e) => {
                   e.stopPropagation();
                   setIsThematicOpen(!isThematicOpen);
                 }} 
                 className="flex justify-between w-full px-3 py-2 text-left text-sm font-medium"
               >
                  <Link to="">
                  Thematic Areas
                </Link>

                 <span className={`${isThematicOpen ? 'transform rotate-180' : ''} transition-transform duration-200`}>
                   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                   </svg>
                 </span>
               </button>
               <AnimatePresence>
                 {isThematicOpen && (
                   <motion.div
                     initial="hidden"
                     animate="visible"
                     exit="hidden"
                     variants={dropdownVariants}
                      className="pl-4"
                   >
                     {routess.map((route) => (
                     <Link
                       key={route.link}
                       to={route.link}
                       className="block px-3 py-2 rounded-md text-sm font-medium text-black hover:bg-green"
                     >
                       {route.name}
                     </Link>
                     ))}
                   </motion.div>
                 )}
               </AnimatePresence>
             </div>
             <div className="space-y-2">
               <button 
                 onClick={(e) => {
                   e.stopPropagation();
                   setIsMediaOpen(!isMediaOpen);
                 }} 
                 className="flex justify-between w-full px-3 py-2 text-left text-sm font-medium"
               >
                <Link to="/Media">
               Media
                </Link>

                 <span className={`${isMediaOpen ? 'transform rotate-180' : ''} transition-transform duration-200`}>
                   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                   </svg>
                 </span>
               </button>
               <AnimatePresence>
                 {isMediaOpen && (
                   <motion.div
                   initial="hidden"
                   animate="visible"
                   exit="hidden"
                   variants={dropdownVariants}
                   className="pl-4"
                 >
                   {routes.map((route) => (
                     <Link
                       key={route.link}
                       to={route.link}
                       className="block px-3 py-2 rounded-md text-sm font-medium text-black hover:bg-green"
                     >
                       {route.name}
                     </Link>
                   ))}
                 </motion.div>
                 
                 )}
               </AnimatePresence>
             </div>
             <Link to="/Contact" className={getLinkClasses('/Contact')}>
               Contact
             </Link>
           </div>
         </motion.div>
       )}
     </AnimatePresence>
   </nav>
 );
};
export default Navbar;
                      




