import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/Home'

import ReactGA from 'react-ga';

ReactGA.initialize('UA-000000-01');
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
  return (
    <Home/>
  );
}

export default App;
