import React, { useMemo, useEffect, useState } from 'react';
import { useTable } from 'react-table';
import MaUTable from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import makeData from './makeData';

import axios from 'axios';
import Wrapper from '../Wrapper';

import styled from 'styled-components';

function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const { getTableProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  })

  // Render the UI for your table
  return (
    <MaUTable {...getTableProps()}>
      {/* <TableHead>
        {headerGroups.map(headerGroup => (
          <TableRow {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <TableCell {...column.getHeaderProps()}>
                {column.render('Header')}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableHead> */}
      {/* <TableBody>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <TableRow {...row.getRowProps()}>
              {row.cells.map(cell => {
                return (
                  <TableCell {...cell.getCellProps()}>
                    {cell.render('Cell')}
                  </TableCell>
                )
              })}
            </TableRow>
          )
        })}
      </TableBody> */}
    </MaUTable>
  )
}


export default function UsersTable() {
  const columns = useMemo(
    () => [
      {
        Header: 'Users',

        columns: [
          {
            Header: 'Name',
            accessor: 'name',
          },
          {
            Header: 'Email',
            accessor: 'email',
          },
          {
            Header: 'Role',
            accessor: 'role',
          },
          {
            Header: '',
            accessor: 'buttons',
          },
        ]
      },
    ], [] );

  // dummy for data
  const table = [
    ['Jennifer Doe', 'jennifer.doe@rockequity.com', 'Admin', ''],
    ['Ryan Tse', 'ryan.tse@rockequity.com', 'Collaborator', ''],
    ['Jane Rach', 'jane.rach@rockequity.com', 'User', ''],
    ['Eric Eay', 'eric@cpa-QofE.com', 'User', ''],
    ['Jack Plence', 'jack@fastserv.com', 'Collaborator', '']
  ];

  // const columns = React.useMemo(
  //   () => [
  //     {
  //       Header: 'Name',
  //       columns: [
  //         {
  //           Header: 'First Name',
  //           accessor: 'firstName',
  //         },
  //         {
  //           Header: 'Last Name',
  //           accessor: 'lastName',
  //         },
  //       ],
  //     },
  //     {
  //       Header: 'Info',
  //       columns: [
  //         {
  //           Header: 'Age',
  //           accessor: 'age',
  //         },
  //         {
  //           Header: 'Visits',
  //           accessor: 'visits',
  //         },
  //         {
  //           Header: 'Status',
  //           accessor: 'status',
  //         },
  //         {
  //           Header: 'Profile Progress',
  //           accessor: 'progress',
  //         },
  //       ],
  //     },
  //   ],
  //   []
  // )

  const data = React.useMemo(() => makeData(table), [])


  return (
    <div>
      <Table columns={columns} data={data} />
    </div>
  )
}