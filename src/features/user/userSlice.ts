import { createSlice } from '@reduxjs/toolkit';
import { destroyCookie, setCookie } from 'nookies';
import toast from 'react-hot-toast';

export interface UserProps {
  blocked: boolean;
  confirmed: boolean;
  createdAt: string;
  email: string;
  id: number;
  provider: string;
  updatedAt: string;
  username: string;
}

export interface UserInitialStateProps {
  user: UserProps | null;
  theme: string;
}

const themes = {
  light: 'light',
  dark: 'dark',
};

const getUserFromLocalStorage = (): UserInitialStateProps['user'] | null => {
  const user = localStorage.getItem('user');
  return JSON.parse(user || 'null') as UserInitialStateProps['user'];
};

const getThemeFromLocalStorage = () => {
  const theme = localStorage.getItem('theme') || themes.light;
  document.documentElement.setAttribute('data-theme', theme);
  return theme;
};

const userInitialState: UserInitialStateProps = {
  user: getUserFromLocalStorage(),
  theme: getThemeFromLocalStorage(),
};

const userSlice = createSlice({
  name: 'user',
  initialState: userInitialState,
  reducers: {
    loginUser: (state, action) => {
      const { user } = action.payload as {
        user: UserProps;
      };

      state.user = user;

      const { jwt } = action.payload as {
        jwt: string;
      };

      setCookie(null, '@token', jwt, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
        httponly: true,
        secure: true,
        sameSite: 'strict',
      });
      localStorage.setItem('user', JSON.stringify(user));
    },

    logoutUser: (state) => {
      state.user = null;
      destroyCookie(null, '@token');
      localStorage.removeItem('user');
      toast.success('Logged out successfully');
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
