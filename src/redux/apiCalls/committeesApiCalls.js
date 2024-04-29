import axios from 'axios'
import { toast } from 'react-toastify'
import { committeesActions } from '../redux/committees'

export function getAllCommittees() {
    return async (dispatch, getState) => {
        try {

            const { data } = await axios.get('http://localhost:8000/api/v1/committees/getAllCommittees' )
            dispatch(committeesActions.getAllCommittees(data.result))
            console.log(data.result);
        } catch (error) {
            console.log(error);
        }
    }
}
export function createCommittess(t) {
    return async (dispatch, getState) => {
        try {

            const { data } = await axios.post('http://localhost:8000/api/v1/committees/createCommittees',t )
            dispatch(committeesActions.createCommittees(data.message))
            toast({
                title: "create successfully",
                status: 'success',
                duration: 9000,
                isClosable: true,
            })
        } catch (error) {
            console.log(error);
        }
    }
}
export function deleteCommittees(id) {
    return async (dispatch, getState) => {
        try {
            const { data } = await axios.delete(`http://localhost:8000/api/v1/committees/deleteCommittees/${id}`)
            dispatch(committeesActions.deleteCommittees(data.message))
            console.log(data.message);
        } catch (error) {
            console.log(error);
        }
    }
}
export function updateCommittees(id,upd) {
    return async (dispatch, getState) => {
        try {
            const { data } = await axios.put(`http://localhost:8000/api/v1/committees/updateCommittees/${id}`,upd)
            dispatch(committeesActions.updateCommittees(data))

        } catch (error) {
            console.log(error);
        }
    }
}
export function singleCommittee(id) {
    return async (dispatch, getState) => {
        try {

            const { data } = await axios.get(`http://localhost:8000/api/v1/committees/committees/${id}`)
            dispatch(committeesActions.singleCommittes(data))

        } catch (error) {
            console.log(error);
        }
    }
}
