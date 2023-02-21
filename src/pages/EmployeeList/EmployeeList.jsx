import React from 'react'
import { NavLink } from 'react-router-dom'
import { Table } from '../../components/Table/Table'
import './EmployeeList.scss'

export default function EmployeeList() {
  return (
    <div className="employees_page-container">
      <h1>Current Employees</h1>
      <Table />
      <NavLink className="back-home" to="/">
        Home
      </NavLink>
    </div>
  )
}
