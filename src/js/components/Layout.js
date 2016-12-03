import React from 'react';

import Header from './Header';

export default class Layout extends React.Component {

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
                Content
            </div>
        );
    }
}