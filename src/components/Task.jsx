import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import language from '../config/Language';
import { useDispatch } from 'react-redux';
import {toggle,deleteTodo} from '../redux/toDoSlice'
function Task({id,name,dueDate,priority,status}) {
    let dispatch = useDispatch()

  return <div className='cardWrapper'>
    <Card style={{ width: '18rem',cursor:'pointer' }} onClick={()=>dispatch(toggle({id}))}>
      <Card.Body>
        <Card.Title>{status?<s>{name}</s>:<>{name}</>}</Card.Title>
        <Card.Text>
         <small>{dueDate}</small>
        </Card.Text>
        <Card.Text>
          <div className='card-footer'>
          <div>
            {priority==="high"?<i className="fa-solid fa-arrow-up"></i>:<></>}
            {priority==="low"?<i className="fa-solid fa-arrow-down"></i>:<></>}
            {priority==="medium"?<i className="fa-solid fa-equals"></i>:<></>}
            &nbsp;
            <small>{language[priority]}</small> 
           </div>
           <div>
           <i class="fa-solid fa-trash" onClick={()=>dispatch(deleteTodo({id}))}></i>
           </div>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  </div>
}

export default Task