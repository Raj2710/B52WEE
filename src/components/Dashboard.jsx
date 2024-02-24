import React,{useState,useEffect} from 'react'
import {Table,Button,Form} from 'react-bootstrap'
import AxiosService from '../utils/AxiosService'
import { useNavigate } from 'react-router-dom'

function Dashboard() {

  let [blogs,setBlogs] = useState([])
  let navigate = useNavigate()
  let getBlogs = async()=>{
    try {
      let res = await AxiosService.get('/blogapp')
      if(res.status===200)
      {
        setBlogs(res.data)
      }

    } catch (error) {
      alert("Error Occoured")
    }
  }

  const handleToggle = async(e)=>{
    try {
      let res = await AxiosService.put(`/blogapp/${e.id}`,{
        ...e,
        status:!e.status
      })
      if(res.status===200)
      {
        getBlogs()
      }
    } catch (error) {
      
    }
  }

  const handleDelete = async(e)=>{
    try {
      let res = await AxiosService.delete(`/blogapp/${e.id}`)
      if(res.status===200)
      {
        alert("Deleted")
        getBlogs()
      }
    } catch (error) {
      
    }
  }

  useEffect(()=>{
    getBlogs()
  },[])
  return <>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Image</th>
          <th>Description</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
       {
        blogs.map((e,i)=>{
          return <tr key={i}>
            <td>{i+1}</td>
            <td>{e.title}</td>
            <td><img src={e.imageUrl} style={{height:"100px",weight:"100px"}}/></td>
            <td style={{width:"400px"}}>{e.description}</td>
            <td>
              <Form.Check // prettier-ignore
                type="switch"
                id="custom-switch"
                defaultChecked={e.status}
                label={e.status?"Active":"Inactive"}
                onChange={()=>handleToggle(e)}
              />
            </td>
            <td>
              <Button onClick={()=>navigate('/edit/'+e.id)}>Edit</Button>
              &nbsp;&nbsp;
              <Button variant='danger' onClick={()=>handleDelete(e)}>Delete</Button>
            </td>
          </tr>
        })
       }
      </tbody>
    </Table>
  </>
}

export default Dashboard