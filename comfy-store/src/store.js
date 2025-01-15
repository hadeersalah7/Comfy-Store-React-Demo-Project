import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./features/cart/CartSlice";

export const store = configureStore({
    reducer: {
        cartState: CartSlice
    }
})