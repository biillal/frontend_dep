import {  createSlice } from "@reduxjs/toolkit";


const committeesSlice = createSlice({
    name:"categories",
    initialState:{
       committees:[],
       committeeSingle:'',
        isLoading:false,
        message:"",
        update:"",
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
        updateCommittees(state,action){
            state.update = action.payload.message
        },
        singleCommittes(state,action){
            state.committeeSingle = action.payload.committee
        }
    }
})

const committeesReducer = committeesSlice.reducer
const committeesActions = committeesSlice.actions

export { committeesActions,committeesReducer }