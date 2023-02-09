import React from 'react'
import Select from 'react-select'
import '../Dropdown/Dropdown.scss'

// const options = [
//   { value: 'chocolate', label: 'Chocolate' },
//   { value: 'strawberry', label: 'Strawberry' },
//   { value: 'vanilla', label: 'Vanilla' },
// ]

export default function Dropdown(props) {
  return (
    <>
      <Select options={props.data} defaultValue={props.defaultValue} />
    </>
  )
}
