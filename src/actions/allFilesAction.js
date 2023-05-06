import axios from 'axios';
export const GET_ALL_FILES_REQUEST = "GET_ALL_FILES_REQUEST";
export const GET_ALL_FILES_SUCCESS = "GET_ALL_FILES_SUCCESS";
export const GET_ALL_FILES_FAILURE = "GET_ALL_FILES_FAILURE";

// Action Creator
const fetchUsersRequest = () => {
    return {
        type: GET_ALL_FILES_REQUEST
    }
}

const fetchUsersSuccess = (files) => {
    return {
        type: GET_ALL_FILES_SUCCESS,
        payload: files
    }
}

const fetchUsersFailure = (error) => {
    return {
        type: GET_ALL_FILES_FAILURE,
        payload: error
    }
}

// Async Action Creator
export const fetchAllFiles = () => {
    return (dispatch) => {
        dispatch(fetchUsersRequest())
        axios.get('/orders')
            .then(response => {
                const users = response.data
                console.log(response.data);
                dispatch(fetchUsersSuccess(users))
            })
            .catch(error => {
                const errorMessage = error.message
                console.log(error.message);
                dispatch(fetchUsersFailure(errorMessage))
            })
    }
}