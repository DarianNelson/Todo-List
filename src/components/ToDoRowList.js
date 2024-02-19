import React from 'react'
import InputRow from './InputRow'

//FUNCTION FOR TO DO LIST ROW TEMPLATE
function ToDoListItem(item) {
    
    //STATE TO TRACK WHETHER THE CHECKBOX IS CLICKED
    const [isClicked, setIsClicked] = React.useState(false)

    function setBoolean() {
        setIsClicked(prevIsClicked => !prevIsClicked)
    }

    return(
        <div className="container">
            <div className="row listRows">

                {/* TITLE */}
                <div className="col-sm-12">
                    {isClicked ? <s><h4>{item.title}</h4></s> : <h4>{item.title}</h4>}
                </div>

                {/* TIME DUE */}
                <div className="col-sm-4">
                    {isClicked ? <s><p>{item.timeDue}</p> </s> : <p>{item.timeDue}</p>}
                </div>

                {/* DESCRIPTION */}
                <div className="col-sm-7">
                    {isClicked ? <s><p>{item.details}</p> </s> : <p>{item.details}</p>}
                </div>

                {/* COMPLETION CHECKBOX */}
                <div className="col-sm-1">
                    <input 
                    className="checkbox" 
                    type="checkbox" 
                    // value={item.isDone}
                    checked={isClicked}
                    onClick={setBoolean}
                    />
                </div>
            </div>
        </div>
    )
}

function ToDoRowList(inputItem) {
    console.log(inputItem)
    const ToDoListMapArray = inputItem.taskData.map((item) => {
        return <ToDoListItem 
        title={item.title} 
        timeDue={item.timeDue} 
        details={item.desc} 
        isDone={item.isDone}
        />  
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