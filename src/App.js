import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Login from "./components/Auth/Login";
import HomePage from "./components/HomePage/HomePage";
import { setToken, setUser } from "./Redux/slice/authSlice";
import Cookies from "cookiesjs";
const base_url = "https://api.spotify.com/v1";

function App() {
  const dispatch = useDispatch();
  const x = `${process.env.REACT_APP_URL}`;
  console.log(x);

  useEffect(() => {
    const token = window.location.hash;
    const access_token = token.split("=")[1];
    console.log(access_token);
    dispatch(setToken(access_token));
  });
  const my_token = useSelector((state) => state.auth.access_token);
  // const user = useSelector((state) => state.auth.user);

  const getCurrentUser = async (access_token) => {
    const response = await axios.get(`https://api.spotify.com/v1/me`, {
      headers: {
        Authorization: `Bearer ` + access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    const { data } = response;

    dispatch(setUser(data));
    // console.log("------------------------------");
    // console.log(user);
  };
  useEffect(() => {
    getCurrentUser(my_token);
  }, [my_token]);

  return <>{my_token ? <HomePage /> : <Login />}</>;
}

export default App;
