import React from 'react';
import {shuffle} from 'lodash';
import './index.scss';
import Sorting from '../Sorting';
import ProductsGrid from '../ProductsGrid';
import Pagination from '../Pagination';
import Filter from '../Filter';
import SidebarProducts from '../SidebarProducts';

import db from '../../data/db';

export default class ProductsFilter extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			sortBy: 'Date',
			filterNew: false,
			filterDesigners: [],
			filterWomenCategories: [],
			filterMenCategories: [],
			filterClearance: [],
			filterPrice: {min: 0, max: 500},
			filterSizes: [],
		};

		this.shuffleProducts = shuffle(db.productIds).slice(0, 3).map(id => db.products[id]);
		this.products = db.productIds.map(id => db.products[id]);
	}

	setSortBy = (sortBy) => {
		this.setState({
			sortBy
		});
	};

	setFilterNew = (filterNew) => {
		this.setState({
			filterNew
		});
	};

	setFilterDesigners = (filterDesigners) => {
		this.setState({
			filterDesigners
		});
	};

	setFilterWomenCategories = (filterWomenCategories) => {
		this.setState({
			filterWomenCategories
		});
	};

	setFilterMenCategories = (filterMenCategories) => {
		this.setState({
			filterMenCategories
		});
	};

	setFilterClearance = (filterClearance) => {
		this.setState({
			filterClearance
		});
	};

	setFilterPrice = (filterPrice) => {
		this.setState({
			filterPrice
		});
	};

	setFilterSizes = (filterSizes) => {
		this.setState({
			filterSizes
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
								products={
									this.products
										.slice()
										.filter((product) => {
											let passNew = true;
											let passDesigners = true;
											let passWomenCategories = true;
											let passMenCategories = true;
											let passClearance = true;
											let passSizes = true;
											let passPrice = true;

											if (this.state.filterNew) {
												let now = new Date().getTime();
												let productDate = new Date(product.date).getTime();
												let year = 1000 * 60 * 60 * 24 * 365;

												passNew = now - productDate <= year;
											}

											if (this.state.filterDesigners.length) {
												passDesigners = product.designers.some((id) => (
													this.state.filterDesigners.includes(db.designers[id].name)
												));
											}

											if (this.state.filterWomenCategories.length) {
												passWomenCategories = (
													product.genders.includes(1)
													&&
													product.categories.some((id) => (
														this.state.filterWomenCategories.includes(db.categories[id].title)
													))
												);
											}

											if (this.state.filterMenCategories.length) {
												passMenCategories = (
													product.genders.includes(2)
													&&
													product.categories.some((id) => (
														this.state.filterMenCategories.includes(db.categories[id].title)
													))
												);
											}

											if (this.state.filterClearance.length) {
												passClearance = (
													product.sales
													&&
													product.sales.some((id) => (
														this.state.filterClearance.includes(db.sales[id].title)
													))
												);
											}

											if (this.state.filterSizes.length) {
												passSizes = (
													product.sizes
													&&
													product.sizes.some((id) => (
														this.state.filterSizes.includes(db.sizes[id].title)
													))
												);
											}

											let price = parseFloat(product.price);
											let {min: minPrice, max: maxPrice} = this.state.filterPrice;

											passPrice = minPrice <= price && price <= maxPrice;

											return (
												passNew &&
												passDesigners &&
												passWomenCategories &&
												passMenCategories &&
												passClearance &&
												passSizes &&
												passPrice
											);
										})
										.sort((a, b) => {
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
										})
								}
							/>
							<div className="products-filter__bottom">
								<Pagination/>
							</div>
						</div>
						<div className="products-filter__col-2">
							<Filter
								filterNew={this.state.filterNew}
								filterDesigners={this.state.filterDesigners}
								filterWomenCategories={this.state.filterWomenCategories}
								filterMenCategories={this.state.filterMenCategories}
								filterClearance={this.state.filterClearance}
								filterPrice={this.state.filterPrice}
								filterSizes={this.state.filterSizes}
								setFilterNew={this.setFilterNew}
								setFilterDesigners={this.setFilterDesigners}
								setFilterWomenCategories={this.setFilterWomenCategories}
								setFilterMenCategories={this.setFilterMenCategories}
								setFilterClearance={this.setFilterClearance}
								setFilterPrice={this.setFilterPrice}
								setFilterSizes={this.setFilterSizes}
							/>
							<SidebarProducts
								title="On sale"
								products={this.products.filter((product) => product.sales).slice(-3).reverse()}
							/>
							<SidebarProducts
								title="Featured products"
								products={this.shuffleProducts}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
