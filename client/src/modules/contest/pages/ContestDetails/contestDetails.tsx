// import React from "react";


import Overview from "./components/Overview";
import Rules from "./components/rules"



const ContestDetails = () => {
  return (
    <div className="flex h-full w-full flex-col">
      <div className="details-section w-full flex justify-center items-center">
        <h1 className="text-white text-3xl font-bold text-center">
          Node.js Coding Competition: Unleash Your JavaScript Skills!
        </h1>
      </div>
      <div className="second-details-section flex flex-row justify-center">
        <div className="flex flex-row justify-center details-buttons">
          <button className="text-white text-xl pl-4 pr-4 hover:underline">Overview</button>
          <div className="h-full border-r border-white opacity-10"></div>
          <button className="text-white text-xl pl-4 pr-4 hover:underline">Rules</button>
          <div className="h-full border-r border-white opacity-10"></div>
          <button className="text-white text-xl pl-4 pr-4 hover:underline">Schedule</button>
        </div>
      </div>
      {/* <Overview /> */}
      {/* <Rules /> */}
      <h1 className="Schedule-text text-black text-3xl font-bold mt-8 mb-8 ">Schedule</h1>
      <h1 className="text-white text-2xl font-bold my-4">Schedule</h1>
        <div className="Fifth-details-section flex border border-black justify-between items-center">
          <h3 className="Schedule text-black font-bold ml-4">Schedule</h3>
          <h3 className="BEGINS text-black font-bold text-center">BEGINS</h3>
          <h3 className="ENDS text-black font-bold mr-4">ENDS</h3>
        </div>
        <div className="Fifth-details-section flex border border-black justify-between items-center">
          <h3 className="Schedule text-black font-bold ml-4">Submissions</h3>
          <h3 className="BEGINS text-black font-bold text-center">November 2nd 2024</h3>
          <h3 className="ENDS text-black font-bold mr-4 ">Mar 14th 2024 </h3>
        </div>
        <div className="Fifth-details-section flex border border-black justify-between items-center mb-12">
          <h3 className="Schedule text-black font-bold ml-4">Winners Announced</h3>
          <h3 className="BEGINS text-black font-bold text-center"></h3>
          <h3 className="ENDS text-black font-bold mr-4">April 2nd 2024</h3>
        </div>
        
      
      
      
      
    </div>
    
  );
};

export default ContestDetails;
