import React,{useReducer, useState} from 'react'
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
import UseRef from './components/Hooks/UseRef'
import UseReducer from './components/Hooks/UseReducer'
import Actions from './utils/Actions'
import Helper from './utils/Helper'
export const UserContext = React.createContext()
const initialState = [
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
]
function reducer(state,payload){
    switch(payload.action)
    {
      case Actions.CREATE:{
        let newArray = [...state]
        newArray.push(payload.data)
        return newArray
      }

      case Actions.EDIT:{
        let index = Helper.findIndexById(state,payload.id)
        let newArray = [...state]
        if(index>=0)
          newArray.splice(index,1,payload.data)
        return newArray
      }
      case Actions.DELETE:{
        let index = Helper.findIndexById(state,payload.id)
        let newArray = [...state]
        if(index>=0)
          newArray.splice(index,1)
        return newArray
      }
    }
}
function App() {

  const [users,setUsers] = useReducer(reducer,initialState)

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
      <Route path='/useref' element={<UseRef/>}/>
      <Route path='/usereducer' element={<UseReducer/>}/>
      <Route path='*' element={<Navigate to='/'/>}/>
    </Routes> 
    </UserContext.Provider>        
  </BrowserRouter>
   </div>
}



export default App