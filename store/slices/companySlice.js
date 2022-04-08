import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isNew: true,
  details: null,
};

const companySlice = createSlice({
  name: "company",
  initialState,
  reducers: {
    setNew: (state) => {
      state.isNew = true;
      state.details = null;
    },
    setReturning: (state) => {
      state.isNew = false;
      state.details = null;
    },
    updateDetails: (state, { payload }) => {
      state.details = payload;
    },
    companyReset: (state) => {
      state.isNew = true;
      state.details = null;
    },
  },
  extraReducers: (builder) => {},
});

export const { setNew, setReturning, updateDetails, companyReset } =
  companySlice.actions;

export default companySlice.reducer;
