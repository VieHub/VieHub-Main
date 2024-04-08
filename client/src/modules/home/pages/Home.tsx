import Image from "../../../assets/image.jpeg";
import SecondImage from "../../../assets/teamgoals.png";
import { Link } from "react-router-dom";
import Header from "@/layouts/client/components/Header";
import TypingAnimation from "../components/TypingAnimation";

const Dashboard = () => {
  return (
    <div className="h-full w-full">
      <Header />
      <div className="content flex max-w-full flex-wrap">
        <div className="left-content w-full p-4 md:flex-1">
          <TypingAnimation text="Welcome to VieHub - Where Talent Meets Opportunity Discover Your Potential" />
          <p className="desc">
            Explore diverse industry competitions and tasks tailored for your
            skills. From Coding and Design to Writing and more, VieHub is your
            gateway to showcasing talent.
          </p>
          <div className="buttons">
          <Link className="Host-btn px-4 py-2 text-sm font-medium text-white shadow-sm " to="/host">
            <button>
            Join as Host
            </button>
          </Link>
          
          <Link className="participant-btn px-4 py-2 text-sm font-medium text-white shadow-sm " to="/participant">
            <button>
            Join as Participant
            </button>
          </Link>
           
          </div>

        </div>
        <div className="right-content flex w-full items-center justify-end p-4 md:flex-1">
          <img src={Image} alt="image" className="h-auto max-w-full" />
        </div>
      </div>
      <div className="cont flex max-w-full flex-row items-start p-4 md:flex-row">
        <img
          src={SecondImage}
          alt=""
          className="mb-4 h-auto max-w-full md:mb-0 md:mr-4"
        />
        <div className="">
          <h1 className=" mb-2 text-xl font-bold text-black">
            Recognition Awaits:
          </h1>
          <p className=" text-base" style={{ color: "black" }}>
            Engage in both public and private contests to showcase your skills,
            fortify your submissions within dynamic portfolios, and seize the
            opportunity to win enticing rewards. Your exceptional talent merits
            the acknowledgment it deserves!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;