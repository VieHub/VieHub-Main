
import image from "@/assets/images/publicImage.png";
import image2 from "@/assets/images/fostering-innovation-removebg-preview.png";
import image3 from "@/assets/images/1679561373413-removebg-preview.png";
import React from 'react';

const PrivateHost: React.FC = () => {
    return (
        <div className="h-full w-full">
            <div className="App1">
      <div className="header1">
        <div className="header1-center">
        <img className="host-logo" src={image} alt="" />
          <p className="header1-text">
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
            <img src={image2} alt="image" />
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
          
        >
          <div className="section-left">
            <img src={image3} alt="image" />
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
        </div>
    );
};

export default PrivateHost;
