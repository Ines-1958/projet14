import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Table } from '../../components/Table/Table'
import './EmployeeList.scss'

export default function EmployeeList() {
  // const { firstName, token } = useSelector((state) => state.auth)
  // const employees = useSelector((state) => state.employees)

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
