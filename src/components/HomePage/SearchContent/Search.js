import axios from "axios";
import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import {
  setIsPlay,
  setPlayingSong,
  setSONG,
} from "../../../Redux/slice/PlaylistsSlice";

const Search = () => {
  const my_token = useSelector((state) => state.auth.access_token);
  const [song, setSong] = useState("");
  const { songs, playingSong } = useSelector((state) => state.sportify);
  const dispatch = useDispatch();

  const convertMinute = (ms) => {
    const minute = Math.floor(ms / 60000);

    const second = ((ms % 60000) / 1000).toFixed(0);
    return minute + ":" + (second < 10 ? "0" : "") + second;
  };
  const SearchSong = async (my_token, song) => {
    const response = await axios.get(`https://api.spotify.com/v1/search`, {
      headers: {
        Authorization: `Bearer ` + my_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      params: {
        q: song,
        type: "track",
        limit: 20,
      },
    });

    const data = response;
    dispatch(setSONG(data.data.tracks.items));
    console.log(songs);
  };
  const doubleClickPlaySong = (song) => {
    dispatch(setIsPlay(true));
    dispatch(setPlayingSong(song));
  };
  console.log("==================");
  console.log(playingSong);
  return (
    <div>
      <h1 className="text-2xl font-bold px-3 pt-3">Search Song</h1>
      <div className="lg:w-1/2 md:w-1/2 w-[60%] flex items-center mt-4 ml-5">
        <input
          type="text"
          value={song}
          placeholder="Search Song"
          onChange={(e) => setSong(e.target.value)}
          className="border bg-transparent px-5  lg:py-2 py-1 rounded-full w-[90%]"
        />
        <BiSearch
          className="lg:text-3xl  text-xl lg:-ml-16 md:-ml-16 w-[10%]  -ml-10 "
          onClick={() => SearchSong(my_token, song)}
        />
      </div>
      {/* <div className="mt-4">
        <TableSong />
      </div> */}
      <div className="mt-4">
        <table className="w-full ">
          {songs &&
            songs.map((song, index) => (
              <tr
                className="hover:bg-slate-700 "
                key={index}
                onClick={() => doubleClickPlaySong(song)}
              >
                <td className="flex items-center px-4 py-2">
                  <p className="mr-4 ">{index + 1}</p>
                  <img src={song.album.images[0].url} className="w-12" alt="" />
                  <div className="ml-4">
                    {/* <p
                      className={`${
                        playingSong.name === song.name && "text-green-500"
                      }`}
                    >
                      {song.name}
                    </p> */}
                    <p className="text-sm text-gray-400">
                      {song.artists.map((i) => i.name + ", ")} ({song.name})
                    </p>
                  </div>
                </td>
                <td>{song.album.release_date}</td>
                <td>{convertMinute(song.duration_ms)} mins</td>
              </tr>
            ))}
        </table>
      </div>
    </div>
  );
};

export default Search;
