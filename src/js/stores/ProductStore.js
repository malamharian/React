import { EventEmitter } from 'events';

import Dispatcher from '../dispatcher';

class ProductStore extends EventEmitter {
    constructor() {
        super();

        this.idCounter = 1;
        this.products = [];
    }

    addProduct(product) {
        this.products.push({
            id: this.idCounter++,
            name: product.name,
            description: product.description
        });

        this.emit('change');
    }

    deleteProduct(id) {
        var removeIndex = -1;
        var products = this.products;

        for(var i = products.length -1; i>=0; i--)
        {
            if(products[i].id == id)
            {
                this.products.splice(i, 1);
                this.emit('change');
                return;
            }
        }
    }

    getAll() {
        return this.products;
    }

    handleActions(action) {
        switch(action.type) {
            case 'ADD_PRODUCT': {
                this.addProduct(action.product);
                break;
            }
            case 'DELETE_PRODUCT': {
                this.deleteProduct(action.id);
                break;
            }
            case 'FETCHED_PRODUCTS': {
                this.products = action.products;
                this.idCounter = this.products.length + 1;
                this.emit('change');
            }
        }
    }
}

const productStore = new ProductStore;
Dispatcher.register(productStore.handleActions.bind(productStore));
window.dispatcher = Dispatcher;

export default productStore;