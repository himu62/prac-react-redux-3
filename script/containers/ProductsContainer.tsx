import * as React from 'react';
import {connect} from 'react-redux';
import {addToCart} from '../actions';
import {getVisibleProducts} from '../reducers/products';
import ProductItem from '../components/ProductItem';
import ProductsList from '../components/ProductsList';

interface Props {
	products: Array<{
		id: number;
		title: string;
		price: number;
		inventory: number;
	}>;
	addToCart: Function;
}

class ProductsContainer extends React.Component<Props, {}> {
	render() {
		const {products} = this.props;
		return (
			<ProductsList title="Products">
				{products.map(product =>
					<ProductItem
						key={product.id}
						product={product}
						onAddToCartClicked={() => this.props.addToCart(product.id)}
					/>
				)}
			</ProductsList>
		);
	}
}

function mapStateToProps(state) {
	return {
		products: getVisibleProducts(state.products)
	};
}

export default connect(
	mapStateToProps,
	{addToCart}
)(ProductsContainer);
