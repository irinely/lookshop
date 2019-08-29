import React from 'react';
import './index.scss';
import Breadcrumbs from '../Breadcrumbs';
import Gallery from '../Gallery';
import SelectSize from '../SelectSize';
import NumPicker from '../NumPicker';
import Button from '../Button';

import db from '../../data/db';

export default class ProductPage extends React.Component {
	render() {
		const id = this.props.match.params.id;
		const product = db.products[id];

		return (
			<React.Fragment>
				<div className="container">
					<Breadcrumbs/>
				</div>
				<div className="product-info">
					<div className="container">
						<div className="product-info__wrapper">
							<Gallery images={product.images}/>
							<div className="product-info__data">
								<div className="product-info__title">
									{product.title}
								</div>
								<div className="product-info__price">
									${product.price}
								</div>
								<div className="product-info__description">
									{product.description}
								</div>
								<SelectSize
									productId={id}
								/>
								<div className="product-info__buttons">
									<NumPicker/>
									<Button
										text="Add to card"
										large
										plus
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
