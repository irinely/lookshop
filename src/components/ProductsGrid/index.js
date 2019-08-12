import React from 'react';
import './index.scss';
import Card from '../Card';

export default class ProductsGrid extends React.Component {
	render() {
		const {count = 4, products} = this.props;

		return (
			<div className={'products-grid desktop-count-' + count}>
				<div className="products-grid__list">
					{products.map((product, index) =>
						<Card
							key={product.id}
							href={'/product-' + product.id}
							image={product.images[0]}
							title={product.title}
							price={product.price}
							sale={product.sales}
						/>
					)}
				</div>
			</div>
		);
	}
}
