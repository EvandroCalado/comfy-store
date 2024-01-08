import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

export interface ProductProps {
  cartID: string;
  productID: number;
  image: string;
  title: string;
  price: number;
  company: string;
  productColor: string;
  amount: number;
}

export interface InitialStateProps {
  cartItems: ProductProps[];
  numItemsInCart: number;
  cartTotal: number;
  shipping: number;
  tax: number;
  orderTotal: number;
}

const initialState: InitialStateProps = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 500,
  tax: 0,
  orderTotal: 0,
};

const getCartFromLocalStorage = (): InitialStateProps => {
  const cart = localStorage.getItem('cart')!;
  return (JSON.parse(cart) as InitialStateProps) ?? initialState;
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: getCartFromLocalStorage(),
  reducers: {
    addItem: (state, action) => {
      const { product } = action.payload as {
        product: ProductProps;
      };

      const item = state.cartItems.find((i) => i.cartID === product.cartID);
      if (item) {
        item.amount += product.amount;
      } else {
        state.cartItems.push(product);
      }

      state.numItemsInCart += product.amount;
      state.cartTotal += product.amount * product.price;

      cartSlice.caseReducers.calculateTotals(state);

      toast.success('Item added to cart');
    },
    clearCart: (state) => {},
    removeItem: (state, action) => {},
    editItem: (state, action) => {},
    calculateTotals: (state) => {
      state.tax = 0.1 * state.cartTotal;
      state.orderTotal = state.cartTotal + state.shipping + state.tax;
      localStorage.setItem('cart', JSON.stringify(state));
    },
  },
});

export const { addItem, clearCart, removeItem, editItem } = cartSlice.actions;

export default cartSlice.reducer;
