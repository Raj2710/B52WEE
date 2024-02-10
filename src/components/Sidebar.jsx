import React from 'react'

function Sidebar() {
  return <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

  <div className="sidebar-brand d-flex align-items-center justify-content-center pointer">
      <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-laugh-wink"></i>
      </div>
      <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
  </div>

  <hr className="sidebar-divider my-0"/>

  <li className="nav-item pointer">
      <div className="nav-link">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard</span>
      </div>
  </li>

  <hr className="sidebar-divider"/>

  <div className="sidebar-heading">
      Interface
  </div>

  <li className="nav-item pointer">
      <div className="nav-link">
          <i className="fas fa-fw fa-cog"></i>
          <span>Add User</span>
      </div>
  </li>

  <li className="nav-item pointer">
      <div className="nav-link">
          <i className="fas fa-fw fa-wrench"></i>
          <span>Settings</span>
      </div>
  </li>

  <hr className="sidebar-divider"/>
  

</ul>
}

export default Sidebar