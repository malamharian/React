import React from 'react';

export default class Header extends React.Component {

    handleChange(e)
    {
        this.props.changeTitle(e.target.value);
    }

    render() {
        return(
            <div>
                {this.props.title}<br/>
                <input type="text" value={this.props.title} onChange={this.handleChange.bind(this)}/>
            </div>
        );
    }
}