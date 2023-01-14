import { configureStore } from "@reduxjs/toolkit";
import userReducer from "~/features/authentication/userSlice";
import videoReducer from "~/features/videos/videoSlice";
import { videoApi } from "~/services/videoApi";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    user: userReducer,
    video: videoReducer,
    [videoApi.reducerPath]: videoApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(videoApi.middleware),
    
});
setupListeners(store.dispatch);
