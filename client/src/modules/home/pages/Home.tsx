// import useAuth from "@/hooks/Context";
// import useAuth from "@/hooks/Context";
import React, { useEffect, useState } from 'react';
import Image from '../../../assets/image.jpeg';
import SecondImage from '../../../assets/teamgoals.png';

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
    {/* the first div  */}
    <div className="content">
      <div className="left-content">
        <TypingAnimation text="Welcome to VieHub - Where Talent Meets Opportunity Discover Your Potential:" />
        <p className='desc'>Explore diverse industry competitions and
          tasks tailored for your skills. From Coding
          and Design to Writing and more, VieHub is 
          your gateway to showcasing talent.
        </p>
      </div>
      <div className="right-content">
        <img src={Image} alt="image" className='image'/>
      </div>
      
    </div>
{/*end the first div  */}
{/* the Second div  */}
    <div className='cont'>
    <img src={SecondImage} alt="" />
    <h1> Recognition Awaits:</h1>
    <p>Engage in both public and private contests to showcase your skills, fortify your submissions within dynamic portfolios, and seize the opportunity to win enticing rewards. Your exceptional talent merits the acknowledgment it deserves!</p>
    </div>
  </div>
  );
};
export default Dashboard;

