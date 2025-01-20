import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const defaultState = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 500,
  tax: 0,
  orderTotal: 0,
};

const getCartFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("cart")) || defaultState;
};
const cartSlice = createSlice({
  name: "cart",
  initialState: getCartFromLocalStorage(),
  reducers: {
    addItem: (state, action) => {
      const { product } = action.payload;
      console.log("product---", product, product.cartID);
      const item = state.cartItems.find(
        (i) => i.productId === product.productId
      );
      console.log("item---", state.cartItems);
      if (item) {
        item.amount += product.amount;
        console.log("inside if");
        // state.cartItems.push(product);
      } else {
        state.cartItems.push(product);
      }
      state.numItemsInCart += product.amount;
      state.cartTotal += product.price * product.amount;
      cartSlice.caseReducers.calcTotals(state);
      toast.success("Item added successfully to cart!");
    },
    clearCart: (state) => {
      localStorage.setItem("cart", JSON.stringify(defaultState));
      return defaultState;
    },
    removeItem: (state, action) => {
      const { productId } = action.payload;
      const product = state.cartItems.find((i) => i.productId === productId);
      state.cartItems = state.cartItems.filter(
        (i) => i.productId !== productId
      );

      state.numItemsInCart -= product.amount;
      state.cartTotal -= product.price * product.amount;
      cartSlice.caseReducers.calcTotals(state);
      toast.error("Item removed from cart");
    },

    editItem: (state, action) => {
      const { productId, amount } = action.payload;
      const item = state.cartItems.find((i) => i.productId === productId);
      state.numItemsInCart += amount - item.amount;
      state.cartTotal += item.price * (amount - item.amount);
      item.amount = amount;
      cartSlice.caseReducers.calcTotals(state);
      toast.success("Cart Updated!");
    },
    calcTotals: (state) => {
      state.tax = 0.1 * state.cartTotal;
      state.orderTotal = state.cartTotal + state.shipping + state.tax;
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export const { addItem, clearCart, removeItem, editItem } = cartSlice.actions;

export default cartSlice.reducer;
