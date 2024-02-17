import React,{useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import Helper from '../utils/Helper';
import {UserContext} from '../App'
function Users() {
  let navigate = useNavigate()
  let {users,setUsers} = useContext(UserContext)
  
  const handleDelete = (id)=>{
  
    let index = Helper.findIndexById(users,id)
    if(index!==-1)
    {
        users.splice(index,1)
        setUsers([...users])
    }
    else
    {
      alert("Invalid Id")
    }
  }

  return <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <div className="container-fluid">
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">All Users</h1>
                </div>
                <div className="row">
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Mobile</th>
                      <th>Batch</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      users.map((e,i)=>{
                        return <tr key={i}>
                          <td>{i+1}</td>
                          <td>{e.name}</td>
                          <td>{e.email}</td>
                          <td>{e.mobile}</td>
                          <td>{e.batch}</td>
                          <td>
                              <Button variant='primary' onClick={()=>navigate(`/edit-user/${e.id}`)}>Edit</Button>
                              &nbsp;
                              <Button variant='danger' onClick={()=>handleDelete(e.id)}>Delete</Button>
                          </td>
                        </tr>
                      })
                    }
                  </tbody>
                </Table>
                </div>
              </div>
            </div>
          </div>
}

export default Users