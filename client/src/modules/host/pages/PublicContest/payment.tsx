import Header from "@/layouts/client/components/Header";
import Footer from "@/layouts/client/components/Footer";
import image from "@/assets/images/publicImage.png";
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import mastercard from "@/assets/images/pay3.png"
import paypal from "@/assets/icons/paypal-svgrepo-com.svg"
import visa from "@/assets/icons/visa-svgrepo-com.svg"


const payment: React.FC = () => {
    return (
        <div className="h-full w-full">
            <Header isLoggedin={true} />
            <div className="signup-container">
            <div>
      {/* Adding icons with space */}
      <div className="container-pay">
        <div className="title">Public competition form</div>{" "}
        <h5 className="h">Select payment method</h5>
        <div className="icons">
            <img  className="icon" src={mastercard} alt="" />
            <img className="icon"  src={paypal} alt="" />
            <img className="icon"  src={visa} alt="" />
          
        </div>
        <div className="input-box">
          <input type="text" placeholder="CARDHOLDER NAME" />
        </div>
        <div className="input-box">
          <input type="password" placeholder="CARD NUMBER" />
        </div>
        <div className="input-row">
          <div className="input-box">
            <input type="text" placeholder="VALID THROUGH" />
          </div>
          <div className="input-box">
            <input type="text" placeholder="CVV" />
          </div>
        </div>
        <div className="button-row">
          <button className="button">Back</button>
          <button className="button">Submit</button>
        </div>
      </div>
    </div>
            
        </div>
        {/* <Footer /> */}
        </div>
    );
};

export default payment;
