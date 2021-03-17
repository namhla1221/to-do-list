import React from 'react';
import ReactDOM from 'react-dom';
import Global from './components/Global/Global'
import App from './components/App/App';


ReactDOM.render(
  <React.StrictMode>
    <Global><App /></Global>
  </React.StrictMode>,
  document.getElementById('root')
);


