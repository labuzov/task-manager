import { connect } from 'react-redux';
import { addNewFolder } from '../../../../redux/reducers/tasks-reducer';
import { getBasicFolders, getCustomFolders, getFolders } from '../../../../redux/reducers/tasks-selectors';
import NewFolderButton from './NewFolderButton/NewFolderButton';
import SidebarItem from './SidebarItem/SidebarItem';
import './Sidebar.scss';


function Sidebar(props) {
    const basicFolders = props.basicFolders.map(({id, title}) => 
        <SidebarItem route={`/app/${id}`} svgId={id} title={title} key={id} />)

    const customFolders = props.customFolders.map(({id, title}) => 
        <SidebarItem route={`/app/${id}`} svgId="folder" title={title} key={id} custom={true} />)


    return (

        <aside className={"sidebar" + (props.sidebarIsOpen ? "" : " hidden")}>
            <div className="sidebar__inner">
                <div className="sidebar__list">
                    {basicFolders}
                </div>
                <div className="sidebar__list">
                    <div className="sidebar__subtitle">My Folders</div>
                    {customFolders}

                    <NewFolderButton folders={props.folders} addNewFolder={props.addNewFolder} />
                </div>
            </div>
        </aside>
    )
}

const mapStateToProps = (state) => {
    return {
        sidebarIsOpen: state.settings.sidebarIsOpen,
        folders: getFolders(state),
        basicFolders: getBasicFolders(state),
        customFolders: getCustomFolders(state),
    }
}

export default connect(mapStateToProps, {
    addNewFolder,
})(Sidebar) ;
