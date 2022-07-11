import { Link as RouterLink } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.ul`
    display: inline-block;
    margin: 4px;
    padding: 0;
`

const StyledButton = styled(RouterLink)`
  /* .w-button */
  display: inline-block;
  padding: 9px 15px;
  background-color: #3898EC;
  color: white;
  border: 0;
  line-height: inherit;
  text-decoration: none;
  cursor: pointer;
  border-radius: 0;

  /* .outlined-button */
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-top: 0px;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  border-style: solid;
  border-width: 1px;
  border-radius: 3px;
  background-color: transparent;
  -webkit-transition: all 350ms ease;
  transition: all 350ms ease;
  font-family: 'Playfair Display', sans-serif;
  font-size: 16px;
  font-weight: 400;
  text-transform: uppercase;

  &:hover {
    margin-left: 0px;
    border-color: transparent;
    background-color: #15113b;
    box-shadow: none;
    -webkit-transform: translate(5px, 0px);
    -ms-transform: translate(5px, 0px);
    transform: translate(5px, 0px);
    color: #fff;
    text-decoration: none;
  }

  /* .dark-outline */
  color: #0c0a89;
  border-color: #0c0a89;
  font-weight: bold;

`

export default function ButtonNew(props) {

  return (
    <ButtonWrapper>
      <StyledButton to={props.to} onClick={props.onClick}>{props.children}</StyledButton>
    </ButtonWrapper>
  )
}