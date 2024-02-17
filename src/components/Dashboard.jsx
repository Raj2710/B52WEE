import React,{useContext} from 'react'
import Cards from './Cards'
import {DashboardContext} from '../utils/DashboardContextComponent'

function Dashboard() {
  let {dashboardData} = useContext(DashboardContext)

  return  <div id="content-wrapper" className="d-flex flex-column">
     <div id="content">
      <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
        </div>
        <div className="row">
          {
            dashboardData.map((e,i)=>{
              return <Cards data={e} key={i}/>
            })
          }
        </div>
      </div>
     </div>
  </div>
}

export default Dashboard