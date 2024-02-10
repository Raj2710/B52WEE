import React from 'react'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import Users from './components/Users'
import AddUser from './components/AddUser'
import EditUser from './components/EditUser'
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
function App() {
  return <div id="wrapper">
  <BrowserRouter>
    <Sidebar/>
    <Routes>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/user' element={<Users/>}/>
      <Route path='/add-user' element={<AddUser/>}/>
      <Route path='/edit-user/:id' element={<EditUser/>}/>
      <Route path='*' element={<Navigate to='/'/>}/>
    </Routes>         
  </BrowserRouter>
   </div>
}

export default App