import React from 'react';
import {Main} from './Main';
import {BrowserRouter as Router} from "react-router-dom";
import {CategoriesProvider} from '../context/CategoriesContext'
import {CartProvider} from '../context/CartContext'

function App() {
  return (
    <Router basename={'/tienda_react'}>
      <CartProvider>
        <CategoriesProvider>
          <Main />
        </CategoriesProvider>
      </CartProvider>
    </Router>
  );
}

export default App;
