import React from 'react'
import styled from 'styled-components'

interface ITable {
  columns: JSX.Element[]
}

const Table: React.FunctionComponent<ITable> = (props) => {
  return (
    <TableContainer>
      <thead>
        <tr>
          {props.columns.map((item) => {
            return item
          })}
        </tr>
      </thead>
      <tbody>
        {props.children}
      </tbody>
    </TableContainer>
  )
}

const TableContainer = styled.table`
  border-collapse: collapse;
  width: 100%;

  thead tr th {
    height: 40px;
    padding-left: 15px;
    background-color: #009879;
    color: #ffffff;
    text-align: left;
  }

  th:first-child{
    border-top-left-radius: 3px;
  }

  th:last-child{
    border-top-right-radius: 3px;
  }

  thead tr {
    text-align: left;
  }

  td {
    padding: 16px;
    color: #1F1C1C;
  }

  tr:nth-child(odd) td {
    background-color: rgba(0,0,0,.05);
  }

  tr:nth-child(even) td {
    background: #ffffff;
  }
`

export const Row = styled.tr``

export const Cell = styled.td`
  padding: 16px;
`

export default Table