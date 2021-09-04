import { forwardRef } from "react";
import SvgSelector from "../../../../common/SvgSelector/SvgSelector";
// import './Header.scss';



const SettingsButton = (props, ref) => {
    return (
        <button ref={ref} className={`header__btn settings-btn ${props.optionalClass}`} onClick={props.openSettings}>
            <SvgSelector id='settings'/>
        </button>
    )
}

export default forwardRef(SettingsButton);
