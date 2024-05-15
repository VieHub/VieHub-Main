// import React from "react";

import iconpublic from "@/assets/icons/institution-svgrepo-com (1).svg";
import { Link } from "react-router-dom";

const Overview = () => {
  return (
    <div className="flex h-full w-full flex-col">
      <div className="third-details-section flex justify-center  ">
        <div className="contest-heading mt-12">
          <h1 className="mb-8 text-3xl font-bold  text-black">
            Node js Coding
          </h1>
          <h3 className="mb-8 text-xl  text-black">
            Node.js Coding Competition: Show your coding prowess, build robust,
            <br /> scalable applications
          </h3>
          <button
            className="text-l mt-8 rounded rounded px-8 py-2 text-white"
            style={{ backgroundColor: "#52AB98" }}
          >
            Join competition
          </button>
        </div>
        <div className="contest-heading-card bg-gray-100 card mt-12 p-8">
          <p className="mb-16 text-black" style={{ fontSize: "1.1rem" }}>
            Deadline:
            <br /> Mar 14th 2024 at 12:00 AM
          </p>
          <hr className="border-t-1 border-gray-600 mb-8 " />
          <div className="mb-8 flex flex-row justify-between">
            <div className="flex flex-col ">
              <p style={{ fontSize: "1.1rem" }}>Company Name</p>
              <button
                className="py-1/3 text-l mt-12 px-4 text-white"
                style={{ backgroundColor: "#52AB98" }}
              >
                1000$
              </button>
              <Link to="/contest">
                <p
                  className="mt-4"
                  style={{
                    fontSize: "1.1rem",
                    color: "#5B88D5",
                    textDecoration: "underline",
                  }}
                >
                  similar competitions
                </p>
              </Link>
            </div>
            <div className="ml-2 flex flex-col">
              <div className="flex flex-row">
                <img className="mr-2 w-4" src={iconpublic} alt="" />
                <p style={{ fontSize: "1.1rem" }}>Public</p>
              </div>
              <p style={{ fontSize: "1.1rem" }} className="mt-12">
                Company Name
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="forth-details-section mb-8 mt-12">
        <p>
          Welcome to the Node.js Coding Competition – a dynamic arena where your
          JavaScript skills take center stage! Join fellow developers in an
          exhilarating challenge, demonstrating your proficiency in building
          powerful and scalable applications with Node.js. Immerse yourself in
          problem-solving, innovation, and community camaraderie. Elevate your
          coding journey, compete for recognition, and stand a chance to win
          exciting prizes. Unleash your potential, make a lasting impact, and
          become a Node.js coding champion. Ready to embark on this thrilling
          adventure?
        </p>
        <p className="mt-12">
          Explore the Node.js Coding Competition and unlock a platform that
          provides a thrilling space for honing your JavaScript skills. Engage
          in challenges, showcase your expertise, and seize the opportunity to
          shine as you build robust and scalable applications. Join us for a
          unique coding experience!
        </p>
        <div className="mt-12 flex flex-row items-center">
          <h1 className="requierment ">REQUIREMENTS</h1>
          <hr className="border-gray-400 section-line opacity-3 ml-6 border-t" />
        </div>
        <div className="lis-req mt-6 flex flex-col">
          <li className="font-bold">
            programming Proficiency:
            <span className="font-normal">
              Demonstrate strong skills in JavaScript and proficiency in Node.js
              programming
            </span>
          </li>
          <li className="mt-6 font-bold">
            Web Development Knowledge:
            <span className="font-normal">
              Have a foundational understanding of key web development concepts,
              including but not limited to, server-side scripting, asynchronous
              programming, and RESTful APIs.
            </span>
          </li>
          <li className="mt-6 font-bold">
            Code Editor:
            <span className="mt-6 font-normal">
              Utilize a preferred code editor to participate in the competition.
              Whether it's VS Code, Sublime Text, or any other, make sure you're
              comfortable with your chosen tool.
            </span>
          </li>
          <li className="mt-6 font-bold">
            Stable Internet Connection:
            <span className="font-normal">
              Ensure a reliable and stable internet connection throughout the
              competition to facilitate seamless participation.{" "}
            </span>
          </li>
        </div>
        <div className="mt-12 flex flex-row items-center">
          <h1 className="requierment ">WHAT TO BUILD</h1>
          <hr className="border-gray-400 section-line opacity-3 ml-6 border-t" />
        </div>
        <div className="lis-req mt-6 flex flex-col">
          <li className="font-bold">
            programming Proficiency:
            <span className="font-normal">
              Demonstrate strong skills in JavaScript and proficiency in Node.js
              programming
            </span>
          </li>
          <li className="mt-6 font-bold">
            Web Development Knowledge:
            <span className="font-normal">
              Have a foundational understanding of key web development concepts,
              including but not limited to, server-side scripting, asynchronous
              programming, and RESTful APIs.
            </span>
          </li>
          <li className="mt-6 font-bold">
            Code Editor:
            <span className="mt-6 font-normal">
              Utilize a preferred code editor to participate in the competition.
              Whether it's VS Code, Sublime Text, or any other, make sure you're
              comfortable with your chosen tool.
            </span>
          </li>
          <li className="mt-6 font-bold">
            Stable Internet Connection:
            <span className="font-normal">
              Ensure a reliable and stable internet connection throughout the
              competition to facilitate seamless participation.{" "}
            </span>
          </li>
        </div>

        <div className=" mt-12 flex flex-row items-center">
          <h1 className="requierment ">PRIZES</h1>
          <hr className="border-gray-400 section-line opacity-3 ml-6 border-t" />
        </div>
        <div className="prize lis-req mt-6 flex ">
          <div className="mr-12">
            <span className="mt-6 font-bold">
              First Place:
              <li className="font-normal">$500 cash prize</li>
              <li className="font-normal">an exclusive trophy</li>
              <li className="font-normal">certificate of excellence.</li>
            </span>
            <span className="mt-6 font-bold">
              Second Place:
              <li className="font-normal">$300 cash prize</li>
              <li className="font-normal">cutting-edge</li>
              <li className="font-normal">certificate of achievement.</li>
            </span>
            <span className="mt-6 font-bold">
              Innovation Award:
              <li className="font-normal">$100 cash prize</li>
              <li className="font-normal">
                certificate for the most innovative solution
              </li>
              <li className="font-normal">a technology workshop voucher</li>
            </span>
          </div>
          <div className="">
            <span className="mt-6 font-bold">
              People's Choice:
              <li className="font-normal">$100 cash prize</li>
              <li className="font-normal">voted by participants</li>
              <li className="font-normal">
                certificate and special recognition.
              </li>
            </span>
            <span className="mt-6 font-bold">
              Honorable Mentions:
              <li className="font-normal">
                Certificates for outstanding contributions and a curated
                selection of coding resources
              </li>
            </span>
          </div>
        </div>

        <div className="mt-12 flex flex-row items-center">
          <h1 className="requierment ">JUDGING CRITERIA</h1>
          <hr className="border-gray-400 section-line opacity-3 ml-6 border-t" />
        </div>
        <div className="lis-req mt-6 flex flex-col">
          <li className="font-bold">
            programming Proficiency:
            <span className="font-normal">
              Demonstrate strong skills in JavaScript and proficiency in Node.js
              programming
            </span>
          </li>
          <li className="mt-6 font-bold">
            Web Development Knowledge:
            <span className="font-normal">
              Have a foundational understanding of key web development concepts,
              including but not limited to, server-side scripting, asynchronous
              programming, and RESTful APIs.
            </span>
          </li>
          <li className="mt-6 font-bold">
            Code Editor:
            <span className="mt-6 font-normal">
              Utilize a preferred code editor to participate in the competition.
              Whether it's VS Code, Sublime Text, or any other, make sure you're
              comfortable with your chosen tool.
            </span>
          </li>
          <li className="mt-6 font-bold">
            Stable Internet Connection:
            <span className="font-normal">
              Ensure a reliable and stable internet connection throughout the
              competition to facilitate seamless participation.{" "}
            </span>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Overview;
