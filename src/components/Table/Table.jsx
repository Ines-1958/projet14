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
//
import { useDispatch, useSelector } from 'react-redux'

export const Table = () => {
  const employees = useSelector((state) => state.employees.employees)

  const columns = useMemo(() => COLUMNS, [])
  // const data = useMemo(() => Mocked_data, [])
  const data = useMemo(() => employees, [])
  // const data = useMemo(() => employees, [employees])
  console.log(data)
  console.log(data.length)

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
    pageCount,
    gotoPage,
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
                  <span className="sort-icon">
                    {column.isSorted ? (column.isSortedDesc ? '▼' : '▲') : ''}
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
            {/* {pageIndex + 1} to {pageOptions.length} of {} */}
            {/* {page.length} to {pageSize} of {data.length} */}
            {pageIndex * pageSize + 1} to{' '}
            {pageIndex * pageSize + pageSize >= rows.length
              ? rows.length
              : pageIndex * pageSize + pageSize}{' '}
            of {rows.length}
          </span>{' '}
          entries
        </span>
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} to {pageOptions.length}
          </strong>{' '}
        </span>
        <span>
          | Go to page:{' '}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
              gotoPage(pageNumber)
            }}
            style={{ width: '50px' }}
          />
        </span>{' '}
        <div className="pagination-btn">
          <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
            {'<<'}
          </button>
          <button
            className="button-paginate previous"
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
          >
            Previous
          </button>

          {/* <button>{pageIndex + 1}</button> */}
          {/* <button>{pageSize}</button> */}

          <button
            className="button-paginate next"
            onClick={() => nextPage()}
            disabled={!canNextPage}
          >
            Next
          </button>
          <button
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
          >
            {'>>'}
          </button>
        </div>
      </div>
    </>
  )
}
