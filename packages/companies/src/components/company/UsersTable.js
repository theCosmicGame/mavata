import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import { MDBDataTableV5 } from 'mdbreact';
import styled from 'styled-components';

import Wrapper from '../Wrapper';

const TableContainer = styled(Container)`
    padding: 10px 30px;
`

const customStyles = {
  // rows: {
  //     style: {
  //         minHeight: '72px', // override the row height
  //     },
  // },
  head: {
		style: {
			fontSize: '16px',
			fontWeight: 600,
		},
	},
  headCells: {
      style: {
          paddingLeft: '8px', // override the cell padding for head cells
          paddingRight: '8px',
      },
  },
  cells: {
      style: {
          paddingLeft: '8px', // override the cell padding for data cells
          paddingRight: '8px',
      },
  },
};

export default function UsersTable() {
  const table = [
                  ['Jennifer Doe', 'jennifer.doe@rockequity.com', 'Admin', ''],
                  ['Ryan Tse', 'ryan.tse@rockequity.com', 'Collaborator', ''],
                  ['Jane Rach', 'jane.rach@rockequity.com', 'User', ''],
                  ['Eric Eay', 'eric@cpa-QofE.com', 'User', ''],
                  ['Jack Plence', 'jack@fastserv.com', 'Collaborator', '']
                ];

  let rows = [];
  table.forEach((row) => {
    let r = { name: row[0], email: row[1], role: row[2], buttons: `<a href="/" >View</a>` }
    rows.push(r)
  });

  const columns = [
    { 
      name: 'Name', 
      field: 'name', 
      selector: row => row.name,
      width: 300,
    },
    { 
      name: 'Sector', 
      field: 'sector',
      selector: row => row.sector,
      width: 300,
    },
    { 
      name: 'Your Role', 
      field: 'role',
      selector: row => row.role,
      width: 100,      
     },
  ]

  const [datatable, setDatatable] = useState({
    columns: [
      { 
        label: 'Name', 
        field: 'name', 
        width: 450,
      },
      { 
        label: 'Email', 
        field: 'email',
        width: 200,
      },
      { 
        label: 'Your Role', 
        field: 'role',
        width: 150,
       },
       {
        label: '',
        field: 'buttons',
        width: 50,
       },
    ],
  
    rows: rows,
  });


  return (
    <Wrapper>
      <TableContainer maxWidth='lg' >
        <MDBDataTableV5 
            hover 
            entriesOptions={[5, 10, 20, 25]} 
            entries={10} 
            striped 
            pagesAmount={4} 
            data={datatable} 
            searchTop
            searchBottom={false}
          />
      </TableContainer>
    </Wrapper>
  )
}
