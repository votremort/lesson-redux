import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPostById = createAsyncThunk(
  'posts/fetchPostById',
  async (postId) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    if (!response.ok) {
      throw new Error('Пост не найден');
    }
    const data = await response.json();
    return data;
  }
);

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    post: null,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPostById.pending, (state) => {
        state.status = 'loading';
        state.post = null;
        state.error = null;
      })
      .addCase(fetchPostById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.post = action.payload;
      })
      .addCase(fetchPostById.rejected, (state, action) => {
        state.status = 'failed';
        state.post = null;
        state.error = action.error.message;
      });
  },
});

export default postsSlice.reducer;