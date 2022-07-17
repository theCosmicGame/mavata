import { mount } from 'marketingMfe/MarketingApp';
import React, { useRef, useEffect, useContext } from 'react';
import { useLocation, UNSAFE_NavigationContext } from 'react-router-dom';

export default () => {
  const ref = useRef(null);
  let location = useLocation();
  const { navigator } = useContext(UNSAFE_NavigationContext);
  
  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      initialPath: location.pathname,
      onNavigate: ({ pathname: nextPathname }) => {        
        const { pathname } = navigator.location;

        if (pathname !== nextPathname) {
          navigator.push(nextPathname);
        }
      },
    });

    const unlisten = navigator.listen(onParentNavigate);

    return unlisten; // <-- cleanup listener on component unmount

  }, []);

  return <div ref={ref} />;
};