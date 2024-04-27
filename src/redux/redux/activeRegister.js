import {  createSlice } from "@reduxjs/toolkit";


const activeRegister = createSlice({
    name:"registrations",
    initialState:{
       actives:"",
       message:""
    },
    reducers:{
        active(state,action){
            state.message = action.payload
        },
        desactive(state,action){
            state.message = action.payload
        },
        getActives(state,action){
            state.actives = action.payload
        },

    }
})

const activeRegisterReducer = activeRegister.reducer
const activeRegisterActions = activeRegister.actions

export { activeRegisterActions,activeRegisterReducer }