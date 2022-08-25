import { configureStore } from '@reduxjs/toolkit'
import UserReducer from '../Features/User'
import ArticlesReducer from '../Features/Articles'


export const store = configureStore({
  reducer: {
    User: UserReducer,
    Articles:ArticlesReducer
  },
})

export type RootState = ReturnType<typeof store.getState> /// to get initial states
export type AppDispatch = typeof store.dispatch //// to get actions fispatch

