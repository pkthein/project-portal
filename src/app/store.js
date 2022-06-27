import { configureStore } from '@reduxjs/toolkit';
import counterSlice from 'src/features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counterSlice,
  },
});
