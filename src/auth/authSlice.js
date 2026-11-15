import { createSlice } from "@reduxjs/toolkit";

const initialState ={ user: null, loggedIn: false};
const authSlice = createSlice({name: "auth", initialState,
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

export const{login, register, updateProfile,logout} = authSlice.actions; 
export default authSlice.reducer;