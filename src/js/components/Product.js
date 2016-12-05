import React from 'react';

export default class ProductComponent extends React.Component {

    onDeleteClick() {
        this.props.onDeleteClick(this.props.id);
    }

    render() {

        return (
            <div>
                <div>Id: {this.props.id}</div>
                <div>Name: {this.props.name}</div>
                <div>Description: {this.props.description}</div>
                <button type="button" className="btn btn-danger" onClick={() => this.props.onDeleteClick(this.props.id)}>Delete product</button>
                <hr/>
            </div>
        );
    }
}