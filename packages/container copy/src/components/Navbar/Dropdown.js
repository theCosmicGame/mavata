import React from 'react';
import useStyles from '../styling/NavStyle';
import styled from 'styled-components';

const NavWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #00BAF0;
  background: linear-gradient(to left, #f46b45, #eea849);
  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  color: #FFF;
  height: 40px;
  width: 40px;
  padding: 1em;
`

const StyledInput = styled.input.attrs({ type: 'checkbox' })`
  display: none;

  '&:checked + ${MenuButtonContainer} ${MenuButton}::before' {
    margin-top: 0px;
    transform: rotate(405deg);
  };

  '&:checked + ${MenuButtonContainer} ${MenuButton}' {
    background: rgba(255, 255, 255, 0);
  };

  '&:checked + ${MenuButtonContainer} ${MenuButton}::after' {
    margin-top: 0px;
    transform: rotate(-405deg);
  };

  @media (max-width: 767px) {
    '& ~ ${StyledMenu} li' {
      border: 1px solid #333;
      height: 2.5em;
      padding: 0.5em;
      transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
    }
  };
`

const MenuButton = styled.div`
  &, &::before, &::after {
    display: block;
    background-color: #fff;
    position: absolute;
    height: 4px;
    width: 30px;
    transition: transform 400ms cubic-bezier(0.23, 1, 0.32, 1);
    border-radius: 2px;
  };

  &::before {
    content: '';
    margin-top: -8px;
  };

  &::after {
    content: '';
    margin-top: 8px;
  };
`

const MenuButtonContainer = styled.label`
  display: none;
  height: 100%;
  width: 30px;
  cursor: pointer;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 767px) {
    display: flex;
  };
`

const StyledMenu = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
  margin: 0;
  padding: 0;

  '& > li' {
    margin: 0 1rem;
    overflow: hidden;
  };

  @media (max-width: 767px) {
    position: absolute;
    top: 0;
    margin-top: 50px;
    left: 0;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;

    '& > li' {
      display: flex;
      justify-content: center;
      margin: 0;
      padding: 0.5em 0;
      width: 100%;
      color: white;
      background-color: #222;
    };

    '& > li:not(:last-child)' {
      border-bottom: 1px solid #444;
    };
  };
`

export default function Dropdown() {
  const classes = useStyles();

  return (
    <NavWrap>
      {/* <input className={classes.menuToggle} id="menuToggle" type="checkbox" />
      <label className={classes.dropdownMenuContainer} for="menuToggle">
        <div className={classes.dropdownMenuButton}></div>
      </label>
        <ul className={classes.dropdownMenu} > */}
      <StyledInput id="menuToggle" />
        <MenuButtonContainer for="menuToggle">
          <MenuButton></MenuButton>
        </MenuButtonContainer>
        <StyledMenu>
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
          <li>Four</li>
          <li>Five</li>
        </StyledMenu>
    </NavWrap>
  )
}