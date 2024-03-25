import logo from "@/assets/logo.png";
import FacebookSharpIcon from "@mui/icons-material/FacebookSharp";
import InstagramIcon from "@mui/icons-material/Instagram";
import SendSharpIcon from "@mui/icons-material/SendSharp";
const Footer = () => {
  return (
    <>
      <div className="bg-lb-black flex flex-col justify-between px-3 py-3 text-white md:flex-row md:p-20">
        <div className="flex flex-col gap-5 lg:w-2/5">
          <img src={logo} className="w-16" alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis qui,
            deleniti reiciendis nisi magnam nemo!
          </p>
          <div className="flex flex-row gap-2 py-5">
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
        <div className="flex flex-row flex-wrap gap-20 lg:w-2/5">
          <ul className="font-semibold">
            <li className="pb-2">Company</li>
            {["About", "Press", "Careers", "Contact", "Partners"].map(
              (item) => {
                return (
                  <li className="pb-2 text-gray opacity-70" key={item}>
                    {item}
                  </li>
                );
              },
            )}
          </ul>
          <ul className="font-semibold">
            <li className="pb-2">Product</li>
            {["Overview", "Features", "Tutorial", "Pricing", "Releases"].map(
              (item) => {
                return (
                  <li className="pb-2 text-gray opacity-70" key={item}>
                    {item}
                  </li>
                );
              },
            )}
          </ul>
          <ul className="font-semibold">
            <li className="pb-2">Support</li>
            {[
              "Account Information",
              "Talk to Support",
              "Support Docs",
              "System Status",
            ].map((item) => {
              return (
                <li className="pb-2 text-gray opacity-70" key={item}>
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="border-y border-y-[#555177] bg-[#25223D] px-3 py-8 text-white md:px-20">
        <p>© 2022 VieHub. All rights reserved.</p>
      </div>
    </>
  );
};

export default Footer;
