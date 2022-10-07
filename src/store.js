import { configureStore } from '@reduxjs/toolkit'
import servicesReducer from './components/servicesSlice'

export const store = configureStore({
  reducer: {
    services: servicesReducer,
  },
})

