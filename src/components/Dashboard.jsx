import React from 'react'
import Cards from './Cards'

function Dashboard() {
  const dashboardData = [
    {
      title:"Earnings (Monthly)",
      value:"$ 40,000",
      color:'primary',
      icon:"fa-calendar",
      isProgress:false
    },
    {
      title:"Earnings (Annual)",
      value:"$ 240,000",
      color:'success',
      isProgress:false,
      icon:"fa-dollar-sign"
    },
    {
      title:"Task",
      value:"50",
      color:'info',
      isProgress:true,
      icon:"fa-clipboard-list"
    },
    {
      title:"Pending Request",
      value:"18",
      color:'warning',
      isProgress:false,
      icon:"fa-comments"
    },
    {
      title:"Earnings (Annual)",
      value:"$ 240,000",
      color:'primary',
      isProgress:false,
      icon:"fa-dollar-sign"
    },
    {
      title:"Task",
      value:"80",
      color:'danger',
      isProgress:true,
      icon:"fa-clipboard-list"
    }
  ]
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