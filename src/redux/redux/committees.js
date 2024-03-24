import {  createSlice } from "@reduxjs/toolkit";


const committeesSlice = createSlice({
    name:"categories",
    initialState:{
       committees:[],
        isLoading:false,
        message:"",
        status:false,
        error:""
    },
    reducers:{
        getAllCommittees(state,action){
            state.committees = action.payload
        },
        createCommittees(state,action){
            state.message = action.payload
        },
        deleteCommittees(state,action){
            state.message = action.payload
        },
    }
})

const committeesReducer = committeesSlice.reducer
const committeesActions = committeesSlice.actions

export { committeesActions,committeesReducer }