import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "./cart-slice";


const store = configureStore({
    reducer: {
        card: cardSlice.reducer
    }
})

export default store ;