import { configureStore } from "@reduxjs/toolkit";
import { shazamApi } from "./services/shazamApi";
import playerReducer from "./features/playerSlice";

export const store = configureStore({
  reducer: {
    [shazamApi.reducerPath]: shazamApi.reducer,
    player: playerReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shazamApi.middleware),
});
