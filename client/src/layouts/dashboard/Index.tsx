import { useState } from "react";
// import SideNav from "./components/SideNav"; // Adjust the path based on your project structure
// import { NAV_ITEMS } from "./constants"; // Adjust the path based on your project structure
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  return (
    <main className="side-bar bg-secondary-100 flex-row font-roboto md:flex md:h-screen">
      <div className="fixed z-30 md:static">
        {/* <SideNav
          navItems={NAV_ITEMS}
          isSideBarOpen={isSideBarOpen}
          setIsSideBarOpen={setIsSideBarOpen}
        /> */}
      </div>
      <div
        onClick={() => {
          setIsSideBarOpen(!isSideBarOpen);
        }}
        className={`${isSideBarOpen ? "block" : "hidden"} fixed z-20 h-screen w-full bg-[rgba(0,0,0,0.2)] md:hidden`}
      ></div>
      <Outlet />
    </main>
  );
};

export default MainLayout;
