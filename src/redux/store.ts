import { configureStore } from '@reduxjs/toolkit'
import activityReducer from './slices/activity'

export const store = configureStore({
  reducer: {
    activity: activityReducer,
  },
})

// Infer types
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
