import { mount } from 'authMfe/AuthApp';
import React, { useRef, useEffect, useContext } from 'react';
import { useLocation, UNSAFE_NavigationContext } from 'react-router-dom';


export default ({ onSignIn }) => {
  const ref = useRef(null);
  let location = useLocation();
  const { navigator } = useContext(UNSAFE_NavigationContext);
  
  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      initialPath: location.pathname,
      onNavigate: ({ pathname: nextPathname }) => {        
        const { pathname } = history.location;

        if (pathname !== nextPathname) {
          navigator.push(nextPathname);
        }
      },

      onSignIn,
    });

    const unlisten = navigator.listen(onParentNavigate);

    return unlisten; // <-- cleanup listener on component unmount

  }, []);

  return <div ref={ref} />;
};