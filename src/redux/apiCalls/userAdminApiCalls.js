import axios from 'axios'
import { toast } from "react-toastify";
import { userAdminActions } from "../redux/userAdmin";
//login user
export function login(user){
    return async (dispatch,getState) =>{
        try {
            dispatch(userAdminActions.setLoding())
             const {data} = await axios.post("https://backend-dep-ckwm.onrender.com/api/v1/userAdmin/login",user)
             dispatch(userAdminActions.clearLoading())
             dispatch(userAdminActions.login(data.user))
             localStorage.setItem('userAdmin',JSON.stringify(data));
        } catch (error) {
            console.log(error.response.data.message);
        }
    } 
}
export function getAllAdmin(){
    return async (dispatch,getState) =>{
        try {
             const {data} = await axios.get("https://backend-dep-ckwm.onrender.com/api/v1/userAdmin/fetchAllAdmin")
             dispatch(userAdminActions.getAllAdmin(data.admins))

        } catch (error) {
            console.log(error.response.data.message);
        }
    } 
}

//logout user
export function logoutUser(){
    return async (dispatch,getState) =>{
        dispatch(userAdminActions.logout())
        localStorage.removeItem("userAdmin")
    } 
}

//register user
export function createAdmin(user){
    return async (dispatch,getState) =>{
        try {
            dispatch(userAdminActions.setLoding())
             const {data} = await axios.post("https://backend-dep-ckwm.onrender.com/api/v1/userAdmin/create-admin",user,{
                headers:{
                    Authorization: "Bearer " + getState().admin.user.token,
                }
            })
             dispatch(userAdminActions.clearLoading())
             dispatch(userAdminActions.createAdmin(data.message))
             alert('admin added successfully')
        } catch (error) {
            alert(error.response.data.errors[0].msg);
        }
    } 
}


export function deleteAdmin({id}) {
    return async (dispatch, getState) => {
        try {
            const { data } = await axios.delete(`https://backend-dep-ckwm.onrender.com/api/v1/userAdmin/admin/${id}`)
            dispatch(userAdminActions.deleteAdmin(data))
        } catch (error) {
            console.log(error);
        }
    }
}
