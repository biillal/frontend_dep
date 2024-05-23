import axios from 'axios'
import { toast } from 'react-toastify'
import { committeesActions } from '../redux/committees'
import { downloadActions } from '../redux/download'

export function getAllDownload() {
    return async (dispatch, getState) => {
        try {

            const { data } = await axios.get('https://backend-dep-ckwm.onrender.com/api/v1/download' )
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
            dispatch(downloadActions.setLoding())
            const { data } = await axios.post('https://backend-dep-ckwm.onrender.com/api/v1/download/create', post, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            }
            )
            dispatch(downloadActions.clearLoading())
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
            const { data } = await axios.delete(`https://backend-dep-ckwm.onrender.com/api/v1/download/${id}`)
            dispatch(downloadActions.deletedDownload(data.message))

        } catch (error) {
            console.log(error);
        }
    }
}
export function updateCommittees(id,upd) {
    return async (dispatch, getState) => {
        try {

            const { data } = await axios.put(`https://backend-dep-ckwm.onrender.com/api/v1/committees/updateCommittees/${id}`,upd)
            dispatch(committeesActions.updateCommittees(data))

        } catch (error) {
            console.log(error);
        }
    }
}
export function singleCommittee(id) {
    return async (dispatch, getState) => {
        try {

            const { data } = await axios.get(`https://backend-dep-ckwm.onrender.com/api/v1/committees/committees/${id}`)
            dispatch(committeesActions.singleCommittes(data))

        } catch (error) {
            console.log(error);
        }
    }
}
