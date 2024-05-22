import {  createSlice } from "@reduxjs/toolkit";


const userAdminSlice = createSlice({
    name:"userAdmin",
    initialState:{
        user:localStorage.getItem("userAdmin") ? JSON.parse(localStorage.getItem("userAdmin")) : null,
        isLoading:false,
        messageDeleted:"",
        users:[],
        delete:'',
        message:"",
        status:false,
        error:""
    },
    reducers:{
        createAdmin(state,action){
            state.message = action.payload
        },
        login(state,action){
            state.user = action.payload
        },
        logout(state,action){
            state.user = null
        },
        getAllAdmin(state,action){
            state.users = action.payload
        },
        deleteAdmin(state,action){
            state.delete = action.payload.message
        }

    }
})

const userAdminReducer = userAdminSlice.reducer
const userAdminActions = userAdminSlice.actions

export { userAdminActions,userAdminReducer }