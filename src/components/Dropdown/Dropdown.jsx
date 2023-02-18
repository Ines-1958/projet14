import React from 'react'
import Select from 'react-select'
import '../Dropdown/Dropdown.scss'

export default function Dropdown(props) {
  return (
    <>
      <Select
        options={props.data}
        defaultValue={props.defaultValue}
        onChange={props.onChange}
      />
    </>
  )
}
