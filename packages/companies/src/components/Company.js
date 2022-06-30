import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Col, Row } from 'antd';
import styled from 'styled-components';

import getWindowWidth from '../functions/getWindowWidth';

import Sidebar from './sidebar/SidebarNew';
import Intro from './company/Intro';
import DataConnection from './company/DataConnection';
import UsersTable from './company/UsersTable';
import UsersTableEdit from './company/UsersTableEdit';


const useStyles = makeStyles((theme) => ({
  bodyMain2: {
    //marginLeft: '250px',  // width of sidebar
    padding: '10px 15px',
    margin: 0,

    background: '#E5E5E5',

    height: '100%',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    verticalAlign: 'top',

    position: 'relative',
    //transition: 'margin-left .4s',

    [theme.breakpoints.down('850')]: {
      maxWidth: '100%',
      width: '100%',
    },
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

  // useEffect(() => {
  //   const debouncedHandleResize = debounce(function handleResize() {
  //     setWidthSidebar()
  //   }, 100);

  //   window.addEventListener('resize', debouncedHandleResize);

  //   return _ => {
  //     window.removeEventListener('resize', debouncedHandleResize)
  //   };
  // });

  useEffect(() => {
    setWidthSidebar();

    const debouncedHandleResize = debounce(function handleResize() {
      if (window.innerWidth <= 850) {
        setIsExpanded(false)
        localStorage.setItem('sidebar-collapsed', true);
        // setSidebarWidth('0px')
      } else {
        localStorage.removeItem('sidebar-collapse')
      }
      
      let y = setWidthSidebar();

    }, 100);

    window.addEventListener('resize', debouncedHandleResize);

    // necessary cleanup
    return _ => {
      window.removeEventListener('resize', debouncedHandleResize)
    };
  });

  return (
    <React.Fragment>
      <Wrapper>
        <Sidebar isExpanded={isExpanded} setIsExpanded={setIsExpanded} mainWidth={mainWidth} setWidthSidebar={setWidthSidebar} />
        
        <StyledSection isExpanded={isExpanded} sidebarWidth={sidebarWidth}>
          <main className={classes.bodyMain2}>
            <div className={classes.sectionContent2}>
              <Intro isExpanded={isExpanded} mainWidth={mainWidth} />
              <DataConnection />
              <UsersTable />
            </div>
          </main>
        </StyledSection>

      </Wrapper>
    </React.Fragment>
  );
};