import Image from "../../../assets/image.jpeg";
import SecondImage from "../../../assets/teamgoals.png";
import ThridImage from "@/assets/images/image 5.jpg";
import { Link } from "react-router-dom";
import Header from "@/layouts/client/components/Header";
import Footer from "@/layouts/client/components/Footer";
import TypingAnimation from "../components/TypingAnimation";
import FirstSectionCard from "../components/FirstSectionCard";
import SecondSectionCard from "../components/SecondSectionCard";
import React, { useState, useEffect } from 'react';


const Dashboard = () => {
  const [isImageVisible, setIsImageVisible] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const image = document.querySelector('.third-image-container');
      const content = document.querySelector('.cont');
      
      if (image && content) {
        const imageTop = image.getBoundingClientRect().top;
        const contentTop = content.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (imageTop < windowHeight * 0.75 && imageTop > -windowHeight * 0.25) {
          setIsImageVisible(true);
        } else {
          setIsImageVisible(false);
        }
        
        if (contentTop < windowHeight * 0.75 && contentTop > -windowHeight * 0.25) {
          setIsContentVisible(true);
        } else {
          setIsContentVisible(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className="h-full w-full">
      <Header />
      <div className="content flex max-w-full flex-wrap">
        <div className="left-content w-full p-4 md:flex-1">
          <TypingAnimation text="Welcome to VieHub - Where Talent Meets Opportunity Discover Your Potential" />
          <p className="desc">
            Explore diverse industry competitions and tasks tailored for your
            skills. From Coding and Design to Writing and more, VieHub is your
            gateway to showcasing talent.
          </p>
          <div className="buttons">
          <Link className="Host-btn px-4 py-2 text-sm font-medium text-white shadow-sm " to="/host">
            <button>
            Join as Host
            </button>
          </Link>
          
          <Link className="participant-btn px-4 py-2 text-sm font-medium text-white shadow-sm " to="/participant">
            <button>
            Join as Participant
            </button>
          </Link>
           
          </div>

        </div>
        <div className="right-content flex w-full items-center justify-end p-4 md:flex-1">
          <img src={Image} alt="image" className="image h-auto max-w-full" />
        </div>
      </div>
      <div className="cont flex max-w-full  items-start p-4 md:flex-row">
        
        <img
          src={SecondImage}
          alt=""
          className="mb-4 h-auto max-w-full md:mb-0 md:mr-4"
        />
        <div className="">
          <h1 className=" mb-2 text-xl font-bold text-black">
            Recognition Awaits:
          </h1>
          <p className=" text-base" style={{ color: "black" }}>
            Engage in both public and private contests to showcase your skills,
            fortify your submissions within dynamic portfolios, and seize the
            opportunity to win enticing rewards. Your exceptional talent merits
            the acknowledgment it deserves!
          </p>
        </div>
      </div>
      <div className="third-section flex  flex-row items-start p-4 md:flex-row">
        <div className="cards-container flex flex-wrap justify-between">
          <h2 className="section-title mb-2 font-bold text-black">Join us as Participant And discover</h2>
          <FirstSectionCard />
         
        </div>
        
      </div>
      
      <div className="forth-section flex max-w-full  items-start p-4 md:flex-row">
        
      <div className={`cont ${isContentVisible ? 'animate-slide-in' : ''}`}>
        <h1 className="mb-2 text-xl font-bold text-black">Connect with Industry</h1>
        <p className="text-base" style={{ color: 'black' }}>
          Discover the expansive potential of VieHub, extending beyond a conventional platform. It serves as a pivotal hub, linking extraordinary talent with the dynamic needs of diverse industries. Uncover a wealth of collaboration possibilities and pathways for advancing your career.
        </p>
      </div>
        <div className={`third-image-container flex max-w-full items-start p-4 md:flex-row ${isImageVisible ? 'animate-slide-in' : ''}`}>
        <img src={ThridImage} alt="" className="mb-4 h-auto max-w-full third-image" />
      </div>

      </div>

      <div className="third-section flex  flex-row items-start p-4 md:flex-row">
        <div className="cards-container flex flex-wrap justify-between">
          <h2 className="section-title mb-2 font-bold text-black">Join us as Host And discover</h2>
          <SecondSectionCard />
         
        </div>
        
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;