import React,{useState} from 'react'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import Users from './components/Users'
import AddUser from './components/AddUser'
import EditUser from './components/EditUser'
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
function App() {
  const [users,setUsers] = useState([
    {
      id:1,
      name:"Sanjay",
      email:"sanjay@gmail.com",
      mobile:"987654321",
      batch:"B51"
    },
    {
      id:2,
      name:"Cholan",
      email:"cholan@gmail.com",
      mobile:"987898765",
      batch:"B51"
    }
  ])
  return <div id="wrapper">
  <BrowserRouter>
    <Sidebar/>
    <Routes>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/user' element={<Users users={users} setUsers={setUsers}/>}/>
      <Route path='/add-user' element={<AddUser users={users} setUsers={setUsers}/>}/>
      <Route path='/edit-user/:id' element={<EditUser users={users} setUsers={setUsers}/>}/>
      <Route path='*' element={<Navigate to='/'/>}/>
    </Routes>         
  </BrowserRouter>
   </div>
}

export default App