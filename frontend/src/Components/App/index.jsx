import React, { Component } from 'react';
//import '../../Assets/css/styles.css';
import axios from 'axios';
import { Route, Switch } from 'react-router-dom'

// Import all relevant components and style sheets. 
// Create routes for all relevant components. 
// APP FUNCTIONALITY OVERVIEW
// What can a client do? 
  //search through all products with keywords
  //search products by category (browsenode)
  //select products from an array of products and be able to view product details
  //seamless site navigation
  //add items to cart
  //remove items from cart 
  //increase item amount in cart 
  //products will be sorted by sales amount



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Buy Better</h1>
        </header>
        <p className="App-intro">
          hola bola
        </p>
      </div>
    );
  }
} 

export default App;
