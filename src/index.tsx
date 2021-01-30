import React from 'react';
import { render } from 'react-snapshot';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { SWRConfig } from 'swr';

render(
  <React.StrictMode>
    <SWRConfig
      value={{
        revalidateOnFocus: false,
        fetcher: (url) => fetch(url).then((r) => r.text()),
      }}
    >
      <Router>
        <Route path="/:bookPath?/:chapterPath?">
          <App />
        </Route>
      </Router>
    </SWRConfig>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
