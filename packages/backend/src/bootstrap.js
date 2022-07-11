import App from './App';

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_backend-dev-root');

  if (devRoot) {
    mount(devRoot, { defaultHistory: createBrowserHistory() });
  }
}

// We are running through container
// and we should export the mount function
export { mount };
