import { configureStore } from "@reduxjs/toolkit";
import createSlice from "../createslice/createSlice";

const store=configureStore({
    reducer:{

        userdata:createSlice
    }
})
export default store