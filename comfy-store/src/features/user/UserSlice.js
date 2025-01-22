import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const themes = {
  autumn: "lemonade",
  luxury: "forest",
};

const getThemeFromLocalStorage = () => {
  const theme = localStorage.getItem("theme") || themes.autumn;
  document.documentElement.setAttribute("data-theme", theme);
  return theme;
};

const initialState = {
  user: { username: "John Price" },
  theme: getThemeFromLocalStorage(),
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      console.log("loginUser");
    },
    logoutUser: (state) => {
      state.user = null;
      localStorage.removeItem("user")
      toast.success("Logged out successfully!")
    },
    toggleTheme: (state) => {
      const { autumn, luxury } = themes;
      state.theme = state.theme === luxury ? autumn : luxury;
      document.documentElement.setAttribute("data-theme", state.theme);
      localStorage.setItem("theme", state.theme);
    },
  },
});

export const { loginUser, logoutUser, toggleTheme } = userSlice.actions;

export default userSlice.reducer;
