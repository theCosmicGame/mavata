import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Mount function to start up the app
const mount = (el) => {
  console.log('hello')
  ReactDOM.render(<App />, el);
  console.log('hello2')
};

// If we are in development and in isolation,
// call mount immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_companies-dev-root');

  if (devRoot) {
    mount(devRoot);
  }
}

// We are running through container
// and we should export the mount function
export default { mount };