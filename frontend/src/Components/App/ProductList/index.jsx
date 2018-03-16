import React, { Component } from 'react';
import { Card, CardTitle, Row, Col } from 'react-materialize'
import ProductDetails from './ProductDetails'
import { Route, Link } from 'react-router-dom'
import axios from 'axios'


class ProductList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            productsArrJSX: [],
        }
    }

    componentDidMount() {
        console.log(this.props.match.params.category)
        axios.get(`http://localhost:8080/products/${this.props.match.params.category}`)
            .then((response) => {
                // console.log(response.data)
                // console.log(this.state.products)
                let productsArr = response.data
                let productsJSX = productsArr.map((item, i) => {
                    console.log(item)

                    return (<div key={i}>

                        <Col className="child">
                            <Card header={<CardTitle reveal image={item.LargeImage === undefined ? 'ok' : item.LargeImage[0].URL[0]} waves='light' />}
                                title={item.ItemAttributes[0].Title}
                                reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}
                            >
                                <h5>Price:{item.Offers[0].Offer[0].OfferListing[0].Price[0].FormattedPrice[0]}</h5>
                                <p className="textLink"><Link to={`/:category/${item.ASIN}`}>More</Link></p>

                            </Card>
                        </Col>
                    </div>)
                })

                this.setState({
                    productsArrJSX: productsJSX,
                })
                console.log(this.state.productsArrJSX)
            })
    }

    render() {

        return (
            <div>
                <h2>Happy Shopping</h2>
                    <Row className="masonry">
                        {this.state.productsArrJSX}
                    </Row>
                <Route path='/:category/productASIN' render={(props) => {
                    return <ProductDetails
                        products={this.state.productsArrJSX}
                        {...props} />
                }
                } />
            </div>
        )
    }

}

export default ProductList;