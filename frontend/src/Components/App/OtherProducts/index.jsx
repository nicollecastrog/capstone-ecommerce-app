import React, { Component } from 'react';

//will compile an array based on search of "similaritems"
//will map out a horizontally displayed array.
//the state of this component needs to be passed down to both the Product Detail page and the Cart Page.

class OtherProducts extends Component {
    constructor() {
        super()
        this.state = {
            others: []
        }
    }
    render() {
        return (
            <div>
                <h2>Other products you might like</h2>
            </div>
        )
    }

}

export default OtherProducts;