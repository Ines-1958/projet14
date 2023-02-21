import React from 'react'

export const GlobalFilter = ({ filter, setFilter }) => {
  return (
    <span>
      <label htmlFor="table-search">Search: </label>
      <input
        value={filter || ''}
        onChange={(e) => setFilter(e.target.value)}
        id="table-search"
      />
    </span>
  )
}
