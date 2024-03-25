// import React, { useState } from "react";
// import logoImage from "../../../assets/Logo.png";

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   // Navigation Links Component to avoid repetition
//   const NavLinks = () => (
//     <>
//       <a
//         href="#"
//         className="text-gray-700 hover:text-gray-900 hover:bg-gray-50 block rounded-md px-3 py-2 text-base font-medium"
//       >
//         Home
//       </a>
//       <a
//         href="#"
//         className="text-gray-700 hover:text-gray-900 hover:bg-gray-50 block rounded-md px-3 py-2 text-base font-medium"
//       >
//         Contest
//       </a>
//       <a
//         href="#"
//         className="text-gray-700 hover:text-gray-900 hover:bg-gray-50 block rounded-md px-3 py-2 text-base font-medium"
//       >
//         Host Contest
//       </a>
//     </>
//   );
//   return (
//     <header className="flex items-center justify-between bg-white p-5">
//       <div className="flex justify-start lg:w-0 lg:flex-1">
//         <img src={logoImage} alt="Vie Hub Logo" className="h-8 w-auto" />
//       </div>

//       {/* Toggle button for mobile */}
//       <div className="-my-2 -mr-2 md:hidden">
//         <button
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           className="text-gray-400 hover:text-gray-500 hover:bg-gray-100 inline-flex items-center justify-center rounded-md p-2"
//         >
//           {/* Hamburger Icon */}
//           <svg
//             className="h-6 w-6"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//             aria-hidden="true"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M4 6h16M4 12h16m-7 6h7"
//             />
//           </svg>
//         </button>
//       </div>

//       {/* Desktop Navigation */}
//       <nav className="hidden space-x-10 md:flex">
//         <NavLinks />
//       </nav>

//       {/* Mobile Menu */}
//       <nav
//         className={`absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden ${isMenuOpen ? "scale-100" : "scale-0"}`}
//       >
//         <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
//           <div className="flex items-center justify-between px-5 pt-4">
//             <div>
//               <img className="h-8 w-auto" src={logoImage} alt="" />
//             </div>
//             <div className="-mr-2">
//               <button
//                 onClick={() => setIsMenuOpen(false)}
//                 className="text-gray-400 hover:text-gray-500 hover:bg-gray-100 inline-flex items-center justify-center rounded-md bg-white p-2"
//               >
//                 {/* Close Icon */}
//                 <svg
//                   className="h-6 w-6"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   aria-hidden="true"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 </svg>
//               </button>
//             </div>
//           </div>
//           <div className="flex space-x-2">
//             <input
//               type="text"
//               placeholder="Search"
//               className="text-gray-900 placeholder-gray-500 border-gray-300 block w-full rounded-md border py-2
//     pl-4 pr-3 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
//             />
//             <button className="flex-shrink-0 rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700">
//               Sign Up
//             </button>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;
