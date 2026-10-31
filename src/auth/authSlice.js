import { createSlice } from "@reduxjs/toolkit";

const initalState ={ user: null, loggedIn: false};
const authSlice = createSlice({name: "auth", initalState,
                    reducers: {
                        login: (state, action) => {
                            state.user = action.payload;
                            state.loggedIn = true;
                        },

                        register: (state, action) => {
                            state.user = action.payload;
                            state.loggedIn = true;
                        },

                        updateProfile: (state, action) => {
                            state.user = {
                                ...state.user,
                                ...action.payload
                            };
                        },

                        logout: (state) => {
                            state.user = null;
                            state.loggedIn = false;
                        }
                    }

});

export const{login, register, updateProfile,logout} = authSlice.action; 
export default authSlice.reducers;