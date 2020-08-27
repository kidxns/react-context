import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/App';
import * as serviceWorker from './serviceWorker';

// context
import StoreContext from './context/Store';

// css
import './index.css';

const renderApp = () => {
  return (
    <React.StrictMode>
      <StoreContext>
        <App />
      </StoreContext>
    </React.StrictMode>
  );
};

ReactDOM.render(renderApp(), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
