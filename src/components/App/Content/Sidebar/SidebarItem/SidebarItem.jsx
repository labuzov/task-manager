import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import SvgSelector from '../../../../common/SvgSelector/SvgSelector';
import './SidebarItem.scss';


function SidebarItem(props) {
    let [menuIsOpen, setMenuIsOpen] = useState(false);

    return (
        <NavLink exact to={props.route} className={"sidebar-item" + (props.optionalClass ? ` ${props.optionalClass}` : '')}>
            <div className="sidebar-item__icon">
                <SvgSelector id={props.svgId} />
            </div>
            <div className="sidebar-item__text">
                {props.title}
            </div>

            {props.custom &&
                <div className="options">
                    <button className="options__icon">
                        <SvgSelector id='dots' />

                        {/* <div className="options__list">list</div> */}
                    </button>
                </div>
            }
        </NavLink>
    )
}


export default SidebarItem;
