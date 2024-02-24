import React, { useState,useEffect } from 'react'
import Post from './Post'
import {Form,Button} from 'react-bootstrap';
import AxiosService from '../utils/AxiosService'
import { useNavigate,useParams } from 'react-router-dom';
function Create() {
    const {id} = useParams()
    const [title,setTitle] = useState("")
    const [imageUrl,setImage] = useState("")
    const [description,setDesc] = useState("")
    const navigate = useNavigate()

    let getBlogById = async()=>{
        try {
            let res = await AxiosService.get(`/blogapp/${id}`)
            if(res.status===200)
            {
                setTitle(res.data.title)
                setImage(res.data.imageUrl)
                setDesc(res.data.description)
            }
        } catch (error) {
            alert("Error Occoured")
        }
    }




    useEffect(()=>{
        if(id)
            getBlogById()
    },[])

    const handleCreate = async()=>{
        try {
            let res = await AxiosService.post('/blogapp',{
                title,imageUrl,description,status:false
            })
            if(res.status===201)
            {
                alert("Blog Submitted for Review")
                navigate('/')
            }
        } catch (error) {
            
        }  
    }
    const handleEdit = async()=>{
        try {
            let res = await AxiosService.put(`blogapp/${id}`,{
                title,imageUrl,description,status:false,id
            })
            if(res.status===200)
            {
                alert("Blog Submitted for Review")
                navigate('/dashboard')
            }
        } catch (error) {
            
        }  
    }
  return <div >
    <h2 style={{textAlign:"center"}}>Create Your Blog Here!</h2>
<div class='createWrapper'>
    <div className='formWrapper'>
    <Form>
      <Form.Group className="mb-3" >
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Enter Title" value = {title} onChange={(e)=>setTitle(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Image Url</Form.Label>
        <Form.Control type="text" placeholder="Enter Image Url" value={imageUrl} onChange={(e)=>setImage(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" placeholder="Description" value={description} style={{ height: '100px' }} onChange={(e)=>setDesc(e.target.value)}/>
      </Form.Group>

      <Button variant="primary" onClick={()=>{
        if(id)
            handleEdit()
        else
            handleCreate()
      }}>
        Submit
      </Button>
    </Form>
    </div>
    <div className='previewWrapper'>
        <Post title={title} imageUrl={imageUrl} description={description}/>
    </div>
  </div>

  </div>
}

export default Create