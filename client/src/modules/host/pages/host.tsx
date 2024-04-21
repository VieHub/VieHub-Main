import Header from "@/layouts/client/components/Header";
import Footer from "@/layouts/client/components/Footer";
import Image from "@/assets/images/image 4.avif"
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const Host: React.FC = () => {
    return (
      <div className="h-full w-full">
        <Header isLoggedin={true} />
        <div className="host-container">
            <h1></h1>
            {/* <img src={Image} alt="" /> */}
          
        </div>
        
      </div>
    );
  };
  
export default Host;
