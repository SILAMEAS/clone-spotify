import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    access_token: "",
    user: {},
  },
  reducers: {
    setToken: (state, action) => {
      state.access_token = action.payload;
    },
    setUser: (state, action) => {
      console.log(action.payload);
      state.user = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setToken, setUser } = authSlice.actions;

export default authSlice.reducer;
