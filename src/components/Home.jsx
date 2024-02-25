import React, { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import TopBar from './TopBar'
import { Button,Modal,Form } from 'react-bootstrap'
import {create} from '../redux/toDoSlice'
import Task from './Task'
function Home() {
    let todo = useSelector((state)=>state.todo)
    let [isModal,setModal] = useState(false)
    let dispatch = useDispatch()

    const handleCancel = ()=>{
        setModal(false)
    }

    const handleSave = (e)=>{
        e.preventDefault()
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData); 
        dispatch(create(data))
        setModal(false)
        //to prevent the form to load the search params
        return false
    }

  return <>
 
  <TopBar setModal={setModal}/>
  <Button onClick={()=>setModal(true)}>Create</Button>
    <div className='taskWrapper'>
        {
            todo.map((e,i)=>{
                return <Task
                    id={e.id}
                    name={e.name}
                    dueDate={e.dueDate}
                    priority={e.priority}
                    status={e.status}
                    key={e.id}
                />
            })
        }
    </div>

     

    <Modal show={isModal} onHide={handleCancel}>
        <Modal.Header closeButton>
          <Modal.Title>Create Todo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={handleSave}>
            <Form.Group className="mb-3">
                <Form.Label>Task</Form.Label>
                <Form.Control type="text" placeholder="Enter Task" name="name"/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Due Date</Form.Label>
                <Form.Control type="date" placeholder="Due Date" name="dueDate"/>
            </Form.Group>

            <Form.Group className="mb-3">
            <Form.Label>Priority</Form.Label>
                <Form.Select name='priority'>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                </Form.Select>
            </Form.Group>
            <Button variant="primary" type='submit'>
                Submit
            </Button>
        </Form>
        </Modal.Body>
      </Modal>
  </>
}

export default Home