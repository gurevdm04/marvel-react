import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import getRandomInfoSliceReducer from "./getRandomInfoSlice";

export const store = configureStore({
  reducer: {
    getRandomInfo: getRandomInfoSliceReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch: () => AppDispatch = useDispatch;
