import * as React from 'react';
import Product from './Product';

interface Props {
	product: {
		title: string;
		price: number;
		inventory: number;
	};
	onAddToCartClicked: Function;
}

export default class ProductItem extends React.Component<Props, {}> {
	render() {
		const {product} = this.props;

		return (
			<div style={{marginBottom: 20}}>
				<Product
					title={product.title}
					price={product.price}
				/>
				<button
					onClick={this.props.onAddToCartClicked}
					disabled={product.inventory > 0 ? '' : 'disabled'}
				>{product.inventory > 0 ? 'Add to cart' : 'Sold Out'}
				</button>
			</div>
		);
	}
}
