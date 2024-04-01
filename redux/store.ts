import { configureStore } from "@reduxjs/toolkit";
import { hospitalsAPI } from "./slice/hospitalAPI";
import { setupListeners } from "@reduxjs/toolkit/query";
import { useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    [hospitalsAPI.reducerPath]: hospitalsAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(hospitalsAPI.middleware),
});

setupListeners(store.dispatch);
export type RootStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector = useSelector;