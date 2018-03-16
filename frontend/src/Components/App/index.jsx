import React, { Component } from 'react';
import '../../Assets/css/main.css';
import axios from 'axios';
import { Route, Switch } from 'react-router-dom'
import Nav from './Nav'
import FeaturedItems from './FeaturedItems'
import ProductList from './ProductList'
import ProductDetails from './ProductDetails'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      category: null,
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

  refreshProducts = (category) => {
    console.log(category)
    axios.get(`http://localhost:8080/products/${category}`)
      .then((response) => {
        // console.log(response.data)
        // console.log(this.state.products)
        this.setState({
          category,
          products: response.data
        })
      })
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(nextProps)
  //   console.log(nextState)
  //   if (nextProps) {
  //     return false
  //   } else {
  //     return true
  //   }

  // }

  render() {
  console.log(this.state.products)
    return (
      <div className="App">
        <Nav
          searchCategory={this.searchCategory} />
        <main>
          <header className="App-header">
            <img className="bbLogo responsive-img" alt="" src="../../../bb_logo.png" />
          </header>
          <section>
            <Switch>
              <Route exact path='/' render={() => {
                return <FeaturedItems
                  FeaturedItems={this.state.FeaturedItems} />
              }
              } />
              <Route path='/products/:category' render={(props) => {
                this.refreshProducts(props.match.params.category) //conditional rendering? isLoaded?
                return <ProductList
                  category={this.state.category}
                  productList={this.state.products}
                  {...props}
                />
              }
              } />
              {/* /products/${this.state.category}/${item.ASIN} */}
              <Route path='/products/:category/:productASIN' render={(props) => {
                return console.log("gets here!"), <ProductDetails
                  products={this.state.productsArrJSX}
                  {...props} />
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
