import axios from "axios"
import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./userTypes"

export const fetchUserRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

export const fetchUserSuccess = users => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

export const fetchUserFailure = error => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

export const fetchUsers = () => {
    return function (dispatch) {
        dispatch(fetchUserRequest());
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then(res => {
                // console.log(res);
                const users = res.data;
                dispatch(fetchUserSuccess(users));
            })
            .catch(err => {
                dispatch(fetchUserFailure(err.message))
                // console.error(err)
            });
    }
}


