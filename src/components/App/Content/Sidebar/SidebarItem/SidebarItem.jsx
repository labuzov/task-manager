import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import SvgSelector from '../../../../common/SvgSelector/SvgSelector';
import './SidebarItem.scss';


const SidebarItem = (props) => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const onOptionsClick = (e) => {
        e.preventDefault();

        setMenuIsOpen(!menuIsOpen);
    }

    const optionsRef = useRef();

    useEffect(() => {
        const mouseClick = (e) => {
            if (optionsRef.current && !optionsRef.current.contains(e.target)) {
                setMenuIsOpen(false);
            }
        }

        document.addEventListener('mousedown', mouseClick)

        return () => {
            document.removeEventListener('mousedown', mouseClick)
        }
    })

    return (
        <div className="sidebar-item">
            <NavLink exact to={props.route} className={"sidebar-item__link" + (props.optionalClass ? ` ${props.optionalClass}` : '')}>
                <div className="sidebar-item__icon">
                    <SvgSelector id={props.svgId} />
                </div>
                <div className="sidebar-item__text">
                    {props.title}
                </div>

                {props.custom &&
                    <div className="options" onClick={onOptionsClick}>
                        <button className="options__icon" >
                            <SvgSelector id='dots' />
                        </button>
                    </div>
                }

            </NavLink>

            {menuIsOpen && 
                <div className="sidebar-item__list options-list" ref={optionsRef}>
                    <div className="options-list__inner">
                        <div className="options-list__item">
                            <div className="options-list__icon">
                                <SvgSelector id="edit" />
                            </div>
                            Edit
                        </div>
                        <div className="options-list__item">
                            <div className="options-list__icon">
                                <SvgSelector id="delete" />
                            </div>
                            Delete
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}


export default SidebarItem;
