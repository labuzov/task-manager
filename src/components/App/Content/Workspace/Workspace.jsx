import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams, Redirect } from 'react-router-dom';
import { compose } from 'redux';
import { setCurrentFolder } from '../../../../redux/reducers/settings-reducer';
import { addNewTask, setCurrentTasks, toggleIsDone } from '../../../../redux/reducers/tasks-reducer';
import { getFolders } from '../../../../redux/reducers/tasks-selectors';
import Task from './Task/Task';
import TaskCreator from './TaskCreator/TaskCreator';
import './Workspace.scss';


function Workspace(props) {
    const { folderId } = useParams();


    const changeCurrentFolder = (folder) => {
        document.title = folder.title;

        props.setCurrentFolder(folder);
        
        const taskFilter = props.tasksData.filter(i =>
            (!i.isDone && (i.folder == folderId)) || (!i.isDone && folderId === 'home')
        );

        props.setCurrentTasks(taskFilter);
    }
    
    useEffect(() => { 

        const currentFolder = props.folders.find(i => i.id == folderId);
        
        if (currentFolder) {
            changeCurrentFolder(currentFolder);
        } else {
            props.setCurrentFolder(null);
        }
        
    }, [folderId, props.tasksData])


    if (!props.currentFolder) return <Redirect to="home" />

    const taskList = props.currentTasks.map(i => <Task id={i.id} title={i.title} descr={i.descr} key={i.id}
        toggleIsDone={props.toggleIsDone} />)
    
    return (
        <section className={"workspace" + (props.sidebarIsOpen ? "" : " full-width")}>
            <div className="workspace__container">
                <div className="tasks">
                    <div className="tasks__header">
                        <h2 className="tasks__title">{props.currentFolder.title}</h2>
                        <button className="tasks__sort-btn">Sort</button>
                    </div>
                    <div className="tasks__content">
                        {taskList}

                        <TaskCreator addNewTask={props.addNewTask} currentFolder={props.currentFolder} tasksData={props.tasksData} />
                    </div>
                </div>
            </div>
        </section>
    )
}



const mapStateToProps = (state) => {
    return {
        tasksData: state.tasks.data,
        currentTasks: state.tasks.currentTasks,
        sidebarIsOpen: state.settings.sidebarIsOpen,
        currentFolder: state.settings.currentFolder,
        folders: getFolders(state),
    }
}



export default compose(
    connect(mapStateToProps, {
        setCurrentTasks, setCurrentFolder, toggleIsDone,
        addNewTask,
    }),
)(Workspace);
