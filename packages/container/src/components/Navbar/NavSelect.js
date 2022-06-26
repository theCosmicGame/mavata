import React, { useState, Dropdown } from 'react';
import styled from 'styled-components';
import useStyles from '../styling/NavStyle';
import { NavLink } from 'react-router-dom';
import { ButtonDropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'reactstrap';

const SelectToggle = styled(DropdownToggle)`
  font-family: Playfair Display;
  font-size: 24px;
`

const SelectButton = styled(ButtonDropdown)`
  background: #000 !important;
`

export default function NavSelect({ linkMap }) {
  const classes = useStyles();

  const [dropdownOpen, setDropdownOpen] = useState(true);

  function toggle() {
    setDropdownOpen(!dropdownOpen)
  }
  return (
    <React.Fragment>
      <SelectButton isOpen={dropdownOpen} toggle={toggle} variant='primary' >
        <SelectToggle caret >Navigate </SelectToggle>
        <DropdownMenu>
          {linkMap.map(([title, url], index) => (
              <DropdownItem tag={NavLink} key={index} exact to={url}>
                  {title}
              </DropdownItem>
          ))}
        </DropdownMenu>
      </SelectButton>
    </React.Fragment>
  )
}