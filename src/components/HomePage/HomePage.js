import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Library from "../LibraryContent/Library";
import Footer from "./Footer/Footer";
import Home from "./HomeContent/Home";

import Navbar from "./Navbar";
import Search from "./SearchContent/Search";
import Sidebar from "./Sidebar";
//Size Width Window
function getWindowWidth() {
  const innerWidth = window.innerWidth;
  return innerWidth;
}

const HomePage = () => {
  const { isPlay } = useSelector((state) => state.sportify);
  const [width, setWidth] = useState(getWindowWidth());
  useEffect(() => {
    function handleWindowResize() {
      setWidth(getWindowWidth());
    }
    window.addEventListener("resize", handleWindowResize);
    console.log(width);
    if (width < 1024) {
      setOpenSideBar(false);
    } else {
      setOpenSideBar(true);
    }
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [width]);
  console.log(width);
  const [openSideBar, setOpenSideBar] = useState(true);
  return (
    <div className="h-screen bg-black text-white flex flex-col overflow-y-hidden justify-between">
      <div
        className={`h-full flex max-w-full gap-2 rounded-lg w-full overflow-hidden ${
          isPlay && "mb-20"
        }  `}
      >
        <Sidebar openSideBar={openSideBar} setOpenSideBar={setOpenSideBar} />
        <div className="w-full">
          <Navbar openSideBar={openSideBar} setOpenSideBar={setOpenSideBar} />
          <div className="overflow-auto h-[80vh]">
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/search" element={<Search />} />
              <Route path="/library" element={<Library />} />
            </Routes>
          </div>

          {isPlay && <Footer />}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
