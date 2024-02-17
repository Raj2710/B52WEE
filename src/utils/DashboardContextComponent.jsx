import React from 'react'
export const DashboardContext = React.createContext()
function DashboardContextComponent({children}) {
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

  return <DashboardContext.Provider value = {{dashboardData}}>
    {children}
  </DashboardContext.Provider>
}

export default DashboardContextComponent