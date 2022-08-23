import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../Store'
import {User} from '../typings'

interface UserInfo extends User {
    id?:any;
}
const initialState: UserInfo = {
    id:0,
    name: "",
    email: "",
    password: "",
    virified: false,
}

export const UserSlice = createSlice({
  name: 'User',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    getUserDara : (state = initialState, action: PayloadAction<UserInfo>) =>{
        state = action.payload
        console.log("state ==>  " , state)
        return state
    },
    ClearUser : (state = initialState, action: PayloadAction<UserInfo>) =>{
        state = action.payload
        return state
    },
  },
})

export const {getUserDara,ClearUser} = UserSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const UserInfo = (state: RootState) => state.User

export default UserSlice.reducer