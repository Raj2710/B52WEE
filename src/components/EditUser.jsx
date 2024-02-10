import React from 'react'
import { useParams } from 'react-router-dom'
function EditUser() {
    let params = useParams()
    console.log(params.id)
  return (
    <h1>EditUser</h1>
  )
}

export default EditUser