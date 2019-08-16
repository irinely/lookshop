import React from 'react';
import './index.scss';
import BlockTitle from '../BlockTitle';
import FilterList from '../FilterList';

import db from '../../data/db';

export default class Filter extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isOpenCategory: false
		};

		this.brands = db.designerIds.map(id => db.designers[id]);
		this.sales = db.saleIds.map(id => db.sales[id]);

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
				</div>
			</div>
		);
	}
}
