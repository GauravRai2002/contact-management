import { createSlice } from "@reduxjs/toolkit";
import { IType } from './../../interfaces';
var initialState:IType[] = []
const userSlice = createSlice({
    name:'user',
    initialState:initialState,
    reducers:{
        addContact(state,action){
            state.push(action.payload)
        },
        removeContact(state,action){
            state.splice(action.payload,1)
        },
        updateContact(state, action){
            state.splice(action.payload.id,1)
            state.splice(action.payload.id,0,action.payload)
        }

    }
})

export default userSlice.reducer
export const { addContact } = userSlice.actions
export const { removeContact } = userSlice.actions
export const { updateContact } = userSlice.actions