import { NAV_ITEMS } from "@/constants";

const Dropdown = ({ children }: { children: React.ReactNode }) => {
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
            <a className="text-black">{item.name}</a>
          </li>
        ))}
        <li>
          <button
            className="signup-btn z-[1]p-2  "
            style={{ backgroundColor: "#52ab98" }}
          >
            Sign Up
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
