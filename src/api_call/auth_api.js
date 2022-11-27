import axios from "axios";

const base_url = "https://api.spotify.com/v1";

export const getCurrentUser = async (access_token) => {
  const header = {
    Authorization: "Bearer" + access_token,
    Accept: "application/json",
    "Content-Type": "application/json",
  };
  console.log("baere==>" + access_token);
  const response = await axios.get(base_url + "/me", {
    header,
  });
  console.log(response.data);
};
