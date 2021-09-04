import { Redirect, Route, Switch } from "react-router-dom";
import { useEffect } from "react";
import Preloader from "../common/loaders/Preloader/Preloader";
import Register from "../auth/Register/Register";
import Login from "../auth/Login/Login";
import Content from "./Content/Content";
import { setSelectedTheme } from "../../utils/theme";


const App = (props) => {

    useEffect(() => {
        props.initializeApp();
    }, []);

    useEffect(() => {
        setSelectedTheme(props.theme);
    }, [props.theme]);

    if (!props.initialized) {
        return <Preloader />
    } else if (!props.isAuth) {
        return (
            <Switch>
                <Route path="/login" render={() =>
                    <Login />
                } />

                <Route path="/register" render={() =>
                    <Register />
                } />

                <Route path="*" render={() =>
                    <Redirect to="/login" />
                } />
            </Switch>
        )
    } else {
        return <Content />
    }
}

export default App;
