import { connect } from 'react-redux';
import { compose } from 'redux';
import { logout } from '../../../../redux/reducers/auth-reducer';
import { setSidebarIsOpen, setTheme } from '../../../../redux/reducers/settings-reducer';

import Header from './Header';

   
const mapStateToProps = (state) => {
    return {
        theme: state.settings.theme,
        sidebarIsOpen: state.settings.sidebarIsOpen,
    }
}



export default compose(
    connect(mapStateToProps, {
        logout, setTheme, setSidebarIsOpen,
    })
)(Header);

