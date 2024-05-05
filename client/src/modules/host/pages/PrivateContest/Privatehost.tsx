import Header from "@/layouts/client/components/Header";
import Footer from "@/layouts/client/components/Footer";
import image from "@/assets/images/publicImage.png";
import React, { useState } from 'react';

const PrivateHost: React.FC = () => {
    return (
        <div className="h-full w-full">
            <Header isLoggedin={true} />
            <div className="App">
      <div className="header">
        <div className="header-center">
        <img className="host-logo" src={image} alt="" />
          <p className="header-text">
            <span style={{ fontWeight: "bold" }}>
              private competition that hosts a discreet and exclusive
              environment
            </span>{" "}
            <span>
              for tailored contests. <br /> Start hosting now!
            </span>
          </p>
          <button className="host-button">Host Private competitions</button>
        </div>
      </div>

      <section className="section" >
        <div className="section-container">
          <div className="section-left">
            <img src="https://picsum.photos/id/237/200/300" alt="image" />
          </div>
          <div className="section-right">
            <h2>
              Corporate Catalyst: Fostering Innovation Through Private
              Competitions
            </h2>
            <p className="multi-line">
              Unlock creativity within your team. Leverage your company’s
              greatest resource by dedicating time for innovation. Join our
              Private Competitions and drive transformative ideas from within.
            </p>
            <button className="host-button">Host Private competitions</button>
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: "white" }}>
        <div
          className="section-container"
          style={{ flexDirection: "row-reverse" }}
        >
          <div className="section-left">
            <img src="https://picsum.photos/id/238/200/300" alt="image" />
          </div>
          <div className="section-right">
            <h2>
              Enhancing Workplace Dynamics with Professional Competitions:
            </h2>
            <p className="multi-line">
              Elevate employee satisfaction and collaboration through strategic
              company competitions. Witness a decrease in attrition rates while
              fostering a collaborative environment, all within the framework of
              a professionally enriching and enjoyable experience.
            </p>
            <button className="host-button">Host Private competitions</button>
          </div>
        </div>
      </section>

      
    </div>
            <Footer />
        </div>
    );
};

export default PrivateHost;