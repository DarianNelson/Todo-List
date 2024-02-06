import React from 'react'

const ToDoListData = [
    {   
        "task": "Clean Bathroom",
        "timeDue": "4:00 pm",
        "details": "Clean bathroom",
        "isDone": false
    },
    {
        "task": "Clean Bedroom",
        "timeDue": "5:00 pm",
        "details": "Clean my bedroom",
        "isDone": false
    },
    {
        "task": "Fold Laundry",
        "timeDue": "5:30 pm",
        "details": "Fold all laundry",
        "isDone": false
    },
    {
        "task": "Cook Dinner",
        "timeDue": "7:00 pm",
        "details": "Cook dinner",
        "isDone": false
    },
    {
        "task": "Feed the Shib",
        "timeDue": "7:30 pm",
        "details": "Feed and water Fynn",
        "isDone": false
    },
    {
        "task": "Water Plants",
        "timeDue": "7:35 pm",
        "details": "Plants need watered",
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
            </div>
        </div>
    )

}

export default ToDoRowList