import React from 'react';

import ProductComponent from '../components/Product';

import * as ProductActions from '../actions/ProductActions';
import ProductStore from '../stores/ProductStore';

export default class Products extends React.Component {

    constructor() {
        super();

        this.getProducts = this.getProducts.bind(this);

        this.state = {
            products: ProductStore.getAll()
        };
    }

    componentWillMount() {
        ProductStore.on('change', this.getProducts);
    }

    componentWillUnmount() {
        ProductStore.removeListener('change', this.getProducts);
    }

    getProducts() {
        this.setState({
            products: ProductStore.getAll()
        });
    }

    submitNewProduct(e) {
        e.preventDefault();

        ProductActions.addProduct({
            name: this.state.newName,
            description: this.state.newDescription
        });
    }

    handleNameChange(e) {
        this.setState({
            newName: e.target.value
        });
    }

    handleDescriptionChange(e) {
        this.setState({
            newDescription: e.target.value
        });
    }

    deleteProduct(id) {
        ProductActions.deleteProduct(id);
    }

    reloadProducts() {
        ProductActions.reloadProducts();
    }

    render() {

        const { products } = this.state;

        const productComponents = products.map((product) => {
            return <ProductComponent key={product.id} {...product} onDeleteClick={this.deleteProduct.bind(this)}/>
        });

        return(
            <div>
                <button onClick={this.reloadProducts.bind(this)}>Reload</button>
                <form onSubmit={this.submitNewProduct.bind(this)}>
                    <h1>Add new product</h1>
                    <table>
                        <tbody>
                            <tr>
                                <td>Name</td>
                                <td><input type="text" name="name" onChange={this.handleNameChange.bind(this)}/></td>
                            </tr>
                            <tr>
                                <td>Description</td>
                                <td><input type="text" name="description" onChange={this.handleDescriptionChange.bind(this)}/></td>
                            </tr>
                            <tr>
                                <td colSpan="2" style={{textAlign: 'center'}}>
                                    <input type="submit" value="Submit"/>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
                {productComponents}
            </div>
        );
    }
}