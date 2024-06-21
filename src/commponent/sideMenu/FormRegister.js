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
                <input type="text" onChange={(e) => setDataForm({...dataForm , name: e.target.value })} />
                <label>email: </label>
                <input type="email" onChange={(e) => setDataForm({ ...dataForm ,email: e.target.value })} />
                <button className='submitForm'>submit</button>
            </form>
        </div>
    )
}

export default FormRegister
