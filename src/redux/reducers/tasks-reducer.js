const ADD_NEW_TASK      = 'tasks/ADD_NEW_TASK';
const TOGGLE_IS_DONE    = 'tasks/TOGGLE_IS_DONE';
const SET_CURRENT_TASKS = 'tasks/SET_CURRENT_TASKS';
const ADD_NEW_FOLDER    = 'tasks/ADD_NEW_FOLDER';


const initialState = {
    data: [
        {
            id: '1',
            title: 'Task #1',
            descr: 'something',
            isDone: false,
            folder: 1,
            date: {
                month: '0',
                day: '10',
                hours: '9',
                minutes: '45'
            }
        },
        {
            id: '2',
            title: 'Task #2',
            descr: 'something',
            isDone: false,
            folder: 'work',
            date: {
                month: '0',
                day: '10',
                hours: '9',
                minutes: '45'
            }
        },
        {
            id: '3',
            title: 'Task #3',
            descr: 'something',
            isDone: false,
            folder: 2,
            date: {
                month: '0',
                day: '10',
                hours: '9',
                minutes: '45'
            }
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

const taskReducer = (state = initialState, action) => {
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

        default:
            return state;
    }
}

export const addNewTask = (id, title, descr, folder) => ({
    type: ADD_NEW_TASK,
    newTask: {
        id,
        title,
        descr,
        isDone: false,
        folder,
    },
})

export const toggleIsDone = (id, isDone) => ({
    type: TOGGLE_IS_DONE,
    id,
    isDone,
})

export const setCurrentTasks = (data) => ({
    type: SET_CURRENT_TASKS,
    data,
})

export const addNewFolder = (id, title) => ({
    type: ADD_NEW_FOLDER,
    folder: {
        id,
        title,
        type: 'custom',
    },
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
