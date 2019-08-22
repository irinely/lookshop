import React from 'react';
import './index.scss';
import BlockTitle from '../BlockTitle';
import SidebarProduct from '../SidebarProduct';

export default class SidebarProducts extends React.Component {
	render() {
		const {title, products} = this.props;

		return (
			<div className="sidebar-products">
				<BlockTitle text={title}/>
				<div className="sidebar-products__list">
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
