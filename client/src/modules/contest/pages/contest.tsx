
import { Link } from "react-router-dom";
import Header from "@/layouts/client/components/Header";
import Footer from "@/layouts/client/components/Footer";


const Contest = () => {
  return (
    <div className="h-full w-full">
        <Header isLoggedin={true} />
        <div className="content flex max-w-full flex-wrap">
        <div className="w-full p-12 md:flex-1">
          <p className="desc p-6 text-center opacity-100 text-2xl">
          Elevate your game, join the competition. Your victory story starts now!
          </p>
        </div>
      </div>
      <div className="w-full flex justify-center mt-8">
        <div className="flex">
        <input
            type="text"
            className="border border-gray-300 rounded-md px-8 py-2 mr-2"
            placeholder="Search..."
            style={{ minWidth: "35rem",marginLeft: "20rem" }} // Added to set minimum width for input
        />
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" style={{ backgroundColor: "#52AB98" }}>
            Search
            </button>

        </div>
      </div>

        {/* <Footer /> */}
    </div>
  );
};

export default Contest;
