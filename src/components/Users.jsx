import React from 'react'
import { useNavigate } from 'react-router-dom'
function Users() {
  let navigate = useNavigate()
  return <>
    <h1>Users</h1>
    <button onClick={()=>navigate('/edit-user/10')}>Edit</button>
    </>
}

export default Users