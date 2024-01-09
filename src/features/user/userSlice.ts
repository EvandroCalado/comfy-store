import { createSlice } from '@reduxjs/toolkit';

interface UserInitialStateProps {
  user: {
    username: string;
  };
  theme: string;
}

const themes = {
  light: 'light',
  dark: 'dracula',
};

const getThemeFromLocalStorage = () => {
  const theme = localStorage.getItem('theme') || themes.light;
  document.documentElement.setAttribute('data-theme', theme);
  return theme;
};

const userInitialState: UserInitialStateProps = {
  user: { username: 'Evandro Calado' },
  theme: getThemeFromLocalStorage(),
};

const userSlice = createSlice({
  name: 'user',
  initialState: userInitialState,
  reducers: {
    loginUser: (state, action) => {
      console.log('login');
    },

    logoutUser: (state, action) => {
      console.log('logout');
    },

    toggleTheme: (state) => {
      const { dark, light } = themes;
      state.theme = state.theme === dark ? light : dark;
      document.documentElement.setAttribute('data-theme', state.theme);
      localStorage.setItem('theme', state.theme);
    },
  },
});

export const { loginUser, logoutUser, toggleTheme } = userSlice.actions;

export default userSlice.reducer;
