import React, { useEffect, useRef, useState } from "react";
import { BiShuffle } from "react-icons/bi";
import { AiFillStepBackward } from "react-icons/ai";
import { CiRepeat } from "react-icons/ci";
import { BsPlayFill } from "react-icons/bs";
import { CgPlayPause } from "react-icons/cg";
import { HiVolumeUp } from "react-icons/hi";
import { useSelector } from "react-redux";

const Footer = () => {
  const [hidden, setD] = useState(false);
  const { songs, playingSong, isPlay } = useSelector((state) => state.sportify);

  const RefPlayingSong = useRef();
  useEffect(() => {
    RefPlayingSong.current.src = playingSong.preview_url;
    RefPlayingSong.current.play();
  }, [isPlay, playingSong]);
  return (
    <>
      <div className="absolute bottom-0 left-0 w-full h-[5rem] border-t-2  border-slate-500 lg:px-8 md-px-4 px-2] z-50">
        <div className="flex justify-between items-center h-full  w-full">
          {playingSong && (
            <div className="flex justify-center items-center ">
              <img
                src={playingSong.album.images[0].url}
                alt="cd"
                className="w-16 rounded-full mr-3 lg:block hidden"
              />
              {playingSong && (
                <div>
                  <p>{playingSong.name}</p>
                  <p className="font-semibold">
                    {" "}
                    {playingSong.artists.map((i) => i.name + ", ")}
                  </p>
                </div>
              )}
            </div>
          )}
          <div className="">
            <div className=" flex items-center justify-between lg:text-4xl text-3xl ">
              {/* <BiShuffle />
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

              <AiFillStepBackward className="rotate-180" />
              <CiRepeat /> */}
              <audio controls ref={RefPlayingSong}></audio>
            </div>
          </div>
          {/* <div className="mr-3 lg:text-3xl text-2xl ">
            <HiVolumeUp />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Footer;
