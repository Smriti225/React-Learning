import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "../features/TodoSlice"

const Store = configureStore({
    reducer:{
      todo :  TodoReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(
     { serializableCheck: false}
    ),
})

export default Store;