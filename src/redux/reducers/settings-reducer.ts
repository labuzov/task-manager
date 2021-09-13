const SET_THEME             = 'settings/SET_THEME';
const SET_SIDEBAR_IS_OPEN   = 'settings/SET_SIDEBAR_IS_OPEN';
const SET_CURRENT_FOLDER    = 'settings/SET_CURRENT_FOLDER';



export type initialStateType = {
    theme: 'default' | 'dark',
    sidebarIsOpen: boolean,
    currentFolder: any,
}

const initialState: initialStateType = {
    theme: 'default',
    sidebarIsOpen: true,
    currentFolder: null,
}

const settingsReducer = (state = initialState, action: any): initialStateType => {
    
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

type setThemeActionType = {
    type: typeof SET_THEME,
    theme: 'default' | 'dark'
}

export const setTheme = (theme: 'default' | 'dark'): setThemeActionType => ({
    type: SET_THEME,
    theme,
})


type setSidebarIsOpenActionType = {
    type: typeof SET_SIDEBAR_IS_OPEN,
    isOpen: boolean,
}

export const setSidebarIsOpen = (isOpen: boolean): setSidebarIsOpenActionType => ({
    type: SET_SIDEBAR_IS_OPEN,
    isOpen,
})


type setCurrentFolderActionType = {
    type: typeof SET_CURRENT_FOLDER,
    folder: object,
}

export const setCurrentFolder = (folder: object): setCurrentFolderActionType => ({
    type: SET_CURRENT_FOLDER,
    folder,
})


export default settingsReducer;