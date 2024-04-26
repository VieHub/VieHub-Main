import Header from "@/layouts/client/components/Header";
import Footer from "@/layouts/client/components/Footer";
import Image from "@/assets/images/image 4.avif";
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const Host: React.FC = () => {
    return (
        <div className="h-full w-full">
            <Header isLoggedin={true} />
            <div className="host-container relative">
                <img src={Image} alt="" className="carousel-img" />
                <div className="carousel text-white">
                    <div id="item1" className="carousel-item w-full ">
                        <h1 className="mb-2 text-xl font-bold text-black" style={{ color: "white" }}>
                            Public competition
                        </h1>
                        <p className="text-base" style={{ color: "white" }}>
                            Host vibrant public competitions effortlessly with our platform,
                            Engage diverse participants and showcase talents seamlessly.
                        </p>
                        <button className="host-btn px-4 py-2 text-sm font-medium text-white shadow-sm ">
                            Host
                        </button>
                    </div>
                    <div id="item2" className="carousel-item w-full">
                        <h1 className="mb-2 text-xl font-bold text-black" style={{ color: "white" }}>
                            Private competition
                        </h1>
                        <p className=" " style={{ color: "white" }}>
                            Hosts a discreet and exclusive environment for tailored contests.
                            Accessible through unique links, these competitions provide a more controlled and targeted experience
                        </p>
                        <button className="host-btn px-4 py-2 text-sm font-medium text-white shadow-sm ">
                            Host
                        </button>
                    </div>
                </div>

                    <div className="swap absolute bottom-10 left-100 right-8 flex flex-column items-center py-2 gap-2">
                        <div onClick={() => window.location.href="#item1"} className="btn btn-circle"></div>
                        <div onClick={() => window.location.href="#item2"} className="btn btn-circle"></div>
                    </div>
                {/* <div className="circles absolute bottom-10 left-0 right-8 flex flex-column items-center py-2 gap-2">
                    <div onClick={() => window.location.href="#item1"} className="circle"></div>
                    <div onClick={() => window.location.href="#item2"} className="circle"></div>
                </div> */}
            </div>
            {/* <Footer /> */}
        </div>
    );
};

export default Host;

