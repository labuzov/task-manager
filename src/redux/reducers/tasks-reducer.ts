const ADD_NEW_TASK      = 'tasks/ADD_NEW_TASK';
const TOGGLE_IS_DONE    = 'tasks/TOGGLE_IS_DONE';
const SET_CURRENT_TASKS = 'tasks/SET_CURRENT_TASKS';
const ADD_NEW_FOLDER    = 'tasks/ADD_NEW_FOLDER';
const DELETE_FOLDER     = 'tasks/DELETE_FOLDER';

type taskType = {
    id: string,
    title: string,
    descr: string,
    isDone: boolean,
    folder: string,
}

const initialState = {
    data: [
        {
            id: '1',
            title: 'Task #1',
            descr: 'something',
            isDone: false,
            folder: '2',
        },
        {
            id: '2',
            title: 'Task #2',
            descr: 'something',
            isDone: false,
            folder: 'work',
        },
        {
            id: '3',
            title: 'Task #3',
            descr: 'something',
            isDone: false,
            folder: '2',
        },
    ], 
    currentTasks: [],
    folders: [
        {
            id: 'home',
            title: 'All Tasks',
            type: 'basic'  ,  
        },
        {
            id: 'study',
            title: 'Study',
            type: 'basic'  ,  
        },
        {
            id: 'work',
            title: 'Work',
            type: 'basic',
        },
        {
            id: '1',
            title: 'My Folder',
            type: 'custom',
        },
        {
            id: '2',
            title: 'Other',
            type: 'custom',
        },
    ]      
    
}

const taskReducer = (state = initialState, action: any) => {
    switch(action.type) {
        case ADD_NEW_TASK: {
            return {
                ...state,
                data: [...state.data, action.newTask],
            }
        } 
        
        case TOGGLE_IS_DONE: {
            return {
                ...state,
                data: state.data.map((i) => {
                    if (i.id === action.id) return {...i, isDone: action.isDone};

                    return i;
                })
            }
        }

        case SET_CURRENT_TASKS: {
            return {
                ...state,
                currentTasks: action.data,
            }
        }

        case ADD_NEW_FOLDER: {
            return {
                ...state,
                folders: [...state.folders, action.folder],
            }
        }

        case DELETE_FOLDER: {
            return {
                ...state,
                folders: state.folders.filter(i => i.id !== action.id),
                data: state.data.filter(i => i.folder !== action.id),
            }
        }

        default:
            return state;
    }
}

type addNewTaskActionType = {
    type: typeof ADD_NEW_TASK,
    newTask: taskType,
}

export const addNewTask = (id: string, title: string, descr: string, folder: string): addNewTaskActionType => ({
    type: ADD_NEW_TASK,
    newTask: {
        id,
        title,
        descr,
        isDone: false,
        folder,
    },
})

type toggleIsDoneActionType = {
    type: typeof TOGGLE_IS_DONE,
    id: string,
    isDone: boolean,
}

export const toggleIsDone = (id: string, isDone: boolean): toggleIsDoneActionType => ({
    type: TOGGLE_IS_DONE,
    id,
    isDone,
})

export const setCurrentTasks = (data: any) => ({
    type: SET_CURRENT_TASKS,
    data,
})

export const addNewFolder = (id: string, title: string) => ({
    type: ADD_NEW_FOLDER,
    folder: {
        id,
        title,
        type: 'custom',
    },
})

export const deleteFolder = (id: string) => ({
    type: DELETE_FOLDER,
    id,
})

// export const initializedSuccess = () => ({
//     type: SET_INITIALIZED,
// })

// export const initializeApp = () => (dispatch) => {
//     const authPromise = dispatch(runAuth());

//     Promise.all([authPromise]).then(() => {
//         dispatch(initializedSuccess());
//     })
// }


export default taskReducer;
