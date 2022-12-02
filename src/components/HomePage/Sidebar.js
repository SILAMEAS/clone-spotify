import React from "react";
import { GoHome } from "react-icons/go";
import { RiSearchLine } from "react-icons/ri";
import { MdOutlineLibraryMusic } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";

import { Link } from "react-router-dom";

const Sidebar = ({ openSideBar, setOpenSideBar }) => {
  return (
    <>
      <div
        className={`bg-slate-800 max-w-[15rem] p-5 rounded-lg flex flex-col h-full z-10 ${
          !openSideBar && "-translate-x-[15rem] "
        }transition ease-in-out duration-500 fixed left-0 top-2 lg:static`}
      >
        <div className="flex justify-between  ">
          <img
            src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Green.png"
            className="w-[80%] "
            alt="logo"
          />

          <AiOutlineClose
            className="px-1 py-1 rounded-full bg-slate-400 text-2xl lg:hidden sm:block"
            onClick={() => {
              setOpenSideBar(!openSideBar);
            }}
          />
        </div>
        <div className="mt-8">
          <Link to="/home">
            <div className="flex items-center mb-4 text-gray-400 hover:text-white">
              <GoHome className="text-2xl" />
              <h2 className="font-semibold ml-4">Home</h2>
            </div>
          </Link>
          <Link to="/search">
            <div className="flex items-center mb-4 text-gray-400 hover:text-white">
              <RiSearchLine className="text-2xl" />
              <h2 className="font-semibold ml-4">Search</h2>
            </div>
          </Link>
          <Link to="/library">
            <div className="flex items-center mb-4 text-gray-400 hover:text-white">
              <MdOutlineLibraryMusic className="text-2xl" />
              <h2 className="font-semibold ml-4">Top</h2>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
