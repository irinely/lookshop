import React from 'react';
import './index.scss';
import BlockTitle from '../BlockTitle';
import FilterList from '../FilterList';
import RangeSlider from '../RangeSlider';

import db from '../../data/db';

export default class Filter extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isOpenCategory: false
		};

		this.brands = db.designerIds.map(id => db.designers[id]);
		this.sales = db.saleIds.map(id => db.sales[id]);
		this.sizes = db.sizeIds.map(id => db.sizes[id]);

		this.womensCaregories = db.categoryIds
			.filter(categoryId => (
				db.productIds.some((productId) => (
					db.products[productId].genders.includes(1)
					&&
					db.products[productId].categories.includes(categoryId)
				))
			))
			.map(id => db.categories[id]);

		this.mensCaregories = db.categoryIds
			.filter(categoryId => (
				db.productIds.some((productId) => (
					db.products[productId].genders.includes(2)
					&&
					db.products[productId].categories.includes(categoryId)
				))
			))
			.map(id => db.categories[id]);
	}

	render() {
		return (
			<div className="filter">
				<BlockTitle text="Categories"/>
				<div className="filter__wrapper">
					<FilterList
						category="New"
						list={[
							{text: 'New'}
						]}
					/>
					<FilterList
						category="Designers"
						list={this.brands.map((brand) => ({
							text: brand.name
						}))}
					/>
					<FilterList
						category="Women"
						list={this.womensCaregories.map((category) => ({
							text: category.title
						}))}
					/>
					<FilterList
						category="Men"
						list={this.mensCaregories.map((category) => ({
							text: category.title
						}))}
					/>
					<FilterList
						category="Clearance"
						list={this.sales.map((sale) => ({
							text: sale.title
						}))}
					/>
					<RangeSlider/>
					<div className="filter__sizes">
						<div className="filter__sizes__title">
							Select your size
						</div>
						<div className="filter__sizes__list">
							{this.sizes.map((size) =>
								<button className="button small" type="button" key={size.title}>
									{size.title}
								</button>
							)}
						</div>
					</div>
					<button className="button filter__ok" type="button">
						Filter
					</button>
				</div>
			</div>
		);
	}
}
