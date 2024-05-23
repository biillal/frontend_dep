import {  createSlice } from "@reduxjs/toolkit";


const downloadSlice = createSlice({
    name:"categories",
    initialState:{
       downloads:[],
        loading:false,
        message:"",
        update:"",
        status:false,
        error:""
    },
    reducers:{
        getAllDownload(state,action){
            state.downloads = action.payload
        },
        setLoding(state, action) {
            state.loading = true
        },
        clearLoading(state, action) {
            state.loading = false
        }, 
        createDownload(state,action){
            state.message = action.payload
        },
        deletedDownload(state,action){
            state.message = action.payload
        },
        
    }
})

const downloadReducer = downloadSlice.reducer
const downloadActions = downloadSlice.actions

export { downloadActions,downloadReducer }