import React from 'react';
import {Link} from 'react-router-dom';
import './index.scss';
import Sorting from '../Sorting';
import ProductsGrid from '../ProductsGrid';
import Pagination from '../Pagination';

import db from '../../data/db';

export default class ProductsFilter extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			sortBy: 'Date'
		};

		this.products = db.productIds.map(id => db.products[id]);
	}

	setSortBy = (sortBy) => {
		this.setState({
			sortBy
		});
	};

	render() {
		return (
			<div className="products-filter">
				<div className="container">
					<div className="products-filter__wrapper">
						<div className="products-filter__col-1">
							<div className="products-filter__top">
								<div className="products-filter__sort-by">
									<label>Sort by</label>
									<Sorting
										setSortBy={this.setSortBy}
									/>
								</div>
								<Pagination/>
							</div>
							<ProductsGrid
								count="3"
								products={this.products.slice().sort((a, b) => {
									if (this.state.sortBy === 'Date') {
										let dateA = new Date(a.date);
										let dateB = new Date(b.date);

										return dateB.getTime() - dateA.getTime();
									}

									if (this.state.sortBy === 'Price (ASC)') {
										let priceA = parseFloat(a.price);
										let priceB = parseFloat(b.price);

										return priceA - priceB;
									}

									if (this.state.sortBy === 'Price (DESC)') {
										let priceA = parseFloat(a.price);
										let priceB = parseFloat(b.price);

										return priceB - priceA;
									}
								})}
							/>
						</div>
						<div className="products-filter__col-2"></div>
					</div>
				</div>
			</div>
		);
	}
}
