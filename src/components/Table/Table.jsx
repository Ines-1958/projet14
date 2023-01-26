import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'
import {
  useTable,
  useGlobalFilter,
  useSortBy,
  usePagination,
} from 'react-table'
import Mocked_data from './../Mocked_data.json'
import { COLUMNS } from './columns'
import { GlobalFilter } from './GlobalFilter'
import './Table.scss'

export const Table = () => {
  const columns = useMemo(() => COLUMNS, [])
  const data = useMemo(() => Mocked_data, [])

  const tableInstance = useTable(
    {
      columns: columns,
      data,
    },

    useGlobalFilter,
    useSortBy,
    usePagination
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    setPageSize,
    prepareRow,
    state,
    setGlobalFilter,
  } = tableInstance

  const { globalFilter } = state

  const { pageIndex, pageSize } = state

  return (
    <>
      <div className="search-select">
        <label>
          Show
          <select
            value={pageSize}
            onChange={(e) => setPageSize(Number(e.target.value))}
          >
            {[10, 25, 50, 100].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                {pageSize}
              </option>
            ))}
          </select>
          entries
        </label>

        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      </div>

      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  <span>
                    {column.isSorted ? (column.isSortedDesc ? '🔽' : '🔼') : ''}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps}>
          {page.map((row) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>

      <div className="pagination">
        <span>
          Showing{' '}
          <span>
            {pageIndex + 1} of {pageOptions.length}
          </span>{' '}
          entries
        </span>
        <div className="pagination-btn">
          <Link onClick={() => previousPage()} disabled={!canPreviousPage}>
            Previous
          </Link>
          <button>{pageIndex + 1}</button>
          <Link onClick={() => nextPage()} disabled={!canNextPage}>
            Next
          </Link>
        </div>
      </div>
    </>
  )
}
