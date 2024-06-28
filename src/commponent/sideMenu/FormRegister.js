import React, { useState } from 'react'
import "../../App.css"

function FormRegister() {
    const [dataForm, setDataForm] = useState({ name: "", email: "", isStudents: false, language: "", status: "", });
    function formHandler(e) {
        e.preventDefault()
        console.log(dataForm);
    }
    function isStudentsHandler(event) {
        setDataForm({ ...dataForm, isStudents: event.target.checked })
    }
    return (
        <div className='borderStyle formStyle'>
            <form onSubmit={formHandler} >
                <label>name: </label>
                <input type="text" onChange={(e) => setDataForm({ ...dataForm, name: e.target.value })} />
                <label>email: </label>
                <input type="email" onChange={(e) => setDataForm({ ...dataForm, email: e.target.value })} />
                <input type="checkbox" onChange={isStudentsHandler} />
                <label> is students </label>
                <select value={dataForm.language} onChange={(event) => { setDataForm({ ...dataForm, language: event.target.value }) }}>
                    <option>Arabic</option>
                    <option>English</option>
                </select>
                <div>
                    student: <input value="students" type="radio" name="status"
                        checked={dataForm.status == "students"}
                        onChange={() => {
                            setDataForm(
                                { ...dataForm, status: "students" }
                            )
                            console.log(dataForm);
                        }}
                    />
                    Teacher: <input value="teacher" type="radio" name="status"
                        checked={dataForm.status == "teacher"}
                        onChange={() => {
                            setDataForm(
                                { ...dataForm, status: "teacher" }
                            )
                            console.log(dataForm);
                        }}
                    />
                </div>

                <button className='submitForm'>submit</button>
            </form>
        </div>
    )
}

export default FormRegister
