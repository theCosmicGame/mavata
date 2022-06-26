import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Col, Row } from 'antd';
import styled from 'styled-components';

import '../assets/css/antd.css';

import Sidebar from './sidebar/SidebarNew';
import Intro from './company/Intro';
import DataConnection from './company/DataConnection';
import UsersTable from './company/UsersTable';


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

  

  // resize on sidebar collapse or window resize
  useEffect(() => {
    const debouncedHandleResize = debounce(async function handleResize() {
      let x = (window.innerWidth > 850) ? '50px' : '0px';
      let y = (isExpanded && (window.innerWidth > 850)) ? '250px' : x;
      await setSidebarWidth(y);

      if (isExpanded && (window.innerWidth <= 850)) {
        setIsExpanded(false)
        localStorage.setItem('sidebar-collapsed', true);
      }

      let z = (window.innerWidth - parseInt(y))
      setMainWidth(z);
      setMainWidth(z);
      console.log('2 main width ', mainWidth, window.innerWidth, z, parseInt(y))
    }, 100);

    window.addEventListener('resize', debouncedHandleResize);

    // necessary cleanup
    return _ => {
      window.removeEventListener('resize', debouncedHandleResize)
    };
  });
  
  const contentStyle = {
    marginLeft: isExpanded ? '250px' : sidebarWidth,
    transition: 'margin 0.2s ease',
    
    marginRight: 0,
    marginTop: 0,
    marginBottom: 0,
    width: '100%',
  };

  return (
    <React.Fragment>
      <div className={classes.wrapper2}>
        <Row>
          <Col flex={sidebarWidth}>
            <Sidebar isExpanded={isExpanded} setIsExpanded={setIsExpanded} setMainWidth={setMainWidth} />
          </Col>
          <div style={contentStyle}>
            <main className={classes.bodyMain2}>
              <div className={classes.sectionContent2}>
                <Intro isExpanded={isExpanded} mainWidth={mainWidth} />
                <DataConnection />
                <UsersTable />
              </div>
            </main>
          </div>
        </Row>
      </div>
    </React.Fragment>
  );
};