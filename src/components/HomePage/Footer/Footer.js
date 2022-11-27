import React, { useState } from "react";
import { BiShuffle } from "react-icons/bi";
import { AiFillStepBackward } from "react-icons/ai";
import { CiRepeat } from "react-icons/ci";
import { BsPlayFill } from "react-icons/bs";
import { CgPlayPause } from "react-icons/cg";
import { HiVolumeUp } from "react-icons/hi";

const Footer = () => {
  const [hidden, setD] = useState(false);
  return (
    <>
      <div className="absolute bottom-0 left-0 w-full h-[5rem] border-t-2  border-slate-500 lg:px-8 md-px-4 px-2">
        <div className="flex justify-between items-center h-full  w-full">
          <div className="flex justify-center items-center ">
            <img
              src="https://i.scdn.co/image/ab6761610000e5eb5fe9a5af0233790d764583dd"
              alt="cd"
              className="w-16 rounded-full mr-3 lg:block hidden"
            />
            <div>
              <p>Time to Rise</p>
              <p className="font-semibold">Vannda</p>
            </div>
          </div>
          <div className="">
            <div className=" flex items-center justify-between lg:text-4xl text-3xl ">
              <BiShuffle />
              <AiFillStepBackward />
              <div
                className="bg-green-500 px-1 py-1 rounded-full mx-2"
                onClick={() => {
                  setD(!hidden);
                }}
              >
                <BsPlayFill className={`${hidden && "hidden"}`} />
                <CgPlayPause className={`${!hidden && "hidden"}`} />
              </div>
              {/* <BiSkipNext className="text-5xl" /> */}
              <AiFillStepBackward className="rotate-180" />
              <CiRepeat />
            </div>
          </div>
          <div className="mr-3 lg:text-3xl text-2xl ">
            <HiVolumeUp />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
