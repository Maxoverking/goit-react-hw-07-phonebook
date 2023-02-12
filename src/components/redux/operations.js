import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'https://63bb362a32d17a50908a3770.mockapi.io';

export const getContacts = createAsyncThunk(
  'getContacts',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const addContacts = createAsyncThunk(
  'addContacts',
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', contact);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const deleteContacts = createAsyncThunk(
  'deleteContacts',
  async (uniqueId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${uniqueId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
