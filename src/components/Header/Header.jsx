import React from 'react'
import { NavLink } from 'react-router-dom'

import '../Header/Header.scss'
import logo from '../../assets/logo.png'

export default function Header() {
  return (
    <div className="comp-header">
      <img src={logo} alt="" />
      <nav className="navbar">
        <NavLink
          to="/"
          style={({ isActive }) =>
            isActive
              ? { textDecoration: 'underline' }
              : { textDecoration: 'none' }
          }
        >
          Create Employee
        </NavLink>

        <NavLink
          to="/employees"
          style={({ isActive }) =>
            isActive
              ? { textDecoration: 'underline' }
              : { textDecoration: 'none' }
          }
        >
          Employee List
        </NavLink>
      </nav>
    </div>
  )
}
