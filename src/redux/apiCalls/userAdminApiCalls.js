import axios from 'axios'
import { toast } from "react-toastify";
import { userAdminActions } from "../redux/userAdmin";
//login user
export function login(user){
    return async (dispatch,getState) =>{
        try {
             const {data} = await axios.post("http://localhost:8000/api/v1/userAdmin/login",user)
             dispatch(userAdminActions.login(data.user))
             console.log(data);
             localStorage.setItem('userAdmin',JSON.stringify(data));
        } catch (error) {
            console.log(error.response.data.message);
        }
    } 
}
export function getAllAdmin(){
    return async (dispatch,getState) =>{
        try {
             const {data} = await axios.get("http://localhost:8000/api/v1/userAdmin/fetchAllAdmin")
             dispatch(userAdminActions.getAllAdmin(data.admins))
             console.log(data);
        } catch (error) {
            console.log(error.response.data.message);
        }
    } 
}

//logout user
export function logoutUser(){
    return async (dispatch,getState) =>{
        dispatch(userAdminActions.logout())
        localStorage.removeItem("userInfo")
    } 
}

//register user
export function createAdmin(user){
    return async (dispatch,getState) =>{
        try {
             const {data} = await axios.post("http://localhost:8000/api/v1/userAdmin/create-admin",user,{
                headers:{
                    Authorization: "Bearer " + getState().admin.user.token,
                }
            })
            console.log(data);
             dispatch(userAdminActions.createAdmin(data.message))
        } catch (error) {
            console.log(error);
        }
    } 
}

