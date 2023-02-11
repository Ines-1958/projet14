import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

import './Datepicker.scss'
import { getMonth, getYear } from 'date-fns'
import range from 'lodash/range'
import { RiArrowLeftSFill } from 'react-icons/ri'
import { RiArrowRightSFill } from 'react-icons/ri'
import { HiHome } from 'react-icons/hi'

export default function Datepicker(props) {
  const [startDate, setStartDate] = useState(new Date())
  const [date, setDate] = useState(new Date())
  //   const years = range(1990, getYear(new Date()) + 1, 1)
  const years = range(1950, getYear(new Date()) + 3, 1)
  //   const years = range(getYear(new Date()) - 60, getYear(new Date()) + 3)
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  return (
    <DatePicker
      // selected={date}
      selected={props.selected}
      // onChange={(e) => console.log(e)}
      onChange={props.onChange}
      showMonthDropdown
      showYearDropdown
      dropdownMode="select"
      useWeekdaysShort={true}
      todayButton="🏛️ Today"
      // dateFormat="MM/dd/yyyy"
      value={props.value}

      //   renderCustomHeader={({
      //     date,
      //     changeYear,
      //     changeMonth,
      //     decreaseMonth,
      //     increaseMonth,
      //     prevMonthButtonDisabled,
      //     nextMonthButtonDisabled,
      //   }) => (
      //     <div
      //       className="date-container"
      //       style={{
      //         margin: 10,
      //         display: 'flex',
      //         justifyContent: 'center',
      //       }}
      //     >
      //       <button
      //         className="arrow"
      //         onClick={decreaseMonth}
      //         disabled={prevMonthButtonDisabled}
      //       >
      //         {/* {'<'} */}
      //         <RiArrowLeftSFill />
      //       </button>

      //       <button>
      //         <HiHome />

      //       </button>

      //       <select
      //         value={months[getMonth(date)]}
      //         onChange={({ target: { value } }) =>
      //           changeMonth(months.indexOf(value))
      //         }
      //       >
      //         {months.map((option) => (
      //           <option key={option} value={option}>
      //             {option}
      //           </option>
      //         ))}
      //       </select>

      //       <select
      //         value={getYear(date)}
      //         onChange={({ target: { value } }) => changeYear(value)}
      //       >
      //         {years.map((option) => (
      //           <option key={option} value={option}>
      //             {option}
      //           </option>
      //         ))}
      //       </select>

      //       <button
      //         className="arrow"
      //         onClick={increaseMonth}
      //         disabled={nextMonthButtonDisabled}
      //       >
      //         {/* {'>'} */}
      //         <RiArrowRightSFill className="riArrowRightSFill" />
      //       </button>
      //     </div>
      //   )}
      //   selected={startDate}
      //   onChange={(date) => setStartDate(date)}
      //   useWeekdaysShort={true}
    />
  )
}
