const SET_THEME             = 'settings/SET_THEME';
const SET_SIDEBAR_IS_OPEN   = 'settings/SET_SIDEBAR_IS_OPEN';
const SET_CURRENT_FOLDER    = 'settings/SET_CURRENT_FOLDER';


const initialState = {
    theme: 'default',
    sidebarIsOpen: true,
    currentFolder: null,
}

const settingsReducer = (state = initialState, action) => {
    
    switch(action.type) {
        case SET_THEME: {
            return {
                ...state,
                theme: action.theme,
            }
        }

        case SET_SIDEBAR_IS_OPEN: {
            return {
                ...state,
                sidebarIsOpen: action.isOpen,
            }
        }

        case SET_CURRENT_FOLDER: {
            return {
                ...state,
                currentFolder: action.folder,
            }
        }

        default:
            return state;
    }
}

export const setTheme = (theme) => ({
    type: SET_THEME,
    theme,
})

export const setSidebarIsOpen = (isOpen) => ({
    type: SET_SIDEBAR_IS_OPEN,
    isOpen,
})

export const setCurrentFolder = (folder) => ({
    type: SET_CURRENT_FOLDER,
    folder,
})


export default settingsReducer;