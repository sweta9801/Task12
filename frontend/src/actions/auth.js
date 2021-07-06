import axios from 'axios';
import { setAlert } from './alert';
import {
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    // CLIENT_DETAILS_SUCCESS,
    // CLIENT_DETAILS_FAIL,



} from './types';

export const login = (email, password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ email, password });
    console.log("host ==>>",process.env.REACT_APP_API_URL)
    try {
        const res = await axios.post(`http://127.0.0.1:8000/api/token/`, body, config);

        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data,
            credentials: 'include'
        });

        dispatch(setAlert('Authenticated successfully', 'success'));
    } catch (err) {
        dispatch({
            type: LOGIN_FAIL
        });

        dispatch(setAlert('Error Authenticating', 'error'));
    }
};

export const signup = ({ name, email, password, password2 }) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ name, email, password, password2 }); 

    try {
        const res = await axios.post(`http://127.0.0.1:8000/api/api/signup`, body, config);

        dispatch({
            type: SIGNUP_SUCCESS,
            payload: res.data
        });

        dispatch(login(email, password));
    } catch (err) {
        dispatch({
            type: SIGNUP_FAIL
        });

        dispatch(setAlert('Error Authenticating', 'error'));
    }
};


// export const client_details = ({ Address, Contact, Email, Plans, Status }) => async dispatch => {
//     const config = {
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     }

//     const body = JSON.stringify({ Address, Contact, Email, Plans, Status }); 

//     try {
//         const res = await axios.post(`http://127.0.0.1:8000/api/api/client_details`, body, config);

//         dispatch({
//             type: CLIENT_DETAILS_SUCCESS,
//             payload: res.data
//         });

//         dispatch(client_details(Address, Contact, Email, Plans, Status));
//     } catch (err) {
//         dispatch({
//             type: CLIENT_DETAILS_FAIL
//         });

//         dispatch(setAlert('Error Authenticating', 'error'));
//     }
// };

export const logout = () => dispatch => {
    dispatch(setAlert('logout successful.', 'success'));
    dispatch({ type: LOGOUT });
}
