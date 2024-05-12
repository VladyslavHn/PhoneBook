import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const instance = axios.create({
    baseURL: 'https://connections-api.herokuapp.com/',
})

export const setToken = (token) => {
    instance.defaults.headers.common.Authorization = `Bearer ${token}`
}

export const clearToken = () => instance.defaults.headers.common.Authorization = '';

export const apiRegister = createAsyncThunk(
  'auth/register',
  async (formData, thunkAPI) => {
    try {
        const { data } = await instance.post('/users/signup', formData);
        setToken(data.token)
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const apiLogin = createAsyncThunk(
  'auth/login',
  async (formData, thunkAPI) => {
    try {
        const { data } = await instance.post('/users/login', formData);
        setToken(data.token)
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const apiRefreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const token = state.auth.token;
      setToken(token)
        const { data } = await instance.get('/users/current');
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const apiLogout = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      await instance.post('/users/logout');
      clearToken();
      return;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);


