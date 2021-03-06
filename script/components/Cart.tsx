import * as React from 'react';
import Product from './Product';

interface Props {
	products?: Array<any>;
	total?: string;
	onCheckoutClicked?: Function;
}

export default class Cart extends React.Component<Props, {}> {
	render() {
		const {products, total, onCheckoutClicked} = this.props;

		const hasProducts = products.length > 0;
		const nodes = !hasProducts ?
			<em>Please add some products to cart.</em> :
			products.map(product =>
				<Product
					title={product.title}
					price={product.price}
					quantity={product.quantity}
					key={product.id}
				/>
			);

		return (
			<div>
				<h3>Your Cart</h3>
				<div>{nodes}</div>
				<p>Total: &#36;{total}</p>
				<button
					onClick={onCheckoutClicked}
					disabled={hasProducts ? '' : 'disabled'}
				>Checkout
				</button>
			</div>
		);
	}
}
