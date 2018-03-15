import React, { Component } from 'react';
import { Card, CardTitle, Row, Col } from 'react-materialize'


class ProductList extends Component {
  

    render() {
        console.log(`From p list ${this.props.productList}`)
       let productsArr = this.props.productList
       let productsArrJSX = productsArr.map((item, i) => {

           return (<div key={i}>
               <Col className="child" s={12}>
                   <Card header={<CardTitle reveal image={item.LargeImage === undefined ? 'ok' : item.LargeImage[0].URL[0]} waves='light' />}
                       title={item.ItemAttributes[0].Title}
                       reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
                       <h4>Price:{item.Offers[0].Offer[0].OfferListing[0].Price[0].FormattedPrice[0]}</h4>
                   </Card>
               </Col>
           </div>)
       })

        return (
            <div>
                <Row className="masonry">
               {productsArrJSX}
               </Row>
            </div>
        )
    } 

}

export default ProductList;