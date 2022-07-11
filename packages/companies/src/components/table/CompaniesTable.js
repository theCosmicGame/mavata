import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MDBDatatable, MDBBtn, MDBIcon } from 'mdbReactUiKit';
import styled from 'styled-components';
import strToUrl from '../../functions/strToUrl';
import { rows } from '../../variables/companies';

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledButton = styled(MDBBtn)`
  padding: 3px!important;
  margin: 3px!important;
`

const StyledTable = styled(MDBDatatable)`
  width: 80%;
  align: center;
`

export default function CompaniesTable() {

  const [actionData, setActionData] = useState({
    columns: [
      { label: 'Name', field: 'name' },
      { label: 'Sector', field: 'sector' },
      { label: 'Role', field: 'role' },
      { label: '', field: 'action', sort: false, width: 10 },
    ],
    rows: rows.map((row) => {
      return {
        ...row,
        action: (
          <Link to={`/companies/${strToUrl(row.name)}`}>
            <StyledButton outline size='sm' floating className='arrow-btn' onClick={() => console.log(`edit user settings`)}>
              <MDBIcon icon='arrow-right' />
            </StyledButton>
          </Link>
        ),
      }
    })
  });


  return (
    <StyledContainer>
      <StyledTable
          hover
          striped

          data={actionData}
          advancedData
          entriesOptions={[5, 10, 20]}
          entries={10}

          fixedHeader
          maxHeight='460px'
        />
    </StyledContainer>
  )
}