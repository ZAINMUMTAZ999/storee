import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const defaultValue = {
  cartItems: [],
  shipping: 500,
  tax: 0,
  numInCartItem: 0,
  orderTotals: 0,
  cartTotal: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState: defaultValue,
  reducers: {
    addItem: (state, action) => {
      const { product } = action.payload;
      
      const item = state.cartItems.find((i) => i.cartID === product.cartID);
      if (item) {
        item.amount += product.amount;
      } else {
        state.cartItems.push(product);
      }
      console.log(item)
      state.numInCartItem += product.amount;
      state.cartTotal += product.amount * product.price;

      state.tax = 0.1 * state.cartTotal;
      state.orderTotals = state.shipping + state.tax + state.cartTotal;
     localStorage.setItem('cart',JSON.stringify(state))
      toast.success("item added!");
    },
    clearItem: (state) => {},
    removeItem: (state) => {},
    editItem: (state) => {},
  },
});
export const { addItem, clearItem, removeItem, editItem } = cartSlice.actions;
export default cartSlice.reducer;
