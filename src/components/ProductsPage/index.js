import React from 'react';
import Breadcrumbs from '../Breadcrumbs';
import ProductPageSlider from '../ProductPageSlider';

export default class ProductsPage extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div className="container">
					<Breadcrumbs/>
				</div>
				<ProductPageSlider/>
			</React.Fragment>
		);
	}
}
