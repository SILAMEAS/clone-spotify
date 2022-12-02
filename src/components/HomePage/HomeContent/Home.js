import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsPlayFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setPlaylists } from "../../../Redux/slice/PlaylistsSlice";
const base_url = "https://api.spotify.com/v1";

const Home = () => {
  const [playlist1, setP1] = useState([
    1, 2, 3, 4, 5, 56, 56, 4, 43, 2, 3, 4, 45, 5, 5, 5,
  ]);
  const [img, setImg] = useState(
    "https://i1.sndcdn.com/artworks-000062467133-7goq9c-t500x500.jpg"
  );

  const my_token = useSelector((state) => state.auth.access_token);
  const PL = useSelector((state) => state.sportify.playlist);
  const dispatch = useDispatch();

  const PlayLists = async (access_token) => {
    const response = await axios.get(
      `https://api.spotify.com/v1/me/playlists`,
      {
        headers: {
          Authorization: `Bearer ` + access_token,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );

    const { data } = response;

    dispatch(setPlaylists(data.items));

    // console.log("------------------------------");
    // console.log(user);
  };

  useEffect(() => {
    PlayLists(my_token);
  }, []);

  return (
    <>
      <div className="overflow-auto">
        <div className="mt-4 text-lg lg:text-2xl font-bold mb-5">
          Good morning
        </div>
        <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-3  gap-4 ">
          {" "}
          {PL &&
            PL.map((p, index) => (
              <div
                key={index}
                className="group lg:h-32  bg-gray-800 overflow-hidden rounded-lg flex items-center justify-between"
              >
                <div className="flex items-center ">
                  <img
                    src={p.images[0].url}
                    alt="singer"
                    className="lg:w-32 md:w-32  w-16 object-cover"
                  />
                  <h1 className="ml-4 text-lg lg:text-xl font-semibold">
                    {p.name}
                  </h1>
                </div>

                <div className="bg-green-500 text-3xl px-3 py-3 rounded-full mr-4 shadow-md opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out hidden lg:block">
                  <BsPlayFill />
                </div>
              </div>
            ))}
        </div>
        <div className="mt-4 text-lg lg:text-xl font-bold mb-5">
          Your Top Mix
        </div>
        <div className="grid lg:grid-cols-6  md:grid-cols-4 grid-cols-2 lg:gap-6 gap:4 ">
          {playlist1.map((i) => {
            return (
              <div className="cart lg:h-64  h-70 p-4 overflow-hidden  hover:bg-gray-800 transition duration-300 ease-in-out cursor-pointer group relative flex flex-col justify-start">
                <img
                  src={img}
                  alt=""
                  className=" h-[60%] object-cover mb-2 w-full rounded-lg"
                />
                <h1 className="font-semibold text-lg">Major Lazer</h1>
                <p className="text-md text-slate-500">hello</p>

                <div className="bg-green-500 text-3xl px-3 py-3 rounded-full mr-4 shadow-md opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out absolute right-[2%] lg:top-[74%] md:top-[71%] top-[60%]">
                  <BsPlayFill />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
