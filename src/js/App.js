import React from 'react';
import { Link } from 'react-router';

export default class App extends React.Component {
    
    constructor(props)
    {
        super(props);
    }

    navigateHome()
    {
        this.props.router.push('/');
    }

    render() {
        return(
            <div>
                {this.props.children}
                <button onClick={this.navigateHome.bind(this)}>Home</button>
                <Link to="products">Products</Link>
                <Link to="about">About</Link>
            </div>
        );
    }
}