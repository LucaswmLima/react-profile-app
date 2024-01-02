import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: { name: "Nayun", email: "nayun@email.com" },
    pending: null,
    error: false,
  },
  reducers: {
    updateStart: (state) =>{
      state.pending = true
    },
    updateSuccess: (state,action)=>{
      state.pending = false
      state.userInfo = action.payload
    },
    updateError:(state)=>{
      state.error = true
      state.pending = false
    }
  },
});

export const { update, updateStart, updateSuccess, updateError } = userSlice.actions;
export default userSlice.reducer;
