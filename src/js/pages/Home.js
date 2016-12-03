import React from 'react';

import Header from '../components/Header';

export default class Home extends React.Component {

    constructor() {
        super();
        this.state = {
            title: 'Starting Data'
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
                Home
            </div>
        );
    }
}