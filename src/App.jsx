import React,{useState} from 'react'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import Users from './components/Users'
import AddUser from './components/AddUser'
import EditUser from './components/EditUser'
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import DashboardContextComponent from './utils/DashboardContextComponent'
import NestedExample from './components/NestedExample'
import Class from './components/NestedExample/Class'
import Feedback from './components/NestedExample/Feedback'
import Task from './components/NestedExample/Task'
export const UserContext = React.createContext()
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
  <UserContext.Provider value={{users,setUsers}}>
    <Sidebar/>
    <Routes>
      <Route path='/' element={<DashboardContextComponent>
                                <Dashboard/>
                              </DashboardContextComponent>}/>
      <Route path='/user' element={<Users/>}/>
      <Route path='/add-user' element={<AddUser/>}/>
      <Route path='/edit-user/:id' element={<EditUser/>}/>
      <Route path='/nested-example' element={<NestedExample/>}>
          <Route path='class' element={<Class/>}/>
          <Route path='feedback' element={<Feedback/>}/>
          <Route path='task' element={<Task/>}/>
      </Route>
      <Route path='*' element={<Navigate to='/'/>}/>
    </Routes> 
    </UserContext.Provider>        
  </BrowserRouter>
   </div>
}

export default App