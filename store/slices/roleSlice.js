import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  roles: null,
};

const roleSlice = createSlice({
  name: "company",
  initialState,
  reducers: {
    updateRoles: (state, { payload }) => {
      state.roles = payload;
    },
    rolesReset: (state) => {
      state.roles = null;
    },
  },
  extraReducers: (builder) => {},
});

export const { updateRoles, rolesReset } = roleSlice.actions;

export default roleSlice.reducer;
