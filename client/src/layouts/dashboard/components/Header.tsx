// import React from "react";
import { useLocation } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();

  return (
    <div className="flex items-center justify-between p-6">
      <h1 className="text-3xl font-semibold">{pathname.slice(1)}</h1>
      <div className="flex flex-row items-center gap-2">
        <div className="hover:bg-soft-gray relative flex h-12 w-12 cursor-pointer items-center justify-center rounded-full">
          <svg
            className="absolute right-[0px] top-[-4px]"
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            viewBox="0 0 16 16"
          >
            <path
              fill="#6F8DE8"
              d="M8 9.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3"
            />
          </svg>
          <img src="/public/assets/images/bill.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
