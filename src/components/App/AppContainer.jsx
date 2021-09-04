import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { initializeApp } from '../../redux/reducers/app-reducer';
import App from "./App";

   
const mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized,
        isAuth: state.auth.isAuth,
        theme: state.settings.theme,
    }
}


export default compose(
    withRouter,
    connect(mapStateToProps, {
        initializeApp,
    })
)(App);

