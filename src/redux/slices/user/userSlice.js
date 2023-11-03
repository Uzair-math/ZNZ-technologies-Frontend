import { createSlice } from "@reduxjs/toolkit";
import {
  userRegisterAction,
  userLoginAction,
  userLogoutAction,
  userProfileAction,
  allUserAction,
  updateStatusUserAction,
} from "./userAction";

const initialState = {
  users: [],
  loading: false,
  error: null,
  profile: {},
  userAuth: {
    userInfo: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
    loading: false,
    error: null,
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(userRegisterAction.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(userRegisterAction.fulfilled, (state, action) => {
      state.userAuth.userInfo = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(userRegisterAction.rejected, (state, action) => {
      state.userAuth.error = action.payload;
      state.loading = false;
    });
    builder.addCase(userLoginAction.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(userLoginAction.fulfilled, (state, action) => {
      state.userAuth.userInfo = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(userLoginAction.rejected, (state, action) => {
      state.userAuth.error = action.payload;
      state.loading = false;
    });
    builder.addCase(userLogoutAction.fulfilled, (state, action) => {
      state.userAuth.userInfo = null;
      state.loading = false;
    });
    builder.addCase(userProfileAction.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(userProfileAction.fulfilled, (state, action) => {
      state.profile = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(userProfileAction.rejected, (state, action) => {
      state.profile.error = action.payload;
      state.loading = false;
    });
    builder.addCase(allUserAction.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(allUserAction.fulfilled, (state, action) => {
      state.users = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(allUserAction.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
    builder.addCase(updateStatusUserAction.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(updateStatusUserAction.fulfilled, (state, action) => {
      state.userAuth.userInfo = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(updateStatusUserAction.rejected, (state, action) => {
      state.userAuth.error = action.payload;
      state.loading = false;
    });
  },
});

const userReducer = userSlice.reducer;
export default userReducer;
