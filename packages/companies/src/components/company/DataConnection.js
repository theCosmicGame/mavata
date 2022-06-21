import React from 'react';
import styled from 'styled-components';
import Wrapper from '../Wrapper';

import DataLayer from '../../assets/img/icons/data-layer.png';
import ButtonWorkflow from '../buttons/ButtonWorkflow';

const ImgEmpty = styled.img`
  margin: auto;
  padding: 30px;

  /* center an image */
  display: block;
  align: center;
`

export default function DataConnection() {

  return (
    <Wrapper>
      <ImgEmpty src={DataLayer} alt='Add Connection' />
      <ButtonWorkflow to='/'>Add Data Connection</ButtonWorkflow>
    </Wrapper>
  )
}