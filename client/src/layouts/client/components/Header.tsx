import logo from "@/assets/Logo.png";
import account from "@/assets/icons/account.png";
import Dropdown from "@/components/Dropdown";
import { NAV_ITEMS } from "@/constants";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import ProfileDropdown from "@/modules/host/components/profileDropDown";
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";

const Header: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  console.log(location.pathname);
  let isUserLoggedIn = auth?.isAuthInitialized && auth.user;
  // if (!auth?.isAuthInitialized) {
  //   return <div></div>; // Display a loading spinner or placeholder here
  // }

  const handleNavigation = (item: { name: string; section: string }) => {
    // Special handling for Home to navigate to '/'
    if (item.name === "Home") {
      navigate("/");
    } else {
      navigate("/" + item.section);
    }
  };
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
          {/* Adjust margin-left as needed */}
          {NAV_ITEMS.map((item) => (
            <a
              key={item.name}
              href={item.name === "Home" ? "/" : "/" + item.section}
              onClick={(e) => {
                e.preventDefault();
                handleNavigation(item);
              }}
              className={`nav-item ${location.pathname === (item.name === "Home" ? "/" : "/" + item.section) ? "active" : ""} hover:text-gray-300 cursor-pointer transition-colors duration-200 ease-in-out`}
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
        {/* Conditionally render the signup button or profile icon based on prop value */}
        {auth?.isAuthInitialized ? (
          isUserLoggedIn ? (
            <div onClick={toggleDropdown} className="relative cursor-pointer">
              <img
                src={account}
                alt="Profile"
                className="profile-img h-8 w-8 rounded-full"
              />
              {dropdownOpen && <ProfileDropdown />}
            </div>
          ) : (
            <Link to="/Signup">
              <button className="signup-btn px-4 py-2 text-sm font-medium text-white shadow-sm">
                Sign up
              </button>
            </Link>
          )
        ) : (
          // Render empty space or minimal placeholder if not initialized
          <div style={{ width: 82 }}></div> // Adjust width as necessary to match the button or profile image
        )}
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
