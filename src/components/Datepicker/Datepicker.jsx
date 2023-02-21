import React from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import './Datepicker.scss'

export default function Datepicker(props) {
  return (
    <DatePicker
      selected={props.selected}
      onChange={props.onChange}
      showMonthDropdown
      showYearDropdown
      dropdownMode="select"
      useWeekdaysShort={true}
      todayButton="🏛️ Today"
      value={props.value}
      id={props.id}
    />
  )
}
