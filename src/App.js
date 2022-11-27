import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser } from "./api_call/auth_api";
import Login from "./components/Auth/Login";
import HomePage from "./components/HomePage/HomePage";
import { setToken } from "./Redux/slice/authSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = window.location.hash;
    const access_token = token.split("=")[1];
    dispatch(setToken(access_token));
  });
  const my_token = useSelector((state) => state.auth.access_token);

  // return <>{my_token ? <HomePage /> : <Login />}</>;
  return (
    <>
      <HomePage />{" "}
    </>
  );
}

export default App;
