/* 
    BEM TO DO
    - update table buttons to send email
    - edit user settings button in table
*/

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { MDBDatatable, MDBBtn, MDBIcon } from 'mdbReactUiKit';
import Wrapper from '../Wrapper';
import styled from 'styled-components';

import { rows, cols } from '../../variables/Users';

const TableContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
`

const StyledTable = styled(MDBDatatable)`
  width: 80%;
`

const StyledLink = styled(Link)`
  color: inherit;
`

const StyledButton = styled(MDBBtn)`
  padding: 3px!important;
  margin: 3px!important;
`
const Table = ({ tableData }) => {
  // const [actionData, setActionData] = useState({
  //   columns: cols,
  //   rows: addCustomButtons(rows)
  // });

  return (
    <StyledTable
      hover
      striped

      data={tableData}
      entriesOptions={[5, 10, 20]}
      entries={10}

      fixedHeader
      maxHeight='460px'
    />
  )
}


export default function UsersTable() {
  const [rowData, setRowData] = useState(addCustomButtons(rows))
  
  const [tableData, setTableData] = useState({
    columns: cols,
    rows: rowData
  })

  function addCustomButtons(rows) {
    return rows.map((row, idx) => {
      return {
        ...row,
        index: idx,
        email: (
          <StyledLink
            to='#'
            onClick={(e) => {
              window.location.href = `mailto:${row.emailraw}`;
              e.preventDefault();
            }}
          >
            {row.emailraw}
          </StyledLink>
        ),
        buttons: (
          <>
            <StyledButton
              size='sm'
              floating
              className='message-btn'
              onClick={() => console.log(`send a message to ${row.emailraw}`)}
            >
              <MDBIcon icon='envelope' />
            </StyledButton>
            <StyledButton outline size='sm' floating className='call-btn' onClick={() => console.log(`edit user settings`)}>
              <MDBIcon icon='arrow-right' />
            </StyledButton>
            <StyledButton
              size='sm'
              floating
              className='remove-user-btn'
              onClick={() => deleteRow(idx)}
            >
              <MDBIcon icon="trash" />
            </StyledButton>
          </>
        ),
      };
    })
  }


  const removeRowHandler = (index) => {
    if (rowData.length > 1) {
      var updatedRows = [...rowData]
      var indexToRemove = updatedRows.findIndex(x => x.index === index)

      if (indexToRemove > -1) {
        var newRows = [
          ...updatedRows.slice(0, indexToRemove),
          ...updatedRows.slice(indexToRemove + 1, updatedRows.length)
        ]

        setRowData(newRows)
        setTableData({
          columns: cols,
          rows: newRows
        })
      }
    }
  }

  console.log('rowData', rowData)

  const deleteRow = (index) => {
    if (rowData.length > 1) {
      var updatedRows = [...rowData]
      console.log('1st rowData', updatedRows)

      var indexToRemove = updatedRows.findIndex(x => x.index === index)
      console.log('remove', indexToRemove, index)

      if (indexToRemove > -1) {
        updatedRows.splice(indexToRemove, 1)
        var newRows = addCustomButtons(updatedRows)

        console.log(updatedRows, newRows)
        setRowData(newRows)
        setTableData({
          columns: cols,
          rows: newRows
        })
      }
    }
  }

  const removeRow = item => () => {
    let updatedRows = tableData.rows.filter(row => row.index === item.index);
    setRowData(updatedRows)
    setTableData({
      columns: cols,
      rows: updatedRows
    })
  }

  return (
    <Wrapper>
      <TableContainer>
        <Table tableData={tableData} />
      </TableContainer>
    </Wrapper>
  );
}