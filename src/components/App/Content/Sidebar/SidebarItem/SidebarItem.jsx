import { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { deleteFolder } from '../../../../../redux/reducers/tasks-reducer';
import SvgSelector from '../../../../common/SvgSelector/SvgSelector';
import './SidebarItem.scss';


const OptionsItem = (props) => {
    return (
        <div className="options-list__item" onClick={props.fn}>
            <div className="options-list__icon">
                <SvgSelector id={props.svg} />
            </div>
            {props.title}
        </div>
    )
}

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

        document.addEventListener('mousedown', mouseClick);

        return () => {
            document.removeEventListener('mousedown', mouseClick);
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
                        {/* <OptionsItem title="Edit" svg="edit" /> */}
                        <OptionsItem title="Delete" svg="delete" fn={() => props.deleteFolder(props.id)} />
                    </div>
                </div>
            }
        </div>
    )
}


export default connect(null, {deleteFolder})(SidebarItem);
