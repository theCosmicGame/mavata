import React from 'react';
import styled from 'styled-components';

import EditProfileForm from './EditProfileForm';

const StyledDiv = styled.div`
  background-color: #a892ee;
  padding: 1rem;
  margin: 2rem auto;
  width: 50rem;
  max-width: 95%;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25)
`

export default function NewProfile(props) {
  const onSaveProfile = (enteredData) => {
    const data = {
      ...enteredData
    };

    props.onUpdateProfile(data)
  }

  return (
    <StyledDiv>
      <EditProfileForm onSaveProfile={onSaveProfile} />
    </StyledDiv>
  )
}