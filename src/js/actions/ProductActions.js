import dispatcher from '../dispatcher';

export function addProduct(product) {
    dispatcher.dispatch({
        type: 'ADD_PRODUCT',
        product
    })
}

export function deleteProduct(id) {
    dispatcher.dispatch({
        type: 'DELETE_PRODUCT',
        id
    })
}

export function reloadProducts() {

    //simulation of ajax call

    dispatcher.dispatch({
        type: 'FETCH_PRODUCTS'
    });

    setTimeout(() => {
        dispatcher.dispatch({
            type: 'FETCHED_PRODUCTS',
            products: [
                {
                    id: 1,
                    name: 'Product 1',
                    description: 'Best product ever'                
                },
                {
                    id: 2,
                    name: 'Product 2',
                    description: 'Best product ever'                
                },
                {
                    id: 3,
                    name: 'Product 3',
                    description: 'Best product ever'                
                }
            ]
        });
    }, 1000);
}