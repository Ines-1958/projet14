import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import './CreateEmployee.scss'
import CustomDropdown from '../../components/CustomDropdown/CustomDropdown'
import Datepicker from '../../components/Datepicker/Datepicker'
import employeeReducer from '../../redux/reducers/employeeReducer'
import Dropdown from '../../components/Dropdown/Dropdown'

export default function CreateEmployee() {
  const [selectedStates, setSelectedStates] = useState('Alabama')
  const [selectedDepartement, setSelectedDepartement] = useState('Sales')
  const [birthdate, setBirthdate] = useState(null)
  const [startdate, setStartdate] = useState(null)
  // const [state, setState] = useState('US')

  //REDUX
  const [employee, setEmployee] = useState({
    first_name: '',
    last_name: '',
    start_date: '',
    department: '',
    date_of_birth: '',
    street: '',
    city: '',
    // state: state.value,
    state: '',
    zip_code: '',
  })

  // const handleChangeState = (selectedOption) => {
  //   setState(selectedOption)
  // }

  const dispatch = useDispatch()

  const handleForm = (e) => {
    e.preventDefault()

    dispatch({
      type: 'CREATEEMPLOYEE',
      payload: employee,
    })

    setEmployee({
      first_name: '',
      last_name: '',
      start_date: '',
      date_of_birth: '',
      street: '',
      city: '',
      zip_code: '',
    })
  }

  const handleInputs = (e) => {
    if (e.target.classList.contains('input-firstName')) {
      const newObjState = { ...employee, first_name: e.target.value }
      setEmployee(newObjState)
    } else if (e.target.classList.contains('input-lastName')) {
      const newObjState = { ...employee, last_name: e.target.value }
      setEmployee(newObjState)
    } else if (e.target.classList.contains('input-startDate')) {
      const newObjState = { ...employee, start_date: e.target.value }
      setEmployee(newObjState)
    } else if (e.target.classList.contains('input-street')) {
      const newObjState = { ...employee, street: e.target.value }
      setEmployee(newObjState)
    } else if (e.target.classList.contains('input-city')) {
      const newObjState = { ...employee, city: e.target.value }
      setEmployee(newObjState)
    } else if (e.target.classList.contains('input-zipCode')) {
      const newObjState = { ...employee, zip_code: e.target.value }
      setEmployee(newObjState)
    } else if (e.target.classList.contains('input-state')) {
      const newObjState = { ...employee, state: e.target.value }
      setEmployee(newObjState)
    } else if (e.target.classList.contains('input-department')) {
      const newObjState = { ...employee, department: e.target.value }
      setEmployee(newObjState)
    }
  }

  const states = [
    {
      label: 'Alabama',
      value: 'AL',
    },
    {
      label: 'Alaska',
      value: 'AK',
    },
    {
      label: 'American Samoa',
      value: 'AS',
    },
    {
      label: 'Arizona',
      value: 'AZ',
    },
    {
      label: 'Arkansas',
      value: 'AR',
    },
    {
      label: 'California',
      value: 'CA',
    },
    {
      label: 'Colorado',
      value: 'CO',
    },
    {
      label: 'Connecticut',
      value: 'CT',
    },
    {
      label: 'Delaware',
      value: 'DE',
    },
    {
      label: 'District Of Columbia',
      value: 'DC',
    },
    {
      label: 'Federated States Of Micronesia',
      value: 'FM',
    },
    {
      label: 'Florida',
      value: 'FL',
    },
    {
      label: 'Georgia',
      value: 'GA',
    },
    {
      label: 'Guam',
      value: 'GU',
    },
    {
      label: 'Hawaii',
      value: 'HI',
    },
    {
      label: 'Idaho',
      value: 'ID',
    },
    {
      label: 'Illinois',
      value: 'IL',
    },
    {
      label: 'Indiana',
      value: 'IN',
    },
    {
      label: 'Iowa',
      value: 'IA',
    },
    {
      label: 'Kansas',
      value: 'KS',
    },
    {
      label: 'Kentucky',
      value: 'KY',
    },
    {
      label: 'Louisiana',
      value: 'LA',
    },
    {
      label: 'Maine',
      value: 'ME',
    },
    {
      label: 'Marshall Islands',
      value: 'MH',
    },
    {
      label: 'Maryland',
      value: 'MD',
    },
    {
      label: 'Massachusetts',
      value: 'MA',
    },
    {
      label: 'Michigan',
      value: 'MI',
    },
    {
      label: 'Minnesota',
      value: 'MN',
    },
    {
      label: 'Mississippi',
      value: 'MS',
    },
    {
      label: 'Missouri',
      value: 'MO',
    },
    {
      label: 'Montana',
      value: 'MT',
    },
    {
      label: 'Nebraska',
      value: 'NE',
    },
    {
      label: 'Nevada',
      value: 'NV',
    },
    {
      label: 'New Hampshire',
      value: 'NH',
    },
    {
      label: 'New Jersey',
      value: 'NJ',
    },
    {
      label: 'New Mexico',
      value: 'NM',
    },
    {
      label: 'New York',
      value: 'NY',
    },
    {
      label: 'North Carolina',
      value: 'NC',
    },
    {
      label: 'North Dakota',
      value: 'ND',
    },
    {
      label: 'Northern Mariana Islands',
      value: 'MP',
    },
    {
      label: 'Ohio',
      value: 'OH',
    },
    {
      label: 'Oklahoma',
      value: 'OK',
    },
    {
      label: 'Oregon',
      value: 'OR',
    },
    {
      label: 'Palau',
      value: 'PW',
    },
    {
      label: 'Pennsylvania',
      value: 'PA',
    },
    {
      label: 'Puerto Rico',
      value: 'PR',
    },
    {
      label: 'Rhode Island',
      value: 'RI',
    },
    {
      label: 'South Carolina',
      value: 'SC',
    },
    {
      label: 'South Dakota',
      value: 'SD',
    },
    {
      label: 'Tennessee',
      value: 'TN',
    },
    {
      label: 'Texas',
      value: 'TX',
    },
    {
      label: 'Utah',
      value: 'UT',
    },
    {
      label: 'Vermont',
      value: 'VT',
    },
    {
      label: 'Virgin Islands',
      value: 'VI',
    },
    {
      label: 'Virginia',
      value: 'VA',
    },
    {
      label: 'Washington',
      value: 'WA',
    },
    {
      label: 'West Virginia',
      value: 'WV',
    },
    {
      label: 'Wisconsin',
      value: 'WI',
    },
    {
      label: 'Wyoming',
      value: 'WY',
    },
  ]

  const department = [
    // 'Sales',
    // 'Marketing',
    // 'Engineering',
    // 'Human Resources',
    // 'Legal',
    { value: 'sales', label: 'Sales' },
    { value: 'marketing', label: 'Marketing' },
    { value: 'engineering', label: 'Engineering' },
    { value: 'human resources', label: 'Human Resources' },
    { value: 'legal', label: 'Legal' },
  ]

  return (
    <div>
      <h1>HRnet</h1>

      <div className="container">
        <NavLink to="/employees">View Current Employees</NavLink>

        <h2>Create Employee</h2>

        <form onSubmit={handleForm}>
          <label htmlFor="employee-firstname">First Name</label>
          <input
            id="employee-firstname"
            value={employee.first_name}
            className="input-firstName"
            onChange={handleInputs}
          />

          <label htmlFor="employee-lastname">Last Name</label>
          <input
            id="employee-lastname"
            value={employee.last_name}
            className="input-lastName"
            onChange={handleInputs}
          />

          <label htmlFor="employee-birthdate">Date of Birth</label>
          {/* <input /> */}
          <Datepicker
            id="employee-birthdate"
            className="input-birthdate"
            value={employee.date_of_birth}
            selected={birthdate}
            onChange={(date) => setBirthdate(date)}
          />

          <label htmlFor="employee-startdate">Start Date</label>
          <Datepicker
            id="employee-startdate"
            value={employee.start_date}
            className="input-startDate"
            // onChange={handleInputs}
            selected={startdate}
            onChange={(date) => setStartdate(date)}
          />

          <fieldset>
            <legend>Address</legend>

            <label htmlFor="employee-street">Street</label>
            <input
              id="employee-street"
              value={employee.street}
              className="input-street"
              onChange={handleInputs}
            />

            <label htmlFor="employee-city">City</label>
            <input
              id="employee-city"
              value={employee.city}
              className="input-city"
              onChange={handleInputs}
            />

            <label>State</label>
            <Dropdown
              data={states}
              defaultValue={states[0]}
              value={employee.state}
              // onChange={handleChangeState}
              className="input-state"
            />

            <label htmlFor="employee-zipcode">Zip Code</label>
            <input
              id="employee-zipcode"
              type="number"
              value={employee.zip_code}
              className="input-zipCode"
              onChange={handleInputs}
            />
          </fieldset>

          <label>Department</label>
          <Dropdown
            data={department}
            defaultValue={department[0]}
            value={employee.department}
            className="input-department"
          />

          <button className="btn-primary">Save</button>
        </form>
      </div>
    </div>
  )
}
