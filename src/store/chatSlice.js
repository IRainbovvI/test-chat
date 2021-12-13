import { createSlice } from '@reduxjs/toolkit';

export const chatSlice = createSlice({
  name: 'chat',
  initialState: [],
  reducers: {
    postMess: (state, action) => {
      state.push(action.payload);
    },
    deleteMess: (state, action) => {
      console.log(action.payload);
      state.splice(
        state.findIndex((item) => item === action.payload),
        1
      );
      // state.filter((item) => item !== action.payload);
    }
  }
});

export const { postMess, deleteMess } = chatSlice.actions;

export default chatSlice.reducer;
