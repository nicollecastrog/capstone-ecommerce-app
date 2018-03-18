import React, { Component } from 'react';
import { Card, CardTitle, Row, Col } from 'react-materialize'
import {Link} from "react-router-dom"


//this component will display a list of featured items which will only be displayed on the homepage. 
// the featured items array will be sorted but popularity in sales.

class FeaturedItems extends Component {

    render() { 

        let featItemsArr = this.props.FeaturedItems
        let featItemsJSX = featItemsArr.map((item, i) => {
            
            return (<div key={i}>
                <Col className="child" s={12}>
                    <Card header={<CardTitle reveal image={item.ImageSets[0].ImageSet[0].LargeImage[0].URL[0]} waves='light' />}
                        title={item.ItemAttributes[0].Title}
                        reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
                        <h5>Price:{item.Offers[0].Offer[0].OfferListing[0].Price[0].FormattedPrice[0]}</h5>
                        <h5 className="textLink"><Link to={`/home/${item.ASIN}`}>More</Link></h5>
                    </Card>
                </Col>
            </div>)
        })
 
        return (
            <div>
                <h2>Featured Items</h2> 
                <Row className="masonry">
                    {featItemsJSX}
                </Row>
            </div>
        )
    }

}

export default FeaturedItems;