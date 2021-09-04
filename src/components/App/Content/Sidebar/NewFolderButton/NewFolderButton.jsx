import { Formik } from 'formik';
import * as yup from 'yup';
import { useState } from 'react';
import getNewId from '../../../../../utils/getNewId';
import SvgSelector from '../../../../common/SvgSelector/SvgSelector';
import './NewFolderButton.scss';


function NewFolderButton(props) {
    const [isActive, setIsActive] = useState(false);
    

    const addNewFolder = (folderName) => {
        props.addNewFolder(getNewId(props.folders), folderName);

        setIsActive(false);
    }

    const validations = yup.object().shape({
        folderName: yup.string()
            .typeError('Must be a string')
            .required('Name of the folder is required')
            .max(15, 'Max length is 15 symbols'),
    })

    return (
        <>
            {!isActive &&
                <button className="new-folder-btn" onClick={() => { setIsActive(true) }}>

                    <div className="new-folder-btn__icon">
                        <SvgSelector id="add" />
                    </div>
                    <div className="new-folder-btn__text">New Folder</div>
                </button>
            }

            {isActive &&
                <Formik
                    initialValues={{
                        folderName: '',
                    }}
                    validationSchema={validations}
                    onSubmit={ (values) => addNewFolder(values.folderName) }
                >

                { ({ values, errors, handleChange, isValid, handleSubmit, dirty }) => (
                    <div className="new-folder">
                        <input className={"new-folder__input" + (errors.folderName ? ' error' : '')}
                            type="text"
                            name="folderName"
                            onChange={handleChange}
                            value={values.folderName}
                            autoFocus 
                        />
                        <div className="new-folder__btns">
                            <button className="new-folder__cancel-btn btn-type-2"
                                onClick={() => { setIsActive(false); }}>Cancel</button>
                            <button 
                                disabled={!isValid && !dirty}
                                onClick={handleSubmit}
                                type="submit"
                                className="new-folder__add-btn btn-type-1"
                                >Add</button>
                        </div>
                    </div>
                ) }
                </Formik>
            }
        </>
    )
}


export default (NewFolderButton);
