import React from 'react';

import Header from '../components/Header';

export default class ProductDetail extends React.Component {

    render() {
        return(
            <div>
                {this.props.params.product}
            </div>
        );
    }
}