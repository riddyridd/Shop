import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Navbar from "./Message.js/Navbar" 
import ProductsContextProvider from "./Global/ProductsContext"
import CartContextProvider from './Global/CartContext';
import Products from "./Message.js/Products"
import Cart from "./Message.js/Cart"
import NotFound from "./Message.js/NotFound"

function App() {
  return (
    <div>
      <ProductsContextProvider>
      <CartContextProvider>
      <Router>
      <Navbar />
        <Switch>
          <Route path="/" exact component={Products} />
          <Route path="/cart" exact component={Cart}/>
          <Route component={NotFound} />
        </Switch>
      </Router>
      <CartContextProvider>
      </ProductsContextProvider>
    </div>
  );
}

export default App;
