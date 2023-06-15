import { configureStore } from "@reduxjs/toolkit";
import repositorySlice from "./repositorySlice";

export default configureStore({
  reducer: {
    repos: repositorySlice,
  },
});
