import React from 'react'
import Table from 'react-bootstrap/Table'

const DisplayToDo = (props) => {



    const handleDelete = (arrIdx) => {
        props.removeItemWithIdx(arrIdx)
    }




    const toggleCompleted = (arrIdx, targetBool) => {
        props.updateCompletedWithIdx(arrIdx, targetBool)
    }

    return (
        <div className='container w-25 d-inline-flex flex-column-reverse text-bg-success'>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Task</th>
                        <th>Completed</th>
                        <th>Delete</th>
                    </tr>
                </thead>

                <tbody>
                    {props.nextToDo.map((eachTask, idx) => {
                        return (
                            <tr key={idx} style={eachTask.isCompleted ? { textDecoration: "line-through" } : { textDecoration: "none" }}>
                                <td>{eachTask.toDo}</td>
                                <td><input type="checkbox" checked={eachTask.isCompleted} onChange={e => toggleCompleted(idx, e.target.checked)} /></td>
                                <td><button className='btn bg-dark text-white border-primary' onClick={() => handleDelete(idx)}>Delete</button></td>
                            </tr >
                        )
                    })}

                </tbody>
            </Table>
        </div>
    )
}

export default DisplayToDo