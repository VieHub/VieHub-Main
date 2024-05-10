// import Header from "@/layouts/client/components/Header";
// import Footer from "@/layouts/client/components/Footer";
import image from "@/assets/images/publicImage.png";
import React from "react";
import { Link } from "react-router-dom";
import worldImage from "@/assets/images/graphic global community.svg";
import teamWork from "@/assets/images/teamwork-removebg-preview.png"




const PublicHost: React.FC = () => {
  return (
    <div className="h-full w-full">
      {/* <Header /> */}
      <div className="App1">
        <div className="header1">
          <div className="header1-center">
            <img className="host-logo" src={image} alt="" />
            <p className="header1-text">
              <span style={{ fontWeight: "bold" }}>
                Host vibrant public competitions
              </span>{" "}
              <span>
                effortlessly with our platform. <br /> Start hosting now!
              </span>
            </p>
            <Link to="/host/PublicHost/multi-step-form">
              <button className="host-button">Host public competitions</button>
            </Link>
          </div>
        </div>

        <section className="section">
          <div className="section-container">
            <div className="section-left">
              <img src={worldImage} alt="image" />
            </div>
            <div className="section-right">
              <h2>Igniting Innovation in Every Competition</h2>
              <p className="multi-line">
                Fueling Innovation, Igniting Dreams: Where Every Idea Has a
                Stage. Welcome to our Public Competition Platform – Your Gateway
                to Showcase Brilliance and Inspire!
              </p>
              <Link to="/host/PublicHost/ContestForm">
                <button className="host-button">
                  Host public competitions
                </button>
              </Link>
            </div>
          </div>
        </section>

        <section className="section" style={{ backgroundColor: "white" }}>
          <div
            className="section-container"
            style={{ flexDirection: "row-reverse" }}
          >
            <div className="section-left">
              <img src={teamWork} alt="image" />
            </div>
            <div className="section-right">
              <h2>Competition Crafters</h2>
              <p className="multi-line">
                Empower your startup journey with the most experienced services
                team. From inception to triumph, we assist in creating,
                managing, and marketing your competition, ensuring a path to
                success like never before.
              </p>
              <Link to="/host/PublicHost/ContestForm">
                <button className="host-button">
                  Host public competitions
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default PublicHost;
