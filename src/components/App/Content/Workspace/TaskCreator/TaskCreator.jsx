import { Formik } from 'formik';
import * as yup from 'yup';
import { useState } from 'react';
import getNewId from '../../../../../utils/getNewId';
import SvgSelector from '../../../../common/SvgSelector/SvgSelector';
import './TaskCreator.scss';


function TaskCreator(props) {
    let [isActive, setIsActive] = useState(false);


    const addNewTask = (title, text) => {
        props.addNewTask(getNewId(props.tasksData), title, text, props.currentFolder.id); 
    }


    const validations = yup.object().shape({
        title: yup.string()
            .typeError('Must be a string')
            .required('Title is required')
            .max(20, 'Max length is 20 symbols'),
        text: yup.string()
            .typeError('Must be a string')
            .required('Description is required')
            .max(100, 'Max length is 100 symbols'),
    })

    return (
        <div className="task-wrapper">
            <div className="task-creator">
                {!isActive &&
                    <div className="inactive" onClick={() => { setIsActive(!isActive) }}>
                        <SvgSelector id="add" />
                    </div>          
                }
                {isActive && 
                    <Formik
                        initialValues={{
                            title: '',
                            text: '',
                        }}
                        validationSchema={validations}
                        onSubmit={ (values) => {
                            setIsActive(false); 
                            
                            addNewTask(values.title, values.text);
                        }}
                    >
                        { ({ values, errors, handleChange, isValid, handleSubmit, dirty }) => (
                            <form className="active-task-creator">
                                <input className="active-task-creator__title task__title" 
                                    name="title"
                                    placeholder="Title"
                                    onChange={handleChange}
                                    value={values.title} 
                                    autoFocus />
                                <textarea className="active-task-creator__descr task__descr" 
                                    name="text"
                                    placeholder="Description"
                                    value={values.text} 
                                    onChange={handleChange} />
                                <div className="active-task-creator__bottom">
                                    <button className="active-task-creator__cancel-btn btn-type-2"
                                        onClick={() => { setIsActive(false); }}>Cancel</button>
                                    <button className="active-task-creator__add-btn btn-type-1"
                                        disabled={!isValid && !dirty}
                                        type="submit"
                                        onClick={handleSubmit}>Add</button>
                                </div>
                            </form>    
                        ) }
                    </Formik>
                }
            </div>
        </div>
    )
}


export default TaskCreator;
