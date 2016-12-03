import React from 'react';

import Header from '../components/Header';

export default class Products extends React.Component {

    constructor() {
        super();
        this.state = {
            title: 'Products'
        };
    }

    changeTitle(title){
        this.setState({
            title
        });
    }

    render() {
        return(
            <div>
                <Header changeTitle={this.changeTitle.bind(this)} name={'Testong'} title={this.state.title}/>
                Products
            </div>
        );
    }
}