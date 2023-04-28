import { configureStore } from '@reduxjs/toolkit';
import characts from './CharterSlice';

const store = configureStore({
    reducer: {
        characts: characts,
    },
});

export default store;