import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json()
    return data;
  }
);

const usersSlice = createSlice({
  name: 'users',
  initialState:{
    list:[],
    status: 'idle',
    error: null,
  },
  reducers: {
    addUser: (state, action) => {
      state.list.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.list = [...state.list, ...action.payload]
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { addUser } = usersSlice.actions;
export default usersSlice.reducer;
