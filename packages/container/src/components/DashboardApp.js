import { mount } from 'dashboardMfe/DashboardApp';
import React, { useRef, useEffect } from 'react';

export default () => {
  const ref = useRef(null);   // useRef thus ref persists for the full lifetime of the component
  
  useEffect(() => {
    mount(ref.current);
    // empty array says only try to use the useEffect function when our dashboard app component is FIRST rendered to the screen
  }, []);

  return <div ref={ref} />;
};
