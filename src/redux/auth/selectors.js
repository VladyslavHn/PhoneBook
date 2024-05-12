export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectUserData = (state) => state.auth.userData;
export const selectToken = (state) => state.auth.token;
export const selectLoading = (state) => state.auth.loading;
export const selectIsError = (state) => state.auth.error;
export const selectIsRefreshing = (state) => state.auth.isRefreshing;