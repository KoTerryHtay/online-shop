import { cartItem, PowerBank } from "@/interfaces";
import { createSlice } from "@reduxjs/toolkit";

const initialState: { cart: cartItem[] } = {
  cart: [
    // {
    //   id: "sample_01",
    //   name: "sample",
    //   description: "sample description",
    //   price: 1000,
    //   images: [
    //     "https://www.remaxbangladesh.com/image/cache/catalog/A%202020%20Folder/power%20bank/2020/REMAX%20RPP-96/7c4a160d7e672bb5b58ffbc88b0733d9-1100x1100.jpg",
    //   ],
    //   quantity: 1,
    //   totalPrice: 1000,
    //   category: "cable",
    // },
  ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart(state, action: { payload: cartItem }) {
      state.cart.push(action.payload);
    },
    removeCart(state, action: { payload: string }) {
      const price = state.cart.find(
        (cart) => cart.id === action.payload
      )!.price;
      state.cart = state.cart.filter((cart) => cart.id !== action.payload);
    },
    increaseQuantity(state, action: { payload: string }) {
      const cart = state.cart.find((cart) => cart.id === action.payload);
      if (!cart) return;
      cart.quantity++;
      cart.totalPrice = cart.price * cart.quantity;
    },
    decreaseQuantity(state, action: { payload: string }) {
      const cart = state.cart.find((cart) => cart.id === action.payload);
      if (!cart) return;
      cart.quantity--;
      cart.totalPrice = cart.price * cart.quantity;

      if (cart.quantity === 0) cartSlice.caseReducers.removeCart(state, action);
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addCart,
  removeCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;

export default cartSlice;
