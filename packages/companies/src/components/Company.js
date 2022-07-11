/* 
    BEM TO DO
    - update table buttons to send email
    - edit user settings button in table
    - make add data connection button functional
    - 
*/

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import { Col, Row } from 'antd';
import styled from 'styled-components';
import getWindowWidth from '../functions/getWindowWidth';

import '../assets/css/antd.css';

import Sidebar from './sidebar/SidebarNew';
import Intro from './company/Intro';
import DataConnection from './company/DataConnection';
import UsersTable from './table/UsersTable';

const useStyles = makeStyles((theme) => ({
  bodyMain2: {
    //marginLeft: '250px',  // width of sidebar
    padding: '10px 15px',
    margin: 0,

    background: '#E5E5E5',

    height: '100%',
    minHeight: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    verticalAlign: 'top',

    position: 'relative',
    //transition: 'margin-left .4s',
  },

  sectionContent2: {
    display: 'block',
    top: 0,
    left: 0,
    color: '#000',
    fontFamily: 'Barlow',
  },


  wrapper2: {
    backgroundColor: '#fff',
    position: 'relative',

    display: 'table',
    width: '100%',
    height: '100%',
  },
}));

const Wrapper = styled.div`
  background-color: #fff;
  position: relative;
  display: table;
  width: 100%;
  height: 100%;
`

const StyledSection = styled.div`
  margin-left: ${props => props.isExpanded ? '250px' : props.sidebarWidth};
  transition: margin 0.3s ease;
  margin-right: 0;
  margin-top: 0;
  margin-bottom: 0;

  width: ${props => props.sidebarWidth ? `calc(100% - props.sidebarWidth)` : '100%'};
`


function debounce(fn, ms) {
  let timer
  return _ => {
    clearTimeout(timer)
    timer = setTimeout(_ => {
      timer = null
      fn.apply(this, arguments)
    }, ms)
  };
}

export default function Company() {
  const classes = useStyles();

  // BEM TO DO: get ID from company and pass as prop instead of company
  let { company } = useParams();

  // sidebar collapse
  localStorage.setItem('sidebar-collapsed', (window.innerWidth > 850) ? false : true);
  const sidebarCollapsed = localStorage.getItem('sidebar-collapsed');
  const [isExpanded, setIsExpanded] = useState(sidebarCollapsed ? false : true);

  const [sidebarWidth, setSidebarWidth] = useState(isExpanded ? '250px' : '50px')
  const [mainWidth, setMainWidth] = useState(window.innerWidth - parseInt(sidebarWidth))

  console.log('2 main width ', mainWidth, window.innerWidth, sidebarWidth)

  function setWidthSidebar() {
    let w = getWindowWidth();
    let x = (w > 850) ? '50px' : '0px';
    let y = (isExpanded && (w > 850)) ? '250px' : x;

    setSidebarWidth(y);
    let z = (w - parseInt(y))
    setMainWidth(z);

    return y;
  }

  // resize on sidebar collapse or window resize
  useEffect(() => {
    setWidthSidebar();
    
    const debouncedHandleResize = debounce(function handleResize() {
      if (isExpanded && (getWindowWidth() <= 850)) {
        setIsExpanded(false)
        localStorage.setItem('sidebar-collapsed', true);
        setSidebarWidth('0px')
      } else if (getWindowWidth() <= 850) {
        localStorage.setItem('sidebar-collapsed', true);
        setSidebarWidth('0px')
      } else {
        localStorage.removeItem('sidebar-collapse')
      }

      let y = setWidthSidebar();

    }, 100);

    
    if (sidebarWidth + mainWidth > getWindowWidth()) {
      console.log('NEED A FIX')
      let y = setWidthSidebar();
    }

    window.addEventListener('resize', debouncedHandleResize);

    // necessary cleanup
    return _ => {
      window.removeEventListener('resize', debouncedHandleResize)
    };
  });

  console.log('sidebar width', sidebarWidth)

  return (
    <Wrapper>
      <Col flex={sidebarWidth}>
        <Sidebar company={company} isExpanded={isExpanded} setIsExpanded={setIsExpanded} mainWidth={mainWidth} setWidthSidebar={setWidthSidebar} />
      </Col>
      <StyledSection sidebarWidth={sidebarWidth} >
        <main className={classes.bodyMain2}>
          <div className={classes.sectionContent2}>
            <Intro company={company} isExpanded={isExpanded} mainWidth={mainWidth} />
            <DataConnection company={company} />
            <UsersTable company={company} />
          </div>
        </main>
      </StyledSection>
    </Wrapper>
  );
};