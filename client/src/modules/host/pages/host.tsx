import Header from "@/layouts/client/components/Header";
import Footer from "@/layouts/client/components/Footer";
// import icon from "@/assets/icons/icons8-sort-right-50 (1).png";
import right from "@/assets/icons/icons8-right-arrow-48.png";
// import left from "@/assets/icons/icons8-left-arrow-48.png";
import community from "@/assets/images/graphic global community.svg";
import Image from "@/assets/images/image 4.avif";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import withAuth from "@/hoc/withAuth";

const Host: React.FC = () => {
  const [activeItemId, setActiveItemId] = useState("item1");

  const handleArrowClick = (direction: "prev" | "next") => {
    const currentItemId = activeItemId === "item1" ? "item1" : "item2";

    if (direction === "next") {
      const nextItemId = currentItemId === "item1" ? "item2" : "item1";
      const nextItem = document.getElementById(nextItemId);
      nextItem?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
      setActiveItemId(nextItemId);
    } else {
      const prevItemId = currentItemId === "item1" ? "item2" : "item1";
      const prevItem = document.getElementById(prevItemId);
      prevItem?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
      setActiveItemId(prevItemId);
    }
  };

  return (
    <div className="h-full w-full">
      <div className="host-container relative">
        <img src={Image} alt="" className="carousel-img" />
        <div className="carousel text-white">
          <div id="item1" className="carousel-item w-full">
            <h1
              className="mb-2 text-xl font-bold text-black"
              style={{ color: "white" }}
            >
              Public competition
            </h1>
            <p className="text-base" style={{ color: "white" }}>
              Host vibrant public competitions effortlessly with our platform,
              Engage diverse participants and showcase talents seamlessly.
            </p>
            <Link to="/host/PublicHost">
              <button className="host-btn px-4 py-2 text-sm font-medium text-white shadow-sm ">
                Host
              </button>
            </Link>
          </div>
          <div id="item2" className="carousel-item w-full">
            <h1
              className="mb-2 text-xl font-bold text-black"
              style={{ color: "white" }}
            >
              Private competition
            </h1>
            <p className=" " style={{ color: "white" }}>
              Hosts a discreet and exclusive environment for tailored contests.
              Accessible through unique links, these competitions provide a more
              controlled and targeted experience
            </p>
            <Link to="/host/PrivateHost">
              <button className="host-btn px-4 py-2 text-sm font-medium text-white shadow-sm ">
                Host
              </button>
            </Link>
          </div>
        </div>
        <div className="point-container">
          <div
            className={`point left-100 flex-column absolute bottom-10 right-20 flex ${activeItemId === "item2" ? "active" : ""}`}
          ></div>
          <div
            className={`point left-100 flex-column absolute bottom-10 right-16 flex ${activeItemId === "item1" ? "active" : ""}`}
          ></div>
        </div>
        <div
          className="arrow left-arrow"
          onClick={() => handleArrowClick("prev")}
        >
          <img src={right} alt="" />
        </div>
        <div
          className="arrow right-arrow"
          onClick={() => handleArrowClick("next")}
        >
          <img src={right} alt="" />
        </div>
      </div>

      <div className="middle">
        <h1 className="middle-title">
          What is the difference between public and private Competition?
        </h1>
        <div className="info-container">
          <div className="info">
            <h3>Public Competition:</h3>
            <ul>
              <li>
                Open to a wide audience, and anyone who meets the criteria can
                participate.
              </li>
              <li>
                Information about the competition, including details and
                entries, is typically accessible to the public.
              </li>
              <li>
                Public competitions often attract a larger and more diverse pool
                of participants, fostering a sense of community.
              </li>
            </ul>
          </div>
          <div className="info">
            <h3>Private Competition:</h3>
            <ul>
              <li>
                Limited to a specific group or individuals who are invited or
                granted access.
              </li>
              <li>
                Information about the competition may be restricted and not
                accessible to the general public.
              </li>
              <li>
                Private competitions are often used for more targeted or
                specialized events, with a focus on a specific audience or
                purpose.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="final-section">
        <div>
          <h2>How to Host Competition?</h2>
          <ul>
            <li>
              First you choose public or private Competition and thenyou fill
              out the form.
            </li>
            <li>Define the competition title, description, and objectives.</li>
            <li>and Specify competition rules and guidelines</li>
            <li>Set the start and end dates for the competition,</li>
            <li>
              Choose the type of competition (e.g., coding, design, writing,
              etc).
            </li>
            <li>Define judging criteria and scoring mechanisms</li>
            <li>
              specify prizes for winners, including monetary rewards,
              certificates, or sponsored items.
            </li>
          </ul>
        </div>
        <img src={community} alt="" />
      </div>

      <Footer />
    </div>
  );
};

export default withAuth(Host, ["Host"]);
