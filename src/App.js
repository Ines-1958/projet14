import './App.css'
import { Route, Routes } from 'react-router-dom'
import Modal from './components/Modal/Modal'
import CustomDropdown from './components/CustomDropdown/CustomDropdown'
import CreateEmployee from './pages/CreateEmployee/CreateEmployee'
import EmployeeList from './pages/EmployeeList/EmployeeList'
import { Table } from './components/Table/Table'
import Datepicker from './components/Datepicker/Datepicker'
import Dropdown from './components/Dropdown/Dropdown'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      {/* <Modal /> */}
      {/* <Dropdown selected={selected} setSelected={setSelected} /> */}
      <Header />

      <Routes>
        <Route path="/" element={<CreateEmployee />} />
        <Route path="/employees" element={<EmployeeList />} />
        <Route path="/modal" element={<Modal />} />
        <Route path="/select" element={<CustomDropdown />} />
        <Route path="/table" element={<Table />} />
        <Route path="/datepicker" element={<Datepicker />} />
        <Route path="/dropdown" element={<Dropdown />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
