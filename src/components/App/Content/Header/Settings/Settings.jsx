import { forwardRef, useRef } from "react";
import { useEffect } from "react";
import { getNewTheme } from "../../../../../utils/theme";
import SvgSelector from "../../../../common/SvgSelector/SvgSelector"
import './Settings.scss';

const Settings = (props, ref) => {

    const changeTheme = () => {
        const newTheme = getNewTheme();

        props.setTheme(newTheme);
    }

    const settingsRef = useRef();

    useEffect(() => {
        const mouseClick = (e) => {
            // ref - ссылка на кнопку настроек
            if (!settingsRef.current.contains(e.target) && !ref.current.contains(e.target)) {
                props.setSettingsIsOpen(false);
            }
        }

        document.addEventListener('mousedown', mouseClick)

        return () => {
            document.removeEventListener('mousedown', mouseClick)
        }
    })

    return (
        <div ref={settingsRef} className={`settings ${props.optionalClass}`}>
            <div className="settings__inner">
                <ul className="settings__list">
                    <li className="settings__item" onClick={changeTheme}>
                        <div className="settings__icon">
                            <SvgSelector id="theme" /></div>
                            Dark Mode
                    </li>
                </ul>
                <ul className="settings__list">
                    <li className="settings__item" onClick={props.logout}>
                        <div className="settings__icon"><SvgSelector id="logout" /></div>
                        Exit
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default forwardRef(Settings);