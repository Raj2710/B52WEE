import React from 'react'
import { Outlet,Link } from 'react-router-dom'

function NestedExample() {
  return <div id="content-wrapper" className="d-flex flex-column">
  <div id="content">
   <div className="container-fluid">
     <div className="d-sm-flex align-items-center justify-content-between mb-4">
         <h1 className="h3 mb-0 text-gray-800">Nested Example</h1>
     </div>
     <div className="row">
       <ul className="margin-right-5">
            <li><Link to='class'>Class</Link></li>
            <li><Link to='feedback'>Feedback</Link></li>
            <li><Link to='task'>Task</Link></li>
       </ul>
     </div>
     <div className='row'>
        <Outlet/>
     </div>
   </div>
  </div>
</div>
}

export default NestedExample