import { Store } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import { redirect } from 'react-router-dom';
import { RootState } from '../../store';

export const checkoutLoader = (store: Store) => () => {
  const user = (store.getState() as RootState).userState.user;

  if (!user) {
    toast.error('You must logged in to checkout');
    return redirect('/login');
  }
  return null;
};
