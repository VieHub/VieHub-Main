// import logo from "@/assets/Logo.png";
import FacebookSharpIcon from "@mui/icons-material/FacebookSharp";
import InstagramIcon from "@mui/icons-material/Instagram";
import SendSharpIcon from "@mui/icons-material/SendSharp";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="bg-fotter bg-lb-black flex flex-col justify-between px-3 py-3 text-white md:flex-row md:p-20">
        <div className="flex flex-col gap-5 lg:w-2/5">
          {/* <img src={logo} className="foteer-img" alt="" /> */}
          <p>
            VieHub platform is your gateway to elevating contests, showcasing
            your talent, and bridging the gap between service providers and
            seekers
          </p>
          <div className="flex flex-row gap-5 py-5">
            <div className="border-lb-lightPurple flex h-8 w-8 items-center justify-center rounded-full border bg-[#252525]">
              <FacebookSharpIcon fontSize="small" className=" text-white " />
            </div>
            <div className="border-lb-lightPurple flex h-8 w-8 items-center justify-center rounded-full border bg-[#252525]">
              <InstagramIcon fontSize="small" className=" text-white " />
            </div>
            <div className="border-lb-lightPurple flex h-8 w-8 items-center justify-center rounded-full border bg-[#252525]">
              <SendSharpIcon fontSize="small" className=" text-white " />
            </div>
          </div>
        </div>
        <div className="flex flex-row flex-wrap gap-20 ">
          {/* <ul className="font-semibold">
            <li className="pb-2">Company</li>
            {["About", "Press", "Careers", "Contact", "Partners"].map(
              (item) => {
                return (
                 <Link to={"/"}><li className="pb-2 text-gray opacity-70" key={item}> 
                    {item}
                  </li></Link>
                );
              },
            )}
          </ul> */}
          <ul className="font-semibold">
            <li className="pb-2">For Host:</li>
            {[
              "Create a New Competition",
              "Customization Options",
              "Entry Submission Management",
              "Judging Panel Setup",
              "Participant Management",
              "Prizes and Rewards",
              "Security and Fairness",
            ].map((item) => {
              return (
                <Link to={"/"}>
                  <li className="pb-2 text-gray opacity-70" key={item}>
                    {item}
                  </li>
                </Link>
              );
            })}
          </ul>
          <ul className="font-semibold">
            <li className="pb-2">For Participant :</li>
            {[
              "Browse Competitions",
              "Registration and Profile",
              "Competition Details",
              "Submission Interface",
              "Prize Claiming",
            ].map((item) => {
              return (
                <Link to={"/"}>
                  <li className="pb-2 text-gray opacity-70" key={item}>
                    {item}
                  </li>
                </Link>
              );
            })}
          </ul>
          <ul className="font-semibold">
            <li className="pb-2">Competition</li>
            {[
              "Coding Competition",
              "Design Competition",
              "Writing Competition",
              "Art and Illustration Competitions",
              "Video and Animation Challenges",
              "Start up Competition",
              "Task Challenges",
            ].map((item) => {
              return (
                <Link to={"/"}>
                  {" "}
                  <li className="pb-2 text-gray opacity-70" key={item}>
                    {item}
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="border-y border-y-[#555177] bg-[#343A40] px-3 py-8 text-white md:px-20">
        <p>© 2024 VieHub. All rights reserved.</p>
      </div>
    </>
  );
};

export default Footer;
