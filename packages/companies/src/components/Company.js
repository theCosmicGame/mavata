import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Col, Row } from 'antd';
import styled from 'styled-components';

import 'antd/dist/antd.css';

import Sidebar from './sidebar/SidebarNew';
import CompaniesHeading from './companies/CompaniesHeading';
import Intro from './company/Intro';


const useStyles = makeStyles((theme) => ({
  bodyMain2: {
    //marginLeft: '250px',  // width of sidebar
    padding: '10px 15px',
    margin: 0,

    background: '#E5E5E5',

    minHeight: '100%',
    height: '100vh',
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

  localStorage.setItem('sidebar-collapsed', true);
  const sidebarCollapsed = localStorage.getItem('sidebar-collapsed');
  const [isExpanded, setIsExpanded] = useState(sidebarCollapsed ? false : true);
  const [sidebarWidth, setSidebarWidth] = useState(isExpanded ? '250px' : '50px')

  useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      let x = (window.innerWidth > 850) ? '50px' : '0px';
      setSidebarWidth(isExpanded && (window.innerWidth > 850) ? '250px' : x)
    }, 100);

    window.addEventListener('resize', debouncedHandleResize);

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
            <Sidebar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
          </Col>
          <div style={contentStyle}>
            <main className={classes.bodyMain2}>
              <div className={classes.sectionContent2}>
                <Intro />
              </div>
            </main>
          </div>
        </Row>
      </div>
    </React.Fragment>
  );
};