import React, { useState } from 'react'
import "../../App.css"

function FormRegister() {
    const [dataForm, setDataForm] = useState({ name: "", email: "" });
    function formHandler(e) {
        e.preventDefault()
        console.log(dataForm);
    }
    return (
        <div className='borderStyle formStyle'>
            <form onSubmit={formHandler} >
                <label>name: </label>
                <input type="text" onChange={(e) => setDataForm({ name: e.target.value, mail: dataForm.email })} />
                <label>email: </label>
                <input type="email" onChange={(e) => setDataForm({ name: dataForm.name, email: e.target.value })} />
                <button className='submitForm'>submit</button>
            </form>
        </div>
    )
}

export default FormRegister
