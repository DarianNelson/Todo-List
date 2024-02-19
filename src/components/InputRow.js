import React from 'react'
import ToDoRowList from './ToDoRowList'

function InputRow() {

    //STATE TO SAVE FORM DATA
    const [inputItem, setInputItem] = React.useState([])

    //STATE TO TRACK FORM DATA
    const [formData, setFormData] = React.useState ({
        title: "",
        timeDue: "",
        desc: "",
        isDone: false,
    })

    //FUNCTION FOR WHEN FORM DATA IS CHANGED
    function handleChange(event) {

        //DESTRUCTURE OBJECT AND SET TO VARIABLE 
        const {name, value, type, checked} = event.target
        
        setFormData(prevFormData => {
            return {
                //USE SPREAD OPERATOR TO GRAB ENTIRE OBJECT INSIDE STATE
                ...prevFormData,

                //GET THE NAME VALUE FROM HTML ELEMENT
                [name]: type === "checkbox" ? checked : value
                //[name]: value

            }
        })
    }

    //FUNCTION TO SUBMIT FORM
    function handleSubmit(event) {

        //KEEP FROM REFRESHING AND RE-RENDERING FORM WHEN SUBMITTED
        event.preventDefault()

        //ADD FORM DATA TO THE ARRAY
        setInputItem(prevInputItem => [...prevInputItem, formData])

        //RESET INPUT TO BLANK
        setFormData({
        title: "",
        timeDue: "",
        desc: "",
        isDone: false,
        })
    }
    
    console.log(inputItem)

    return(
        //INPUT BOX CONTENT
        <div className="row justify-content-center">
           <ToDoRowList taskData={inputItem} />
            <div className="col-sm-4">

                {/* HEADER ABOVE INPUTS */}
                <h3>Add a Task</h3>

                {/* FORM BEGINS, RUN HANDLE SUBMIT FUNCTION ON SUBMIT */}
                <form onSubmit={handleSubmit}>

                    {/* TASK TITLE */}
                    <input 
                    type='text'
                    placeholder='Task Title'
                    onChange={handleChange}
                    name='title'
                    value={formData.title} 
                    />

                    {/* TIME DUE */}
                    <input 
                    type='text'
                    placeholder='Time Due'
                    onChange={handleChange}
                    name='timeDue'
                    value={formData.timeDue} 
                    />

                    {/* DESCRIPTION */}
                    <input
                    type='text'
                    placeholder='Description'
                    onChange={handleChange}
                    name='desc'
                    value={formData.desc} 
                    />

                    <br />

                    {/* CHECKBOX */}
                    {/* <input
                    type="checkbox" 
                    name="isDone" 
                    checked={formData.isDone}
                    onClick={handleClick}
                    /> */}

                    <br />

                    {/* SUBMIT BUTTON */}
                    <button>Submit</button>
                    
                </form>
            </div>
        </div>
    )
}

export default InputRow