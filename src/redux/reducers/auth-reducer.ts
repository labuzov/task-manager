import { authAPI } from "../../api/api";

const SET_USER_DATA = 'auth/SET_USER_DATA';

type infoType = {
    userId: number | null,
    email: string | null,
    login: string | null,
}

export type initialStateType = {
    isAuth: boolean,
    info: infoType,
}

const initialState: initialStateType = {
    isAuth: false,
    info: {
        userId: null,
        email: null,
        login: null,
    },
}

const authReducer = (state = initialState, action: any): initialStateType => {
    
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

type setAuthUserDataType = (
    userId: number | null, 
    email: string | null, 
    login: string | null, 
    isAuth: boolean
) => setAuthUserDataActionType;

type setAuthUserDataActionType = {
    type: typeof SET_USER_DATA,
    isAuth: boolean,
    info: infoType
}

export const setAuthUserData: setAuthUserDataType = (userId, email, login, isAuth): setAuthUserDataActionType => ({
    type: SET_USER_DATA,
    isAuth,
    info: {
        userId,
        email,
        login,
    },
})


export const runAuth = () => async (dispatch: any) => {
    try {
        const response = await authAPI.getAuthData();

        if (response.data.resultCode === 0) {
            let {id, email, login} = response.data.data;
            
            dispatch(setAuthUserData(id, email, login, true));
        }
    } catch {
        console.log('auth error');
    }
}

export const login = (email: string, password: string, rememberMe: boolean) => async (dispatch: any) => {
    try {
        const response = await authAPI.login(email, password, rememberMe)
    
        if (response.data.resultCode === 0) {
            dispatch(runAuth());
        }
    } catch {
        console.log('login error');
    }
}

export const logout = () => async (dispatch: any) => {
    try {
        const response = await authAPI.logout()
    
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        }
    } catch {
        console.log('logout error');

        dispatch(setAuthUserData(null, null, null, false));
    }
}

export default authReducer;