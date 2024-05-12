import { NAV_ITEMS } from "@/constants";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Dropdown = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const auth = useAuth();
  let isUserLoggedIn = auth?.isAuthInitialized && auth.user;
  const logout = async () => {
    console.log("Logging out...");
    await auth?.logout();
    await navigate("/login");
  };

  return (
    <div className="dropdown dropdown-end dropdown-bottom">
      <div tabIndex={0} className="cursor-pointer">
        {children}
      </div>
      <ul
        tabIndex={0}
        className="menu dropdown-content z-[1] w-52 rounded-box bg-base-100 p-2 shadow"
      >
        {NAV_ITEMS.map((item) => (
          <li key={item.name}>
            {/* Ensure you add the href attribute to the <a> tag if you have URLs in your NAV_ITEMS */}
            <a
              href={item.name === "Home" ? "/" : "/" + item.section}
              className="text-black"
            >
              {item.name}
            </a>
          </li>
        ))}
        <li>
          {auth?.isAuthInitialized ? (
            isUserLoggedIn ? (
              <a
                // Example of hover animation
                href=""
                className="text-gray-700 block px-4 py-2 text-sm"
                onClick={logout}
              >
                Logout
              </a>
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
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
