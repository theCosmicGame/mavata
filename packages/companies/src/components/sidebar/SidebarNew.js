/*!

=========================================================
* Light Bootstrap Dashboard React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styled, { keyframes } from 'styled-components';

import OutlinedButton from '../buttons/OutlinedButton';

import GridOnIcon from '@material-ui/icons/GridOn';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import AssessmentIcon from '@material-ui/icons/Assessment';
import PhoneIcon from '@material-ui/icons/Phone';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import DescriptionIcon from '@material-ui/icons/Description';

const animateLeft = keyframes`
  from {
    left: -300px;
    opacity: 0;
  }
  to {
    left: 0;
    opacity: 1;
  }
`

const SidebarContainer = styled.div`
  @media screen and (max-width: 850px) {
    display: none!important;
  }
`

const SidebarHeader = styled.div`
    display: flex;
    align-items: center;
    padding: 16px;
`

const SidebarItems = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 8px;
`

const SidebarItem = styled.div`
  display: ${props => props.isExpanded ? 'flex' : 'none'};
  align-items: center;
  padding: 16px 8px;
  border-radius: 5px;
  transition: background-color 0.2s;
  cursor: pointer;

  &:hover {
    background-color: #EEF1F6;
  }
`

const SidebarDiv = styled.div`
  display: ${props => props.isExpanded ? 'flex' : 'none'};
  align-items: center;
  padding: 16px 8px;

  &:after {
    display: ${props => props.isExpanded ? 'flex' : 'none'};
  };
`

const IconWrapper = styled.div`
  overflow: hidden;
  transition: all 0.3s ease-out;
  width: 1.25em;
  align: center;
  margin: 0px 5px;
  align-items: center;
  vertical-align: middle;
  transform: ${(props) => (props.isExpanded ? `rotate(0deg)` : `rotate(90deg)`)};
`

const rotate = keyframes`
    -moz-transition: all .5s linear;
    -webkit-transition: all .5s linear;
    transition: all .5s linear;

    &.down {
      -moz-transform: rotate(90deg);
      -webkit-transform: rotate(90deg);
      transform: rotate(90deg);
    }
`;

const RotatingIcon = styled(ArrowForwardIosIcon)`
    -moz-transition: all .5s linear;
    -webkit-transition: all .5s linear;
    transition: all .5s linear;

    &.down {
      -moz-transform: rotate(90deg);
      -webkit-transform: rotate(90deg);
      transform: rotate(90deg);
    }
`

const SideDiv = styled.div`
  width: ${props => props.isExpanded ? '250px' : '52px'};
`

const useStyles = makeStyles((theme) => ({
  sidebar2: {
    display: 'flex',
    flexDirection: 'column',
    // display: 'table-cell',
    // width: '15%',
    // verticalAlign: 'top',

    position: 'fixed!important',
    left: 0,
    bottom: 0,
    top: '75px',
    minHeight: 'calc(100vh - 75px)',

    width: '250px',
    height: '100%',
 
    boxSizing: 'border-box',
    background: '#FFFFFF',
    border: '1px solid #EEF1F6',

    zIndex: 1,
    overflow: 'auto',

    '& div': {
      padding: '8px',
      fontSize: '24px',
      display: 'block',
    },
    
    [theme.breakpoints.down('850px')]: {
      display: 'none!important',
    },
  },

  sidebarCollapsed: {
    display: 'flex',
    flexDirection: 'column',
    
    width: '52px',
    
    position: 'fixed',
    left: 0,
    bottom: 0,
    top: '75px',    // height of the navbar

    boxSizing: 'border-box',
    background: '#FFFFFF',
    border: '1px solid #EEF1F6',

    [theme.breakpoints.up('993')]: {
      display: 'block!important',
    },

    '& div': {
      padding: '8px',
      fontSize: '24px',
      display: 'block',
    },

    '& + $sidebarIcon': {
      marginRight: 0,
    },

    '& + $sidebarText': {
      display: 'none',
    },
    
    '& + $sidebarLogo': {
      display: 'none',
    },
  },

  sidebarIcon: {
    width: '1.25em',
    height: '1.25em',
    marginRight: '5px',
    cursor: 'pointer',
    userSelect: 'none',
    paddingRight: '10px',
    backgroundColor: '#fff',
  },

  sidebarLogo: {
    fontSize: '16px',
    display: 'inline-block',
    alignText: 'left',
  },

  sidebarText: {
    fontSize: '16px',
    paddingLeft: '5px',
  },

  hide: {
    display: 'none',
    visibility: 'none',
  },
}));

export default function Sidebar( { isExpanded, setIsExpanded, mainWidth, setWidthSidebar } ) {
  const classes = useStyles();
  
    
  const handleToggle = () => {
    if (isExpanded) {
      setIsExpanded(false);
      localStorage.setItem('sidebar-collapsed', true);
    } else {
      setIsExpanded(true);
      localStorage.removeItem('sidebar-collapsed');
    }
  };

  // default is expanded

  return (
    <SidebarContainer isExpanded={isExpanded} >
      <SideDiv isExpanded={isExpanded} className={isExpanded ? classes.sidebar2 : classes.sidebarCollapsed }>
        <SidebarHeader>
          <IconWrapper isExpanded={isExpanded} onClick={handleToggle}  >
            <ArrowForwardIosIcon/>
            {/* BEM TO DO: show company name when expanded */}
          </IconWrapper>
        </SidebarHeader>
        <SidebarItems>
          <SidebarItem isExpanded={isExpanded} >
            {isExpanded ? <AssessmentIcon fontSize='small' /> : '' }
            <span className={isExpanded ? classes.sidebarText : classes.hide }>Quarterly Reports</span>
          </SidebarItem>
          <SidebarItem isExpanded={isExpanded} >
            {isExpanded ? <DescriptionIcon fontSize='small' /> : '' }
            <span className={isExpanded ? classes.sidebarText : classes.hide }>Financial Reports</span>
          </SidebarItem>
          <SidebarItem isExpanded={isExpanded} >
            {isExpanded ? <MonetizationOnIcon fontSize='small' /> : '' }
            <span className={isExpanded ? classes.sidebarText : classes.hide }>Cash Flows</span>
          </SidebarItem>
          <SidebarItem isExpanded={isExpanded} >
            {isExpanded ? <PhoneIcon fontSize='small' /> : '' }
            <span className={isExpanded ? classes.sidebarText : classes.hide }>Meeting Notes</span>
          </SidebarItem>
          <SidebarItem isExpanded={isExpanded} >
            {isExpanded ? <GridOnIcon fontSize='small' /> : '' }
            <span className={isExpanded ? classes.sidebarText : classes.hide }>Misc</span>
          </SidebarItem>
        </SidebarItems>
        <SidebarDiv>
          <OutlinedButton to='company/data/newfolder' isExpanded={isExpanded}>Add a folder</OutlinedButton>
        </SidebarDiv>
      </SideDiv>
    </SidebarContainer>
  );
}