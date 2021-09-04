import './Task.scss';


function Task(props) {
    // const {month, day, hours, minutes} = props.date;
    // const date = new Date('2022', month, day, hours, minutes);
    // const now = new Date();

    // const time = date - now;


    return (
        <div className="task-wrapper">
            <div className="task" onClick={() => {props.toggleIsDone(props.id, true)}}>
                <div className="task__title">{props.title}</div>
                <div className="task__descr">{props.descr}</div>
            </div>
        </div>                   
    )
}


export default Task;
