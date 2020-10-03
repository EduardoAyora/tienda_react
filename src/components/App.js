import React from 'react';
import {Main} from './Main';
import {BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <Router basename={'/tienda_react'}>
      <Main />
    </Router>
  );
}

export default App;
