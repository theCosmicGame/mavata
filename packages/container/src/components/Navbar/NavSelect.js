import React, { useState, Dropdown } from 'react';
import styled from 'styled-components';
import useStyles from '../styling/NavStyle';
import { NavLink } from 'react-router-dom';
import { ButtonDropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'reactstrap';

const SelectToggle = styled(DropdownToggle)`
  font-family: Playfair Display;
`

export default function NavSelect({ linkMap }) {
  const classes = useStyles();

  const [dropdownOpen, setDropdownOpen] = useState(true);

  function toggle() {
    setDropdownOpen(!dropdownOpen)
  }
  return (
    <React.Fragment>
      <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
        <SelectToggle caret>Navigate</SelectToggle>
        <DropdownMenu>
          {linkMap.map(([title, url], index) => (
              <DropdownItem tag={NavLink} key={index} exact to={url}>
                  {title}
              </DropdownItem>
          ))}
        </DropdownMenu>
      </ButtonDropdown>
    </React.Fragment>
  )
}