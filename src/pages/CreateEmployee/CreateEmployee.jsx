import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import './CreateEmployee.scss'
import Datepicker from '../../components/Datepicker/Datepicker'
import Dropdown from '../../components/Dropdown/Dropdown'

import format from 'date-fns/format'
import { Modal } from 'projet-14hrnet-plugin-modal'
import 'projet-14hrnet-plugin-modal/dist/Modal.scss'

export default function CreateEmployee() {
  const [birthdate, setBirthdate] = useState(null)
  const [startdate, setStartdate] = useState(null)
  const [modal, setModal] = useState(false)

  /**Fonction qui gère l'ouverture et la fermeture de la modale */
  const toggleModal = () => {
    setModal(!modal)
  }

  /**Fonction qui gère la récupération de la date de la start date */
  const handleSelectedOption = (date) => {
    setStartdate(date)
    setEmployee((employee) => ({
      ...employee,
      start_date: format(date, 'MM-dd-yyyy'),
    }))
  }

  /**Fonction qui gère la récupération de la date de birthdate */
  const handleSelectedDate = (date) => {
    setBirthdate(date)
    setEmployee((employee) => ({
      ...employee,
      date_of_birth: format(date, 'MM-dd-yyyy'),
    }))
  }

  //REDUX
  const [employee, setEmployee] = useState({
    first_name: '',
    last_name: '',
    start_date: '',
    department: '',
    date_of_birth: '',
    street: '',
    city: '',
    state: '',
    zip_code: '',
  })

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
    { value: 'Sales', label: 'Sales' },
    { value: 'Marketing', label: 'Marketing' },
    { value: 'Engineering', label: 'Engineering' },
    { value: 'Human Resources', label: 'Human Resources' },
    { value: 'Legal', label: 'Legal' },
  ]

  return (
    <div>
      <h1>HRnet</h1>

      <div className="container">
        <NavLink to="/employees">View Current Employees</NavLink>

        <h2>Create Employee</h2>

        <form onSubmit={handleForm}>
          <div className="form-content">
            <fieldset>
              <legend>Identity and start date</legend>
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
              <Datepicker
                id="employee-birthdate"
                className="input-birthdate"
                value={birthdate}
                selected={birthdate}
                onChange={handleSelectedDate}
              />

              <label htmlFor="employee-startdate">Start Date</label>
              <Datepicker
                id="employee-startdate"
                value={startdate}
                className="input-startDate"
                selected={startdate}
                onChange={handleSelectedOption}
              />
            </fieldset>
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

              <label htmlFor="react-select-2-input">State</label>
              <Dropdown
                data={states}
                defaultValue={states[0]}
                value={states.value}
                className="input-state"
                onChange={(selectedOption) => {
                  const selectedValue = selectedOption.value

                  setEmployee({
                    ...employee,
                    state: selectedValue,
                  })
                }}
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
          </div>
          <div className="department-content">
            <fieldset>
              <legend>Department</legend>
              <label htmlFor="react-select-3-input">Department</label>
              <Dropdown
                data={department}
                defaultValue={department[0]}
                value={employee.department}
                className="input-department"
                department={department.value}
                onChange={(selectedOption) => {
                  const selectedValue = selectedOption.value

                  setEmployee({
                    ...employee,
                    department: selectedValue,
                  })
                }}
              />
            </fieldset>
          </div>
          <button
            className="btn-primary submit-form"
            onClick={toggleModal}
            type="submit"
          >
            Save
          </button>
        </form>
        <Modal
          modal={modal}
          setModal={setModal}
          title={'Employee Created!'}
          message={'The employee has been added to the database.'}
        />
      </div>
    </div>
  )
}
