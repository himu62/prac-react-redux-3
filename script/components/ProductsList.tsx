import * as React from 'react';

interface Props {
	children?: Node;
	title: string;
}

export default class ProductsList extends React.Component<Props, {}> {
	render() {
		return (
			<div>
				<h3>{this.props.title}</h3>
				<div>{this.props.children}</div>
			</div>
		);
	}
}
