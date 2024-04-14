import { configureStore } from "@reduxjs/toolkit";
import { committeesReducer } from "./redux/committees";
import { registrationsReducer } from "./redux/registrations";
import { userAdminReducer } from "./redux/userAdmin";



const store = configureStore({
    reducer:{
        committees:committeesReducer,
        registrations:registrationsReducer,
        admin:userAdminReducer
    }
})

export default store