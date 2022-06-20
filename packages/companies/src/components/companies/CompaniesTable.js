import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import { MDBDataTableV5 } from 'mdbreact';
import styled from 'styled-components';


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

export default function CompaniesTable() {
  const table = [
                  ['FastServe HVAC', 'Business Services', 'Admin'],
                  ['Hong Business Solutions', 'Business Services', 'Admin'],
                  ['Kearn Manufacturing', 'Industrials', 'Admin'],
                  ['RetChem', 'Industrials', 'Admin'],
                  ['ChallengeT', 'Business Services', 'Admin'],
                  ['Excalipre', 'Software', 'Admin'],
                  ['OilFast', 'Franchisor', 'Admin'],
                  ['Rigid Bikes', 'Consumer', 'Admin'],
                  ['UCare', 'Healthcare', 'Admin'],
                  ['LifeWorx', 'Healthcare', 'Admin']
                ];

  let rows = [];
  table.forEach((row) => {
    let r = { name: row[0], sector: row[1], role: row[2], link: `<a href="/companies/${row[0].trim()}" >View</a>` }
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
        label: 'Sector', 
        field: 'sector',
        width: 200,
      },
      { 
        label: 'Your Role', 
        field: 'role',
        width: 150,
       },
    ],
  
    rows: rows,
  });


  return (
    <React.Fragment>
      <TableContainer>
        {/* <DataTable
          columns={columns} 
          data={rows} 
          customStyles={customStyles} 
          id='data-table'
          
          direction="auto" 
          pagination 
          responsive 
          striped 
          highlightOnHover 
          pointerOnHover 
          sortIcon={sortIcon} 
        /> */}
        <MDBDataTableV5 
              hover 
              entriesOptions={[5, 10, 20, 25]} 
              entries={5} 
              striped 
              pagesAmount={4} 
              data={datatable} 
              searchTop
              searchBottom={false}
            />
      </TableContainer>
    </React.Fragment>
  )
}