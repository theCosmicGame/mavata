import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { MDBDatatable, MDBBtn, MDBIcon } from 'mdbReactUiKit';
import Wrapper from '../Wrapper';
import styled from 'styled-components';

import { rows } from '../../variables/Users';

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

export default function UsersTable(props) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 2000);
  }, []);

  const cols = [
    { label: 'Name', field: 'name' },
    { label: 'Email', field: 'email' },
    { label: 'Role', field: 'role' },
    { label: 'Actions', field: 'buttons', sort: false },
  ]

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
              onClick={(event) => removeUserHandler(idx, event)}
            >
              <MDBIcon icon="trash" />
            </StyledButton>
          </>
        ),
      };
    })
  }

  const [actionData, setActionData] = useState({
    columns: cols,
    rows: addCustomButtons(rows)
  });

  
  const removeHandler = (index, e) => {
    setActionData((prevState) => {
      return {
        ...prevState,
        rows: actionData.rows.filter((item, i) => i !== index),
      }
    })
  }

  const handleRemove = (index, e) => {
    setActionData((prevState) => {
      let l = actionData.rows.length
      console.log('remove', actionData.rows[index], index, actionData.rows)

      let begIdx = (index === 0 ? 1 : 0)
      let endIdx = (index === l - 1 ? l - 1 : l)
      let newArr = [...actionData.rows.slice(begIdx, index), ...actionData.rows.slice(index + 1, endIdx)]
      newArr = addCustomButtons(newArr)

      console.log('newArr', newArr)

      return {
        ...prevState,
        // rows: actionData.rows.filter((item, i) => i !== index),
        rows: newArr
      }
    })
  }

  const removeUserHandler = (index, e) => {
    let l = actionData.rows.length
      console.log('remove', actionData.rows[index], index, actionData.rows)

      let begIdx = (index === 0 ? 1 : 0)
      let endIdx = (index === l - 1 ? l - 1 : l)
      let newArr = [...actionData.rows.slice(begIdx, index), ...actionData.rows.slice(index + 1, endIdx)]
      newArr = addCustomButtons(newArr)

    setActionData({
      columns: cols,
      rows: newArr
    })
  }

  return (
    <Wrapper>
      <TableContainer data={actionData}>
        {props.children}
      </TableContainer>
    </Wrapper>
  );
}