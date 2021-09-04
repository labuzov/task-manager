import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import appReducer from "./reducers/app-reducer";
import authReducer from "./reducers/auth-reducer";
import settingsReducer from "./reducers/settings-reducer";
import taskReducer from "./reducers/tasks-reducer";


const reducers = combineReducers({
    auth: authReducer,
    app: appReducer,
    settings: settingsReducer,
    tasks: taskReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;