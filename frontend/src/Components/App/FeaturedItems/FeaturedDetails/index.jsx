import React, { Component } from 'react';

class FeaturedDetails extends Component {

    render() {

        //let items = this.props.FeaturedItems
        console.log(this.props.FeaturedItems)
        //let item = this.props.FeaturedItems.item

        return (
            <div>
                {/* <h2>Title:{items.ItemAttributes[0].Title}</h2> */}
                {/* <p className="description">{songs[song.songId].description}</p>
                <button onClick={() => { this.props.playAudio([song.songId]) }}>{this.props.playing ? 'Pause' : 'Play'}</button> */}
            </div>
        )
    }
}

export default FeaturedDetails; 