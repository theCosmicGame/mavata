import React from 'react';
import SidebarAnt from './sidebar/SidebarAnt';
import NavbarAnt from './sidebar/NavbarAnt';

export default function Settings() {
  return (
    <React.Fragment>
      <NavbarAnt />
      <SidebarAnt />
    </React.Fragment>
  )
}