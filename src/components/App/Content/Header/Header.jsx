import { useRef } from 'react';
import { useState } from 'react';
import SvgSelector from '../../../common/SvgSelector/SvgSelector';
import SettingsButton from './Buttons/SettingsButton';
import './Header.scss';
import Settings from './Settings/Settings';


const Header = (props) => {
    let [settingsIsOpen, setSettingsIsOpen] = useState(false);

    const openSettings = () => {
        setSettingsIsOpen(!settingsIsOpen);      
    }

    const toggleSidebarMenu = () => {
        props.setSidebarIsOpen(!props.sidebarIsOpen);
    }

    // ссылка отдается SettingsButton и используется в Settings для проверки на клик
    const settingsButtonRef = useRef();

    return (
        <header className="header">
            <div className="container header__container">
                <div className="header__left">
                    <button className="header__btn menu-btn" onClick={toggleSidebarMenu}><SvgSelector id="menu" /></button>
                    <div className="header__logo">Tasker</div>
                </div>
                <div className="header__right">
                    <SettingsButton ref={settingsButtonRef} openSettings={openSettings} optionalClass={!settingsIsOpen ? 'active' : ''} />
                </div>

                <Settings ref={settingsButtonRef}
                optionalClass={settingsIsOpen ? 'active' : ''}
                theme={props.theme} setTheme={props.setTheme} logout={props.logout}
                setSettingsIsOpen={setSettingsIsOpen} />
            </div>
        </header>
    )
    
}

export default Header;
