import Header from "@/layouts/client/components/Header";
import Footer from "@/layouts/client/components/Footer";
import Image from "@/assets/images/image 4.avif";
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const Host: React.FC = () => {
    return (
        <div className="h-full w-full">
            <Header isLoggedin={true} />
            <div className="host-container">
                {/* <div className="carousel"> */}
                    <img src={Image} alt=""  className="carousel-img"/>
                {/* </div> */}
                <div className="carousel text-white">
                    <div id="item1" className="carousel-item w-full ">
                        <h1 className=" mb-2 text-xl font-bold text-black" style={{ color: "white" }}>
                        Public competition
                        </h1>
                        <p className=" text-base" style={{ color: "white" }}>
                          Host vibrant public competitions effortlessly with our platform.
                          Engage diverse participants and showcase talents seamlessly. Start hosting now!
                        </p>
                    </div>
                    <div id="item2" className="carousel-item w-full">
                          <h1 className=" mb-2 text-xl font-bold text-black" style={{ color: "white" }}>
                            Private competition
                          </h1>
                          <p className=" text-base" style={{ color: "white" }}>
                            hosts a discreet and exclusive environment for tailored contests.
                            Accessible through unique links, these competitions provide a more controlled and targeted experience
                          </p>
                    </div>
                </div>
                <div className="swap flex justify-center py-2 gap-2">
                    <a href="#item1" className="btn btn-xs">1</a>
                    <a href="#item2" className="btn btn-xs">2</a>
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    );
};

export default Host;
