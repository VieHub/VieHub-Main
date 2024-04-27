import Header from "@/layouts/client/components/Header";
import Footer from "@/layouts/client/components/Footer";
// import icon from "@/assets/icons/icons8-sort-right-50 (1).png";
import right from "@/assets/icons/icons8-right-arrow-48.png";
import left from "@/assets/icons/icons8-left-arrow-48.png";
import Image from "@/assets/images/image 4.avif";
import React, { useState } from 'react';

const Host: React.FC = () => {
    const [activeItemId, setActiveItemId] = useState('item1');

    const handleArrowClick = (direction: 'prev' | 'next') => {
        const currentItemId = activeItemId === 'item1' ? 'item1' : 'item2';

        if (direction === 'next') {
            const nextItemId = currentItemId === 'item1' ? 'item2' : 'item1';
            const nextItem = document.getElementById(nextItemId);
            nextItem?.scrollIntoView({ behavior: 'smooth' });
            setActiveItemId(nextItemId);
        } else {
            const prevItemId = currentItemId === 'item1' ? 'item2' : 'item1';
            const prevItem = document.getElementById(prevItemId);
            prevItem?.scrollIntoView({ behavior: 'smooth' });
            setActiveItemId(prevItemId);
        }
    };
    
    return (
        <div className="h-full w-full">
            <Header isLoggedin={true} />
            <div className="host-container relative">
                <img src={Image} alt="" className="carousel-img" />
                <div className="carousel text-white">
                    <div id="item1" className="carousel-item w-full">
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
                <div className="point-container">
                    <div className={`point absolute bottom-10 left-100 right-20 flex flex-column ${activeItemId === 'item2' ? 'active' : ''}`}></div>
                    <div className={`point absolute bottom-10 left-100 right-16 flex flex-column ${activeItemId === 'item1' ? 'active' : ''}`}></div>
                </div>

                {/* Arrow for swapping */}

                <div className="arrow left-arrow" onClick={() => handleArrowClick('prev')}>
                <img src={right} alt="" />
                    
                    </div> 
                <div className="arrow right-arrow" onClick={() => handleArrowClick('next')}>
                <img  src={right} alt="" />
                    </div> 
            </div>
            {/* <Footer /> */}
        </div>
    );
};

export default Host;
