import { configureStore } from "@reduxjs/toolkit";
import { committeesReducer } from "./redux/committees";
import { registrationsReducer } from "./redux/registrations";



const store = configureStore({
    reducer:{
        committees:committeesReducer,
        registrations:registrationsReducer
    }
})

export default store