import React,{useEffect, useState,useContext} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate,useParams } from 'react-router-dom';
import Helper from '../utils/Helper';
import { UserContext } from '../App';
import Actions from '../utils/Actions';

function EditUser() {

  let {users,setUsers} = useContext(UserContext)

  let [name,setName] = useState("")
  let [email,setEmail] = useState("")
  let [mobile,setMobile] = useState("")
  let [batch,setBatch] = useState("")

  let navigate = useNavigate()
  let {id} = useParams()

  

const getData = ()=>{
  let index = Helper.findIndexById(users,id)
  if(index!==-1)
  {
    setName(users[index].name)
    setEmail(users[index].email)
    setMobile(users[index].mobile)
    setBatch(users[index].batch)
  }
}

  useEffect(()=>{
      if(id)
        getData()
  },[])

  let handleSubmit = ()=>{
    setUsers({action:Actions.EDIT,id:id,data:{
      id,name,email,mobile,batch
    }})
    navigate('/user')
  }

  return <div id="content-wrapper" className="d-flex flex-column">
  <div id="content">
   <div className="container-fluid">
     <div className="d-sm-flex align-items-center justify-content-between mb-4">
         <h1 className="h3 mb-0 text-gray-800">Edit User</h1>
     </div>
     <div className="row">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Name"  value={name} onChange={(e)=>setName(e.target.value)}/>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Mobile</Form.Label>
            <Form.Control type="text" placeholder="Mobile" value={mobile} onChange={(e)=>setMobile(e.target.value)}/>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Batch</Form.Label>
            <Form.Control type="text" placeholder="Batch" value={batch} onChange={(e)=>setBatch(e.target.value)}/>
          </Form.Group>
          
          <Button variant="primary" onClick={()=>handleSubmit()}>
            Submit
          </Button>
        </Form>
     </div>
   </div>
  </div>
</div>
}

export default EditUser