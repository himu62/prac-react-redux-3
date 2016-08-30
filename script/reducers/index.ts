import {combineReducers} from 'redux';
import cart, * as Cart from './cart';
import products, * as Products from './products';

export default combineReducers({
	cart,
	products
});

function getAddedIds(state) {
	return Cart.getAddedIds(state.cart);
}

function getQuantity(state, id) {
	return Cart.getQuantity(state.cart, id);
}

function getProduct(state, id) {
	return Products.getProduct(state.products, id);
}

export function getTotal(state) {
	return getAddedIds(state).reduce(
		(total, id) =>
		total + getProduct(state, id).price * getQuantity(state, id), 0
	).toFixed(2);
}

export function getCartProducts(state) {
	return getAddedIds(state).map(id => (<any>Object).assign({},
		getProduct(state, id),
		{quantity: getQuantity(state, id)}
	));
}
