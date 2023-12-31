import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import baseURL from "../../baseURL";
import { createAxiosConfig } from "../token";

export const userRegisterAction = createAsyncThunk(
  "userRegister",
  async (values, { rejectWithValue }) => {
    try {
      const { displayName, email, password, photoURL } = values;
      const response = await axios.post(`${baseURL}/userRegister`, {
        displayName,
        email,
        password,
        photoURL,
      });
      console.log("🚀 ~ file: userAction.js:12 ~ response:", response);
      localStorage.setItem("userInfo", JSON.stringify(response.data));
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const userLoginAction = createAsyncThunk(
  "/userLogin",
  async (values, { rejectWithValue }) => {
    try {
      const { email, password } = values;
      const response = await axios.post(`${baseURL}/userLogin`, {
        email,
        password,
      });
      localStorage.setItem("userInfo", JSON.stringify(response.data));
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const userLogoutAction = createAsyncThunk(
  "/logOut", async () => {
  localStorage.removeItem("userInfo");
  return null;
});

export const userProfileAction = createAsyncThunk(
  "/userProfile",
  async (payload, { rejectWithValue, getState }) => {
    try {
      const token = getState().user?.userAuth?.userInfo?.token;
      const userId = getState().user?.userAuth?.userInfo?.data?._id;
      const config = createAxiosConfig(token);
      const { data } = await axios.get(
        `${baseURL}/userProfile/${userId}`,
        config
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const allUserAction = createAsyncThunk(
  "/AllUsers",
  async (_, { rejectWithValue, getState }) => {
    try {
      const token = getState().user?.userAuth?.userInfo?.token;
      const config = createAxiosConfig(token);
      const { data } = await axios.get(`${baseURL}/getAllUser`, config);
      console.log("🚀 ~ file: userAction.js:72 ~ data:", data);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateStatusUserAction = createAsyncThunk(
  "updateStatusUser",
  async ({ id, status }, { rejectWithValue, getState }) => {
    try {
      const token = getState().user?.userAuth?.userInfo?.token;
      const config = createAxiosConfig(token);
      const response = await axios.patch(
        `${baseURL}/updateUserStatus/${id}`,
        { status },
        config
      );
      console.log("🚀 ~ file: productAction.js:108 ~ response:", response);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
