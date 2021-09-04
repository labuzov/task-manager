import { useState } from 'react';
import getNewId from '../../../../../utils/getNewId';
import SvgSelector from '../../../../common/SvgSelector/SvgSelector';
import './TaskCreator.scss';


function TaskCreator(props) {
    let [isActive, setIsActive] = useState(false);
    let [title, editTitle] = useState('');
    let [descr, editDescr] = useState('');



    const addNewTask = () => {
        props.addNewTask(getNewId(props.tasksData), title, descr, props.currentFolder.id); 
    }

    const resetLocalState = () => {
        setIsActive(false);
        editTitle('');
        editDescr('');
    }

    return (
        <div className="task-wrapper">
            <div className="task-creator">
                {!isActive &&
                    <div className="inactive" onClick={() => { setIsActive(!isActive) }}>
                        <SvgSelector id="add" />
                    </div>          
                }
                {isActive && 
                    <div className="active-task-creator">
                        <input className="active-task-creator__title task__title" placeholder="Title"
                        value={title} onChange={(e) => { editTitle(e.currentTarget.value); }} />
                        <textarea className="active-task-creator__descr task__descr" placeholder="Description"
                        value={descr} onChange={(e) => { editDescr(e.currentTarget.value); }} />
                        <div className="active-task-creator__bottom">
                            <button className="active-task-creator__cancel-btn btn-type-2"
                            onClick={() => { resetLocalState(); }}>Cancel</button>
                            <button className="active-task-creator__add-btn btn-type-1"
                            onClick={() => { addNewTask(); resetLocalState(); }}>Add</button>
                        </div>
                    </div>    
                }
            </div>
        </div>
    )
}


export default TaskCreator;
