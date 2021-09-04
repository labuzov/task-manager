import { authAPI } from "../../api/api";

const SET_USER_DATA = 'auth/SET_USER_DATA';


const initialState = {
    isAuth: false,
    info: {
        userId: null,
        email: null,
        login: null,
    },
}

const authReducer = (state = initialState, action) => {
    
    switch(action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                isAuth: action.isAuth,
                info: {...action.info},
            }
        }

        default:
            return state;
    }
}

export const setAuthUserData = (id, email, login, isAuth) => ({
    type: SET_USER_DATA,
    isAuth,
    info: {
        id,
        email,
        login,
    },
})


export const runAuth = () => async (dispatch) => {
    const response = await authAPI.getAuthData();

    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data;
        
        dispatch(setAuthUserData(id, email, login, true));
    }
}

export const login = (email, password, rememberMe) => async (dispatch) => {
    const response = await authAPI.login(email, password, rememberMe)

    if (response.data.resultCode === 0) {
        dispatch(runAuth());
    }
}

export const logout = () => async (dispatch) => {
    const response = await authAPI.logout()

    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
}

export default authReducer;