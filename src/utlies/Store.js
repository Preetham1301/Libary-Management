import { configureStore } from "@reduxjs/toolkit";
import BookReducer from "../utlies/LibarySlice.js";

const Store = configureStore({
    reducer: {
        books: BookReducer
    }
});

export default Store;
