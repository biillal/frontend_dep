import { configureStore } from "@reduxjs/toolkit";
import { committeesReducer } from "./redux/committees";
import { registrationsReducer } from "./redux/registrations";
import { userAdminReducer } from "./redux/userAdmin";
import { activeRegisterReducer } from "./redux/activeRegister";
import { downloadReducer } from "./redux/download";



const store = configureStore({
    reducer:{
        committees:committeesReducer,
        registrations:registrationsReducer,
        admin:userAdminReducer,
        activeRegister : activeRegisterReducer,
        download:downloadReducer
    }
})

export default store