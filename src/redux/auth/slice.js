import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { apiLogin, apiLogout, apiRefreshUser, apiRegister } from "./operations";
import toast from "react-hot-toast";


const authSlice = createSlice({
 name: "auth",

    initialState: {
        isLoggedIn: false,
        userData: '',
        token: null,
        loading: false,
       error: false,
        isRefreshing: false,
 
   },

   extraReducers: (builder) => {
      builder
         .addCase(apiRegister.fulfilled, (state, action) => { 
            state.loading = false;
            state.isLoggedIn = true;
             state.userData = action.payload.user;
             state.token = action.payload.token;
         }).addCase(apiRegister.rejected, (state) => {
            state.loading = false;
            state.error = true;
            toast.error('Email already exists!');
         })
         .addCase(apiLogin.fulfilled, (state, action) => { 
            state.loading = false;
            state.isLoggedIn = true;
             state.userData = action.payload.user;
            state.token = action.payload.token;
         })
         .addCase(apiLogin.rejected, (state) => {
            state.loading = false;
            state.error = true;
            toast.error('Wrong email or password!');
         })
         .addCase(apiLogout.fulfilled, (state) => { 
            state.loading = false;
            state.isLoggedIn = false;
             state.userData = null;
             state.token = null;
         })
         .addCase(apiRefreshUser.pending, state => {
        state.loading = true;
        state.error = false;
        state.isRefreshing = true;
      })
      .addCase(apiRefreshUser.fulfilled, (state, action) => {
        state.loading = false;
        state.userData = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(apiRefreshUser.rejected, state => {
        state.loading = false;
        state.error = true;
        state.isRefreshing = false;
      })
         .addMatcher(isAnyOf(apiRegister.pending, apiLogin.pending, apiLogout.pending), (state) => {
         state.loading = true;
            state.error = false;
         })
         .addMatcher(isAnyOf( apiLogout.rejected), (state) => {
         state.loading = false;
            state.error = true;
      })
 },
});



export const authReducer = authSlice.reducer;