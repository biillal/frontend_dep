import axios from 'axios'
import { committeesActions } from '../redux/committees'
import { registrationsActions } from '../redux/registrations'
import { activeRegisterActions } from '../redux/activeRegister'

export function createRegistrations(post) {
    return async (dispatch, getState) => {
        try {

            const { data } = await axios.post('https://backend-dep-ckwm.onrender.com/api/v1/registrations/createRegistration', post, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            }
            )
            console.log(data.registration);
            dispatch(registrationsActions.createRegistrations(data.result))
            alert('register successfully')
        } catch (error) {
            console.log(error);
        }
    }
}


export function getActive() {
    return async (dispatch, getState) => {
        try {

            const { data } = await axios.get('https://backend-dep-ckwm.onrender.com/api/v1/active')
            dispatch(activeRegisterActions.getActives(data))
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }
}

export function activeReg() {
    return async (dispatch, getState) => {
        try {

            const { data } = await axios.put('https://backend-dep-ckwm.onrender.com/api/v1/active/active')
            dispatch(activeRegisterActions.active(data))
            console.log(data.message);
        } catch (error) {
            console.log(error);
        }
    }
}

export function desactiveReg() {
    return async (dispatch, getState) => {
        try {

            const { data } = await axios.put('https://backend-dep-ckwm.onrender.com/api/v1/active/desactive')
            dispatch(activeRegisterActions.desactive(data))
            console.log(data);
            alert(data.message)
        } catch (error) {
            console.log(error);
        }
    }
}






