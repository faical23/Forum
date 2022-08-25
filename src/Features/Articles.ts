import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../Store'
import {Articles} from '../Interfaces'

const initialState: Articles = {
    data:[]
}

export const ArticlesSlice = createSlice({
  name: 'Articles',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    getArticles : (state = initialState, action: PayloadAction<Articles>) =>{
        state = action.payload
        console.log("state ==>  " , state)
        return state
    },
    ClearArticles : (state = initialState, action: PayloadAction<Articles>) =>{
        state = action.payload
        return state
    },
  },
})

export const {getArticles,ClearArticles} = ArticlesSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const ArticlesInfo = (state: RootState) => state.Articles

export default ArticlesSlice.reducer