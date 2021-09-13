import { runAuth } from "./auth-reducer";


const SET_INITIALIZED   = 'app/SET_INITIALIZED';

// type initialStateType = {
//     initialized: boolean,
// }

const initialState = {
    initialized: false,
}

export type initialStateType = typeof initialState;

const appReducer = (state = initialState, action: any): initialStateType => {
    switch(action.type) {
        case SET_INITIALIZED: {
            return {
                ...state,
                initialized: true,
            }
        }    

        default:
            return state;
    }
}

type initializedSuccessActionType = {
    type: typeof SET_INITIALIZED
}

export const initializedSuccess = (): initializedSuccessActionType => ({
    type: SET_INITIALIZED,
})

export const initializeApp = () => (dispatch: any) => {
    const authPromise = dispatch(runAuth());

    Promise.all([authPromise]).then(() => {
        dispatch(initializedSuccess());
    })
}


export default appReducer;
