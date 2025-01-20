import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./features/cart/CartSlice";
import UserSlice from "./features/user/UserSlice";
export const store = configureStore({
    reducer: {
        cartState: CartSlice,
        userState: UserSlice
    }
})