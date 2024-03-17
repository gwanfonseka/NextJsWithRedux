import { configureStore } from '@reduxjs/toolkit'
import mealsReducer from './features/mealsSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
        meals: mealsReducer
    }
  })
}