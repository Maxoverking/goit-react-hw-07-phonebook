import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'https://63bb362a32d17a50908a3770.mockapi.io';

export const getContacts = createAsyncThunk('fetchAll', async (_, thunkAPI) => {
  try {
    const response = await axios.get('/contacts');
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
export const addContacts = createAsyncThunk(
  'addContact',
  async (newContact, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', newContact);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const deleteContacts = createAsyncThunk(
  'deleteContact',
  async (uniqueId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${uniqueId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
