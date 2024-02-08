import React from 'react'

const ToDoListData = [
    {   
        "task": "Clean Bathroom",
        "timeDue": "4:00 pm",
        "details": "Clean bathroom",
        "isDone": false
    }
]

function ToDoListItem(props) {
    console.log(props)

    return(
        <div className="container">
            <div className="row listRows">
                <div className="col-sm-12">
                    <h4>{props.task}</h4>
                </div>
                <div className="col-sm-4">
                    <p>{props.timeDue}</p>  
                </div>
                <div className="col-sm-7">
                    <p>{props.details}</p>
                </div>
                <div className="col-sm-1">
                    <input className="checkbox" type="checkbox" value={props.isDone}/>
                </div>
                
            </div>
        </div>
    )

}
function ToDoRowList() {

    let ToDoListMapArray = ToDoListData.map((ToDoListRow) => {
        return <ToDoListItem task={ToDoListRow.task} timeDue={ToDoListRow.timeDue} details={ToDoListRow.details} isDone={ToDoListRow.isDone}/>  
    });

    return(
        <div className="row justify-content-center">
            <div className="col-sm-4 listContent">
                {ToDoListMapArray}
                {InputRow}
            </div>
        </div>
    )

}

export default ToDoRowList