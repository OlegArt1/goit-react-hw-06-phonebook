import { configureStore } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/lib/persistReducer";
import persistStore from "redux-persist/lib/persistStore";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import { contactsReducer } from "./contactsSlice";

const persistConfig =
{
    key: 'users',
    storage,
}
const persistedReducer = persistReducer(persistConfig, contactsReducer);

export const PersistStore = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
});  
export const persistor = persistStore(PersistStore);

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
    },
});