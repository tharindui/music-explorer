import { Action, configureStore } from "@reduxjs/toolkit";
import musicReducer from "../reducers/musicReducer";
import thunk, { ThunkAction } from "redux-thunk"; // Import Redux Thunk

export const store = configureStore({
  reducer: {
    music: musicReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk), // Add Redux Thunk middleware
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
