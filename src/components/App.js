import React from 'react';
import {Main} from './Main';
import {BrowserRouter as Router} from "react-router-dom";
import {CategoriesProvider} from '../context/CategoriesContext'

function App() {
  return (
    <Router basename={'/tienda_react'}>
      <CategoriesProvider>
        <Main />
      </CategoriesProvider>
    </Router>
  );
}

export default App;
