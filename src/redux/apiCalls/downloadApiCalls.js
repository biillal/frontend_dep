import axios from 'axios'
import { toast } from 'react-toastify'
import { committeesActions } from '../redux/committees'
import { downloadActions } from '../redux/download'

export function getAllDownload() {
    return async (dispatch, getState) => {
        try {

            const { data } = await axios.get('http://localhost:8000/api/v1/download' )
            dispatch(downloadActions.getAllDownload(data.result))
            console.log(data.result);
        } catch (error) {
            console.log(error);
        }
    }
}
export function createDownload(post) {
    return async (dispatch, getState) => {
        try {

            const { data } = await axios.post('http://localhost:8000/api/v1/download/create', post, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            }
            )
            console.log(data.registration);
            dispatch(downloadActions.createDownload(data.message))
            alert('Created successfully')
        } catch (error) {
            console.log(error);
        }
    }
}
export function deleteDownload(id) {
    return async (dispatch, getState) => {
        try {
            const { data } = await axios.delete(`http://localhost:8000/api/v1/download/${id}`)
            dispatch(downloadActions.deletedDownload(data.message))

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
