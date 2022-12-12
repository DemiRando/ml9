import { configureStore } from '@reduxjs/toolkit'
import LogReducer from './components/Slices/LogSlice'

export const store = configureStore({
  reducer: {
    logged: LogReducer,
  },
})