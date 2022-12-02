import React, { useState } from "react";

import { ImBackward, ImNext } from "react-icons/im";
import { FaRegUserCircle } from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/md";
import { CgMenuRight } from "react-icons/cg";
import DropBox from "./Utils/DropBox";
import { useSelector } from "react-redux";

const Navbar = ({ openSideBar, setOpenSideBar }) => {
  const [openBox, setOpenBox] = useState(false);
  const user = useSelector((state) => state.auth.user);

  return (
    <div className="bg-slate-800 w-full h-[5rem] flex items-center  px-4 justify-between rounded-lg sk relative">
      <div className="flex gap-2 items-center text-3xl text-white ">
        <CgMenuRight
          className="txt-2xl mr-3 lg:hidden sm:block"
          onClick={() => {
            setOpenSideBar(!openSideBar);
          }}
        />
        <ImBackward className="bg-gray-600 rounded-lg p-2" />
        <ImNext className="bg-gray-600 rounded-lg p-2" />
      </div>
      <div
        className="flex items-center bg-black p-1 rounded-full text-sm cursor-pointer"
        onClick={() => {
          setOpenBox(!openBox);
        }}
      >
        <FaRegUserCircle
          className="h-5 w-5 bg-gray-400 rounded-full"
          onClick={() => {
            setOpenBox(!openBox);
          }}
        />
        <h2 className="font-bold ml-1">{user.display_name}</h2>
        <MdArrowDropDown className="ml-1" />
      </div>
      {openBox && <DropBox className="transition duration-300" />}
    </div>
  );
};

export default Navbar;
