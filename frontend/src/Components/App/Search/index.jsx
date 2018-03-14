import React, { Component } from 'react';
import { Row, Autocomplete} from 'react-materialize'



class Search extends Component {

    render() {
        return (
            <div>
                <Row>
                    <Autocomplete
                        s={6}
                        title = 'Search'
                        data = {
                            {
                                'Apple': null,
                                'Microsoft': null,
                                'Google': 'http://placehold.it/250x250'
                            }
                        }
                    />
                </Row>
            </div>
        )
    }

}

export default Search;