import axios from 'axios'
import { committeesActions } from '../redux/committees'
import { registrationsActions } from '../redux/registrations'

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


export function fetchAllRegistration() {
    return async (dispatch, getState) => {
        try {

            const { data } = await axios.get('https://backend-dep-ckwm.onrender.com/api/v1/registrations/fetchAllRegistration')
            dispatch(registrationsActions.fetchAllRegistrations(data.result))

        } catch (error) {
            console.log(error);
        }
    }
}



export function deleteUser(id) {
    return async (dispatch, getState) => {
        try {

            const { data } = await axios.delete(`https://backend-dep-ckwm.onrender.com/api/v1/registrations/delet-user/${id}`)
            dispatch(registrationsActions.deleteUser(data.result))

        } catch (error) {
            console.log(error);
        }
    }
}


