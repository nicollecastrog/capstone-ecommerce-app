// import React, { Component } from 'react';
// import { Route, Switch } from 'react-router-dom'
// import ProductList from './ProductList'

// class Shop extends Component {

//     render() {
//         console.log(this.props.products)
//         //console.log(`From shop ${this.props.products}`)
//         return (
//             <div>
//                 <h2>Shop Page</h2>

//                 <Switch>
//                     <Route path='/products/baby' render={() => {
//                         return <ProductList
//                             productList={this.props.products}
//                         />
//                     }
//                     } />
//                     <Route path='/products/beauty' render={() => {
//                         return <ProductList
//                             productList={this.props.products} />
//                     }
//                     } />
//                     <Route path='/products/health' render={() => {
//                         return <ProductList
//                             productList={this.props.products}
//                         />
//                     }
//                     } />
//                 </Switch>
//             </div>
//         )
//     }

// }

// export default Shop;