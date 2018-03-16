import React, { Component } from 'react';
import '../../Assets/css/main.css';
import axios from 'axios';
import { Route, Switch } from 'react-router-dom'
import Nav from './Nav'
//import Search from './Search'
import FeaturedItems from './FeaturedItems'
import ProductList from './ProductList'

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

//App will contain state for the products array & cart array
//will host functions 



class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      products: [],
      cart: [],
      FeaturedItems: []
    }
  }

  componentDidMount() {

    axios.get(`http://localhost:8080/featuredData`)
      .then((response) => {
        console.log(response.data)
        this.setState({
          FeaturedItems: response.data
        })
      })
  }

  render() {

    return (
      <div className="App">
        <Nav
          searchCategory={this.searchCategory} />
          <main>
        {/* <Search /> */}
        <header className="App-header">
            <img className="bbLogo responsive-img" alt="" src="../../../bb_logo.png"/>
        </header>
        <section>
        <Switch>
          <Route exact path='/' render={() => {
            return <FeaturedItems
              FeaturedItems={this.state.FeaturedItems} />
          }
          } />
          <Route path='/products/:category' render={(props) => {
            console.log(props.match.params.category)
            return <ProductList
              productList={this.state.products}
              {...props}
            />
          }
          } />

        </Switch>
        </section>
        </main>
      </div>
    );
  }
}


export default App;
// export default  () => (
//   App,
//   <Button waves='light'>
//     <Icon>thumb_up</Icon>
//   </Button>
// )
