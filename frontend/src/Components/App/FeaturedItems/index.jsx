import React, { Component } from 'react';

//this component will display a list of featured items which will only be displayed on the homepage. 
// the featured items array will be sorted but popularity in sales.


class FeaturedItems extends Component {
    constructor () {
        super()
        this.state ={
            featured: []
        }
    }
     render() {
        return (
            <div>
            <h2>Featured Images</h2>
            </div>
        )
    }

}

export default FeaturedItems;