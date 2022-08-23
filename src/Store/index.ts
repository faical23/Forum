import { configureStore } from '@reduxjs/toolkit'
import UserReducer from '../Features/User'

export const store = configureStore({
  reducer: {
    User: UserReducer,
  },
})

export type RootState = ReturnType<typeof store.getState> /// to get initial states
export type AppDispatch = typeof store.dispatch //// to get actions fispatch

