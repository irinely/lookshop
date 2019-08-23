import React from 'react';
import './index.scss';
import BlockTitle from '../BlockTitle';
import FilterList from '../FilterList';
import RangeSlider from '../RangeSlider';
import FilterSizesItem from '../FilterSizesItem';

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
							{
								text: 'New',
								active: this.props.filterNew,
								onClick: () => {
									this.props.setFilterNew(!this.props.filterNew);
								}
							}
						]}
					/>
					<FilterList
						category="Designers"
						list={this.brands.map((brand) => ({
							text: brand.name,
							active: this.props.filterDesigners.includes(brand.name),
							onClick: () => {
								if (this.props.filterDesigners.includes(brand.name)) {
									this.props.setFilterDesigners(this.props.filterDesigners.filter((designer) => {
										return designer !== brand.name
									}));
								} else {
									this.props.setFilterDesigners(this.props.filterDesigners.concat(brand.name));
								}
							}
						}))}
					/>
					<FilterList
						category="Women"
						list={this.womensCaregories.map((category) => ({
							text: category.title,
							active: this.props.filterWomenCategories.includes(category.title),
							onClick: () => {
								if (this.props.filterWomenCategories.includes(category.title)) {
									this.props.setFilterWomenCategories(this.props.filterWomenCategories.filter((title) => {
										return title !== category.title
									}));
								} else {
									this.props.setFilterWomenCategories(this.props.filterWomenCategories.concat(category.title));
								}
							}
						}))}
					/>
					<FilterList
						category="Men"
						list={this.mensCaregories.map((category) => ({
							text: category.title,
							active: this.props.filterMenCategories.includes(category.title),
							onClick: () => {
								if (this.props.filterMenCategories.includes(category.title)) {
									this.props.setFilterMenCategories(this.props.filterMenCategories.filter((title) => {
										return title !== category.title
									}));
								} else {
									this.props.setFilterMenCategories(this.props.filterMenCategories.concat(category.title));
								}
							}
						}))}
					/>
					<FilterList
						category="Clearance"
						list={this.sales.map((sale) => ({
							text: sale.title,
							active: this.props.filterClearance.includes(sale.title),
							onClick: () => {
								if (this.props.filterClearance.includes(sale.title)) {
									this.props.setFilterClearance(this.props.filterClearance.filter((title) => {
										return title !== sale.title
									}));
								} else {
									this.props.setFilterClearance(this.props.filterClearance.concat(sale.title));
								}
							}
						}))}
					/>
					<RangeSlider
						value={this.props.filterPrice}
						onChange={this.props.setFilterPrice}
					/>
					<div className="filter__sizes">
						<div className="filter__sizes__title">
							Select your size
						</div>
						<div className="filter__sizes__list">
							{this.sizes.map((size) =>
								<FilterSizesItem
									key={size.title}
									active={this.props.filterSizes.includes(size.title)}
									onClick={() => {
										if (this.props.filterSizes.includes(size.title)) {
											this.props.setFilterSizes(this.props.filterSizes.filter((title) => {
												return title !== size.title
											}));
										} else {
											this.props.setFilterSizes(this.props.filterSizes.concat(size.title));
										}
									}}
								>
									{size.title}
								</FilterSizesItem>
							)}
						</div>
					</div>
				</div>
			</div>
		);
	}
}
