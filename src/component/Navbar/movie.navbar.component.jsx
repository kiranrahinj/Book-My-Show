
import React from "react";
import {
  BiChevronRight,
  BiSearch,
  BiMenu,
  BiChevronDown,BiShareAlt
} from "react-icons/bi";

const NavSm = () => {
  return (
    <>
      <div className="text-white flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold">It All starts Here!</h3>
          
        </div>
        <div className="w-8 h-8">
          <BiShareAlt className="w-full h-full" />
        </div>
      </div>
    </>
  );
};

const NavLg = () => {
  return (
    <>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center w-1/2 ">
            <div><h3 className="italic font-medium text-2xl">book</h3></div>
          <div className="w-10 h-9">
            <img
              src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png"
              alt="logo"
              className="w-full h-full"
            />
          </div>
          <div><h3 className="italic font-medium text-2xl">show</h3></div>

          <div className="w-full flex items-center gap-3 ml-5 bg-white px-3 py-2 rounded-md">
            <BiSearch className="text-black"/>
            <input
              type="search"
              className="w-full bg-transparent border-none focus:outline-none"
              placeholder="Search for movies, events, Plays, Sports and Activities."
            />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-gray-200 text-xs flex items-center cursor-pointer hover:text-yellow-600">
            Pune <BiChevronDown />
          </span>
          <button className="bg-red-600 text-white px-2 py-1 text-sm rounded">
            Sign in
          </button>
          <div className="w-8 h-8 text-white">
            <BiMenu className="w-full h-full" />
          </div>
        </div>
      </div>
    </>
  );
};

const Movienavbar = () => {
  return (
    <>
      <nav className="text-white absolute inset-x-0 z-30 bg-opacity-10 backdrop-filter backdrop-blur-lg lg:relative lg:bg-bms-700 p-4">
        <div className="md:hidden">{/* mobile approach */ <NavSm />}</div>
        <div className="hidden md:block lg:hidden">
          {/* tab approach */ <NavSm />}
        </div>
        <div className="hidden lg:flex">{/*pc approach*/ <NavLg />}</div>
      </nav>
    </>
  );
};
export default Movienavbar;
