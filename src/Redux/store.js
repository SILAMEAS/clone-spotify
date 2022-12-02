import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice";
import playlistReducer from "./slice/PlaylistsSlice";

export default configureStore({
  reducer: {
    auth: authReducer,
    sportify: playlistReducer,
  },
});
