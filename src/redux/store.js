import { configureStore } from "@reduxjs/toolkit";

import booksApi from "./books/booksApi";

const store = configureStore({
  reducer: {
    [booksApi.reducerPath]: booksApi.reducer,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(booksApi.middleware),
});

export default store;
