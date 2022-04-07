import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const companySlice = createSlice({
  name: "company",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

// export const {} = companySlice.actions;

export default companySlice.reducer;
