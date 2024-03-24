import axios from 'axios'
import { committeesActions } from '../redux/committees'
import { registrationsActions } from '../redux/registrations'

export function createRegistrations(post) {
    return async (dispatch, getState) => {
        try {

            const { data } = await axios.post('http://localhost:8000/api/v1/registrations/createRegistration',post )
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

            const { data } = await axios.get('http://localhost:8000/api/v1/registrations/fetchAllRegistration')
            dispatch(registrationsActions.fetchAllRegistrations(data.result))
            console.log(data.result);
        } catch (error) {
            console.log(error);
        }
    }
}



export function deleteUser(id) {
    return async (dispatch, getState) => {
        try {

            const { data } = await axios.delete(`http://localhost:8000/api/v1/registrations/delet-user/${id}`)
            dispatch(registrationsActions.deleteUser(data.result))
            console.log(data.result);
        } catch (error) {
            console.log(error);
        }
    }
}


