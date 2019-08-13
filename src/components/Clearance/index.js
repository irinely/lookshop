import React from 'react';
import Sale from '../Sale';
import ProductsGrid from '../ProductsGrid';

import db from '../../data/db';

export default class Clearance extends React.Component {
	constructor(props) {
		super(props);

		this.products = db.productIds.map(id => db.products[id]);
	}

	render() {
		return (
			<div className="clearance">
				<Sale/>
				<ProductsGrid
					count="4"
					products={this.products.filter((product) => product.sales)}
				/>
			</div>
		);
	}
}
