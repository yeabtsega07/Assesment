import { configureStore } from "@reduxjs/toolkit";
import { hospitalsAPI } from "./slice/hospitalAPI";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    [hospitalsAPI.reducerPath]: hospitalsAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(hospitalsAPI.middleware),
});

setupListeners(store.dispatch);
