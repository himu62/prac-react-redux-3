import * as React from 'react';

interface Props {
	price?: number;
	quantity?: number;
	title?: string;
}

export default class Product extends React.Component<Props, {}> {
	render() {
		const {price, quantity, title} = this.props;
		return (
			<div>
				{title} - &#36;{price} {quantity ? `x ${quantity}`: null}
			</div>
		);
	}
}
