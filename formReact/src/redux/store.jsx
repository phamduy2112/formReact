import { configureStore } from '@reduxjs/toolkit'
import { inputStore } from './storeInput'


export const store = configureStore({
  reducer: {
    inputStore
  },
})
