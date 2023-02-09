import React, { useState, useRef } from 'react'
import './CustomDropdown.scss'
import { IoMdArrowDropdown } from 'react-icons/io'

//selected et setSelected est le state du composant parent app reçu ici en props
// export default function Dropdown({ selected, setSelected }) {
export default function CustomDropdown(props) {
  const [isActive, setIsActive] = useState(false)
  const [inputValue, setInputValue] = useState('')

  const ref = useRef()

  console.log(ref)
  console.log(ref.current)

  /**
   * Permet de fermer la dropdown en cliquant n'importe où
   * sur la page
   */
  window.addEventListener('click', (e) => {
    if (e.target !== ref.current) {
      setIsActive(false)
    }
    console.log(e.target === ref.current)
  })

  const openDropdown = () => {
    setIsActive(!isActive)
  }

  const data = props.data

  return (
    <div className={`dropdown ${props.class}`}>
      <div className="dropdown-btn" onClick={openDropdown} ref={ref}>
        {props.selected}
        <IoMdArrowDropdown className="ioMdArrowDropdown" />
      </div>

      {isActive && (
        <div className="dropdown-content">
          {data.map((option, index) => (
            <div
              key={index}
              className="dropdown-item"
              onClick={() => {
                option.name
                  ? props.setSelected(option.name)
                  : props.setSelected(option)

                setIsActive(false)
              }}
            >
              {option.name ? option.name : option}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
