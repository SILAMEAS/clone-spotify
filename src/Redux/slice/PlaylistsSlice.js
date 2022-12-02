import { createSlice } from "@reduxjs/toolkit";

export const PlaylistSlice = createSlice({
  name: "sportify",
  initialState: {
    playlist: null,
    playingSong: null,
    songs: null,
    isPlay: false,
  },
  reducers: {
    setIsPlay: (state) => {
      state.isPlay = true;
    },
    setPlaylists: (state, action) => {
      state.playlist = action.payload;
    },
    setSONG: (state, action) => {
      state.songs = action.payload;
    },
    setPlayingSong: (state, action) => {
      state.playingSong = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setPlaylists, setPlayingSong, setSONG, setIsPlay } =
  PlaylistSlice.actions;

export default PlaylistSlice.reducer;
