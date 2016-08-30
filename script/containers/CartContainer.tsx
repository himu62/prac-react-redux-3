import * as React from 'react';
import {connect} from 'react-redux';
import {checkout} from '../actions';
import {getTotal, getCartProducts} from '../reducers';
import Cart from '../components/Cart';

interface Props {
	products: Array<{
		id: number;
		title: string;
		price: number;
		quantity: number;
	}>;
	total?: string;
	checkout: Function;
}

class CartContainer extends React.Component<Props, {}> {
	render() {
		const {products, total} = this.props;

		return (
			<Cart
				products={products}
				total={total}
				onCheckoutClicked={() => this.props.checkout()}
			/>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		products: getCartProducts(state),
		total: getTotal(state)
	};
};

export default connect(
	mapStateToProps,
	{checkout}
)(CartContainer);
