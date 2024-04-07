import logo from "@/assets/Logo.png";
import Dropdown from "@/components/Dropdown";
import { NAV_ITEMS } from "@/constants";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="flex items-center justify-between bg-white px-3 py-3 text-black md:px-20">
      {/* Flex container for logo and nav items */}
      <div className="flex flex-grow items-center">
        {/* Logo, always visible */}
        <div className="cursor-pointer" onClick={() => navigate("/")}>
          <img src={logo} alt="Vie Hub Logo" className="h-8 w-auto" />
        </div>
        {/* Navigation items, hidden on small screens, no margin needed */}
        <nav className="ml-10 hidden md:flex md:gap-10">
          {" "}
          {/* Adjust margin-left as needed */}
          {NAV_ITEMS.map((item) => (
            <a
              key={item.name}
              href={`#${item.section}`}
              className="nav-item hover:text-gray-300 cursor-pointer transition-colors duration-200 ease-in-out"
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>

      {/* Right-aligned Search and Sign Up, hidden on small screens */}
      <div className="hidden items-center gap-2 md:flex">
        <input
          type="text"
          placeholder="Search"
          className="text-gray-900 placeholder-gray-500 border-gray-300 block rounded-md border py-2 pl-4 pr-3 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
        />
        <button className="signup-btn  px-4 py-2 text-sm font-medium text-white shadow-sm ">
          Sign Up
        </button>
      </div>

      {/* Dropdown for mobile, aligned to the right */}
      <div className="md:hidden">
        <Dropdown>
          <button>
            <MoreHorizIcon />
          </button>
        </Dropdown>
      </div>
    </header>
  );
};

export default Header;