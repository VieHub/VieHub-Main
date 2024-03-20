// import useAuth from "@/hooks/Context";
// import useAuth from "@/hooks/Context";
import React, { useEffect, useState } from 'react';
import Image from '../../../assets/image.jpeg';

import Header from './Header';

const TypingAnimation: React.FC<{ text: string }> = ({ text }) => {
  const [typedText, setTypedText] = useState<string>('');

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= text.length) {
        setTypedText(text.substring(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50); // Adjust speed here

    return () => clearInterval(interval);
  }, [text]);

  return <h1 className='tit'>{typedText}</h1>;
};
const Dashboard = () => {
  // const { session1: sessionObj } = useAuth();
  // -------------- hooks ----------------
  return (
   <div className="h-full w-full p-5 md:pl-0">
      <Header />
      <div className="content">
      <TypingAnimation text="Welcome to VieHub - Where Talent Meets Opportunity Discover Your Potential:" />
          <p className='desc'>Explore diverse industry competitions and
          tasks tailored for your skills. From Coding
          and Design to Writing and more, VieHub is 
          your gateway to showcasing talent.
          </p>
          <img src={Image} alt="image" className='image'/>
      </div>
    </div>
  );
};
export default Dashboard;

