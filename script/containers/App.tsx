import * as React from 'react';
import ProductsContainer from './ProductsContainer';
import CartContainer from './CartContainer';

export default class App extends React.Component<{}, {}> {
	render() {
		return (
			<div>
				<h2>Shopping Cart Example</h2>
				<hr />
				<ProductsContainer />
				<hr />
				<CartContainer />
			</div>
		);
	}
}
