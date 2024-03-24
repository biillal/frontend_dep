import {  createSlice } from "@reduxjs/toolkit";


const registrationsSlice = createSlice({
    name:"registrations",
    initialState:{
       registrations:[],
        isLoading:false,
        messageDeleted:"",
        message:"",
        status:false,
        error:""
    },
    reducers:{
        createRegistrations(state,action){
            state.message = action.payload
        },
        fetchAllRegistrations(state,action){
            state.registrations = action.payload
        },
        deleteUser(state,action){
            state.messageDeleted = action.payload
        },
    }
})

const registrationsReducer = registrationsSlice.reducer
const registrationsActions = registrationsSlice.actions

export { registrationsActions,registrationsReducer }