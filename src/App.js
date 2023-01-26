import './App.css'
import { Route, Routes } from 'react-router-dom'
import Modal from './components/Modal/Modal'
import Dropdown from './components/Dropdown/Dropdown'
import { useState } from 'react'
import CreateEmployee from './pages/CreateEmployee/CreateEmployee'
import EmployeeList from './pages/EmployeeList/EmployeeList'
import { Table } from './components/Table/Table'

function App() {
  return (
    <>
      {/* <Modal /> */}
      {/* <Dropdown selected={selected} setSelected={setSelected} /> */}

      <Routes>
        <Route path="/" element={<CreateEmployee />} />
        <Route path="/employees" element={<EmployeeList />} />
        <Route path="/modal" element={<Modal />} />
        <Route path="/dropdown" element={<Dropdown />} />
        <Route path="/table" element={<Table />} />
      </Routes>
    </>
  )
}

export default App
