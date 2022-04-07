import { configureStore } from "@reduxjs/toolkit";

import companyReducer from "./slices/companySlice";
import roleReducer from "./slices/roleSlice";

const store = configureStore({
  reducer: {
    company: companyReducer,
    role: roleReducer,
  },
});

export default store;
