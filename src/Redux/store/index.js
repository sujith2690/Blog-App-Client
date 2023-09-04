
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import  userSlice from '../Features/userSlice.js';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
};
const reducer = combineReducers({
    user: userSlice,
})
const persistedReducer = persistReducer(persistConfig, reducer);
const store = configureStore({
    reducer: persistedReducer
});
const persister = persistStore(store);
export { store, persister };

