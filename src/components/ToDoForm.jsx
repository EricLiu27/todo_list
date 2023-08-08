import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const ToDoForm = (props) => {
    const [toDo, setToDo] = useState("")



    const handleSubmit = (e) => {
        e.preventDefault();
        const task = { toDo, isCompleted: false }
        props.onCreate(task);
        setToDo("");

    }

    const updateToDo = (e) => {
        setToDo(e.target.value)
    }

    return (
        <div className='mt-5 container-sm w-25 text-bg-success'>
            <h1 className='text-dark'>TO-DO LIST</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label className='text-dark'>Submit a task</Form.Label>
                    <Form.Control type='text' name='todo' onChange={updateToDo} value={toDo} />
                </Form.Group>
                <button className='mb-3 btn border-primary bg-dark text-white'>Add</button>
            </Form>
        </div>
    )
}

export default ToDoForm