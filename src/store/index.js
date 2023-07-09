import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import main from "./main";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, main);

// eslint-disable-next-line import/no-anonymous-default-export
const store = configureStore({
  reducer: persistedReducer,
});
let persistor = persistStore(store);

export { store, persistor };
