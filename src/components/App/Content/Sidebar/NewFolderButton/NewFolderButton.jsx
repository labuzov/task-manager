import { useState } from 'react';
import getNewId from '../../../../../utils/getNewId';
import SvgSelector from '../../../../common/SvgSelector/SvgSelector';
import './NewFolderButton.scss';


function NewFolderButton(props) {
    let [isActive, setIsActive] = useState(false);
    let [title, setTitle]       = useState('');

    const addNewFolder = () => {
        props.addNewFolder(getNewId(props.folders), title);
    }

    const resetLocalState = () => {
        setIsActive(false);
        setTitle('');
    }
    
    return (
        <>
            {!isActive &&
                <button className="new-folder-btn" onClick={ () => { setIsActive(true) }}>

                    <div className="new-folder-btn__icon">
                        <SvgSelector id="add" />

                    </div>
                    <div className="new-folder-btn__text">New Folder</div>      

         
                </button>             
            }

            {isActive &&
                <div className="new-folder">
                    <input className="new-folder__input" value={title} 
                    onChange={ (e) => setTitle(e.currentTarget.value) }
                    autoFocus />
                    <div className="new-folder__btns">
                        <button className="new-folder__cancel-btn btn-type-2" 
                            onClick={ () => { resetLocalState(); }}>Cancel</button>
                        <button className="new-folder__add-btn btn-type-1"
                            onClick={ () => { addNewFolder(); resetLocalState(); }}>Add</button>
                    </div>
                </div>
            }
        </>
    )
}


export default (NewFolderButton);
