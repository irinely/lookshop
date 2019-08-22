import React from 'react';
import './index.scss';
import BlockTitle from '../BlockTitle';
import SidebarProduct from '../SidebarProduct';

export default class OnSale extends React.Component {
	render() {
		const {products} = this.props;

		return (
			<div className="on-sale">
				<BlockTitle text="On sale"/>
				<div className="on-sale__list">
					{products.map((product, index) =>
						<SidebarProduct
							key={product.id}
							href={'/product-' + product.id}
							image={product.images[0]}
							title={product.title}
							price={product.price}
						/>
					)}
				</div>
			</div>
		);
	}
}
