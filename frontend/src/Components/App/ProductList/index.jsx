import React, { Component } from 'react';
import { Card, CardTitle, Row, Col } from 'react-materialize'
//import ProductDetails from './ProductDetails'
import {Link } from 'react-router-dom'





class ProductList extends Component {

// componentWillMount () {
//     this.props.refreshProducts(this.props.c)
// }

    // shouldComponentUpdate (nextProps, nextState) {
    //     console.log(nextProps)
    //     console.log(nextState)
    //     console.log(nextProps.category, this.props.category)
    //     if (nextProps.category !== this.props.category ) {
    //         return false
    //     } else {
    //         return true
    //     }
        
    // }

    render() {

        //console.log(this.props.productList)
        let productsJSX = this.props.productList.map((item, i) => {
            // console.log(i)
            // console.log(item)
            //console.log(this.props.match.params)
            //console.log(category)
            return (<div key={i}>

                <Col className="child">
                    <Card header={<CardTitle reveal image={item.ImageSets[0].ImageSet[0].LargeImage[0].URL[0]} waves='light' />}
                        title={item.ItemAttributes[0].Title}
                        reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}
                    >
                        <h5>Price:{item.Offers[0].Offer[0].OfferListing[0].Price[0].FormattedPrice[0]}</h5>
                        <h5 className="textLink"><Link to={`/products/${this.props.category}/${item.ASIN}`}>More</Link></h5>

                    </Card>
                </Col>
            </div>)
        })

        return (
            <div>
                <h2>Happy Shopping</h2>
                    <Row className="masonry">
                    {productsJSX}
                    </Row>

            </div>
        )
    }

}

export default ProductList;