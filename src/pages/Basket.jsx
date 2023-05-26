import React from 'react';
import { connect } from 'react-redux';
import { remove_product } from '../actions/remove';
import { update_product } from '../actions/update';

const Basket = ({ products, remove_product, update_product }) => {
    return (
        <div>
            <h1>Panier</h1>
            <ul class="products">
                {products.map(product => (
                    <li key={product.id}>
                    - {product.title}<br /> - {product.price}€<br /> - Quantité <input
                        type="number"
                        min="1"
                        value={product.quantity || 1}
                        onChange={(event) => update_product(product.id, event.target.value)}
                    /><br />
                    <img src={product.thumbnail}/> <br/>
                    <button onClick={() => remove_product(product.id)}>Supprimer</button><br />
                    </li>
                ))}
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        remove_product: (productId) => dispatch(remove_product(productId)),
        update_product: (productId, quantity) => dispatch(update_product(productId, quantity))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Basket);
