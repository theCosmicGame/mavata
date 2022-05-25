import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


const mount = (el) => {
    console.log('heree')
    ReactDOM.render(<App />, el);
  };


if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#_companies-dev-root');
  
    // Assuming our container doesnt have an element
    // with id 'dev-products'....
    if (el) {
      // We are probably running in isolation
      mount(el);
    }
  }

  export { mount };
