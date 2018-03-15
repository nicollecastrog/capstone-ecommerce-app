import React, { Component } from 'react';


class ProductList extends Component {

    render() {

        let featItemsArr = this.props.FeaturedItems
        let featItemsJSX = featItemsArr.map((item, i) => {
            //console.log(item.Offers[0].Offer[0].OfferListing[0].Price[0].FormattedPrice[0])
            return (<div key={i}>

                <h3>{item.ItemAttributes[0].Title}</h3>
                <h4>{item.Offers[0].Offer[0].OfferListing[0].Price[0].FormattedPrice[0]}</h4>

                <img alt="" src={item.LargeImage === undefined ? "omit" : item.LargeImage[0].URL[0]} />
            </div>)
        })

        return (
            <div>
                <h2>Featured Items</h2>
                {featItemsJSX}
            </div>
        )
    }

}

export default ProductList;