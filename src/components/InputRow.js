import React from 'react'

function InputRow() {
    return(
        <div className="col-sm-4">
            <div className="row inputRow">
                <div className="col-sm-12">
                    <input type="text" name="Task" id="task" />
                </div>
                <div className="col-sm-4">
                    <input type="text" name="TimeDue" id="timeDue" />
                </div>
                <div className="col-sm-7">
                    <input type="text" name="Details" id="details" />
                </div>
                <div className="col-sm-1">
                    {/* <input className="checkbox" type="checkbox" value={props.isDone}/> */}
                </div>
                
            </div>
        </div>
    )
}

export default InputRow