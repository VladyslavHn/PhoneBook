import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { apiLogin, apiLogout, apiRefreshUser, apiRegister } from "./operations";


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
         })
         .addCase(apiLogin.fulfilled, (state, action) => { 
            state.loading = false;
            state.isLoggedIn = true;
             state.userData = action.payload.user;
            state.token = action.payload.token;
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
         .addMatcher(isAnyOf(apiRegister.rejected, apiLogin.rejected, apiLogout.rejected), (state) => {
         state.loading = false;
            state.error = true;
      })
 },
});



export const authReducer = authSlice.reducer;