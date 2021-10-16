import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

enum Settings {
  OFFERS_COUNT= 7,
}

ReactDOM.render(
  <React.StrictMode>
    <App offersCount = {Settings.OFFERS_COUNT} />
  </React.StrictMode>,
  document.getElementById('root'));
