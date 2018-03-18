import React, { Component } from 'react';

class ProductDetails extends Component {

    render() {
        console.log(this.props.productList)
        console.log(this.props.match.params)

        let products = this.props.productList
        let params = this.props.match.params

        let filterItem = products.filter((item, i) => {
            if (item.ASIN[0] === params.productASIN)
                return item
        })
        console.log(filterItem)

        let image = filterItem[0].ImageSets[0]
        return (
            <div>
                <h3>{filterItem[0].ItemAttributes[0].Title}</h3>
                <img alt="" src={
                    image.ImageSet[0].HiResImage === undefined ? //ternary works for most images but not others, matcha and capsules.
                    image.ImageSet[1].HiResImage[0].URL[0] :
                    image.ImageSet[1] === undefined ?
                    image.ImageSet[0].LargeImage[0].URL[0] :
                    image.ImageSet[0].HiResImage[0].URL[0]} />
                <h5>{filterItem[0].Offers[0].Offer[0].OfferListing[0].Price[0].FormattedPrice[0]}</h5>
                <h5>{filterItem[0].ItemAttributes[0].Feature[1]}</h5>
                <h4>Other Products Your Might Like</h4>
            </div>
        )
    }
}

export default ProductDetails; 