import { cofigureStore } from "@reduxjs/toolkit";
import authReducer from "../auth/authSlice.js";

export const store = cofigureStore({ reduce: { auth: authReducer }});