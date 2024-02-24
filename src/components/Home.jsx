import React,{useState,useEffect} from 'react'
import Post from './Post'
import AxiosService from '../utils/AxiosService'
function Home() {

  let [blogs,setBlogs] = useState([])

  let getBlogs = async()=>{
    try {
      // fetch(API_URL)
      // .then(res=>res.json())
      // .then(data=>console.log(data))

      let res = await AxiosService.get('/blogapp')
      if(res.status===200)
      {
        setBlogs(res.data.filter(e=>e.status))
      }

    } catch (error) {
      alert("Error Occoured")
    }
  }

  useEffect(()=>{
    getBlogs()
  },[])

  return <div className='homeWrapper'>
  {
    blogs.map((e,i)=>{
      return <Post title={e.title} imageUrl={e.imageUrl} description={e.description} key={i}/>
    })
  } 
  </div>
}

export default Home