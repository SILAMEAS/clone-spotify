import React from "react";

const Login = () => {
  const loginWithSportify = () => {
    const clientId = "12051ec5670e492f8ea3df23e89daf62";
    const redirectUrl = "http://localhost:3000/";
    const scope = [
      "user-read-playback-state",
      "user-modify-playback-state",
      "user-read-currently-playing",
      "playlist-read-private",
      "playlist-read-collaborative",
      "playlist-modify-private",
      "playlist-modify-public",
      "user-read-email",
      "user-read-private",
    ].join(" ");
    const Sportify_url = "https://accounts.spotify.com/authorize";
    window.location.href = `${Sportify_url}?client_id=${clientId}&redirect_uri=${redirectUrl}&response_type=token&scope=${scope}`;
  };
  return (
    <>
      <div className="flex justify-center items-center h-screen w-full">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-full font-bold text-xl "
          onClick={loginWithSportify}
        >
          Log ln Sportify
        </button>
      </div>
    </>
  );
};

export default Login;
