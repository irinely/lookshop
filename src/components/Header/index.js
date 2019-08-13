import React from 'react';
import {Link} from 'react-router-dom';
import './index.scss';
import Currency from '../Currency';

import db from '../../data/db';

import logo from './images/logo.png';
import cart from './images/cart.png';
import triangle from '../../images/triangle.svg';

export default class Header extends React.Component {
	constructor(props) {
		super(props);

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
			<header className="header">
				<div className="header__top">
					<div className="container">
						<div className="header__phone">
							Custom care: <a href="tel:888-23-4567">888-23-4567</a>
						</div>
						<div className="header__actions">
							<Currency/>
							<a className="header__account" href="/">
								<span className="header__account__icon">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 409.165 409.164">
										<path d="M204.583 216.671c50.664 0 91.74-48.075 91.74-107.378 0-82.237-41.074-107.377-91.74-107.377-50.668 0-91.74 25.14-91.74 107.377.001 59.303 41.073 107.378 91.74 107.378zM407.164 374.717L360.88 270.454a23.23 23.23 0 0 0-10.465-11.138l-71.83-37.392a4.628 4.628 0 0 0-4.926.415c-20.316 15.366-44.203 23.488-69.076 23.488-24.877 0-48.762-8.122-69.078-23.488a4.635 4.635 0 0 0-4.93-.415L58.75 259.316a23.222 23.222 0 0 0-10.465 11.138L2.001 374.717a23.059 23.059 0 0 0 1.75 22.005 23.056 23.056 0 0 0 19.4 10.526h362.861a23.063 23.063 0 0 0 19.402-10.527 23.063 23.063 0 0 0 1.75-22.004z"/>
									</svg>
								</span>
								<span className="header__account__text">
									My account
								</span>
							</a>
							<button className="header__search">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15">
									<path d="M6.093 11.095l-3.428 3.428a1.552 1.552 0 0 1-2.195 0l-.02-.02a1.552 1.552 0 0 1 0-2.195L3.879 8.88a5.956 5.956 0 0 1 .96-7.154 5.953 5.953 0 0 1 8.409 0 5.953 5.953 0 0 1 0 8.41 5.956 5.956 0 0 1-7.154.959zm5.77-2.343a3.993 3.993 0 0 0 0-5.641 3.993 3.993 0 0 0-5.641 0 3.993 3.993 0 0 0 0 5.64 3.993 3.993 0 0 0 5.64 0z"/>
								</svg>
							</button>
						</div>
					</div>
				</div>
				<div className="container">
					<div className="header__bottom">
						<Link className="header__logo" to={'/'}>
							<img src={logo} alt="LookShop"/>
						</Link>
						<ul className="header__menu">
							<li className="header__menu__item">
								<a href="/">
									New
								</a>
							</li>
							<li className="header__menu__item">
								<a href="/">
									Designers
								</a>
								<img src={triangle} alt=""/>
								<ul className="header__submenu">
									{this.brands.map((brand) =>
										<li className="header__submenu__item" key={brand.id}>
											<a href="/">
												{brand.name}
											</a>
										</li>
									)}
								</ul>
							</li>
							<li className="header__menu__item">
								<a href="/">
									Women
								</a>
								<img src={triangle} alt=""/>
								<ul className="header__submenu">
									{this.womensCaregories.map((category) =>
										<li className="header__submenu__item" key={category.id}>
											<a href="/">
												{category.title}
											</a>
										</li>
									)}
								</ul>
							</li>
							<li className="header__menu__item">
								<a href="/">
									Men
								</a>
								<img src={triangle} alt=""/>
								<ul className="header__submenu">
									{this.mensCaregories.map((category) =>
										<li className="header__submenu__item" key={category.id}>
											<a href="/">
												{category.title}
											</a>
										</li>
									)}
								</ul>
							</li>
							<li className="header__menu__item">
								<a href="/">
									Sale
								</a>
								<img src={triangle} alt=""/>
								<ul className="header__submenu">
									{this.sales.map((sale) =>
										<li className="header__submenu__item" key={sale.id}>
											<a href="/">
												{sale.title}
											</a>
										</li>
									)}
								</ul>
							</li>
						</ul>
						<Link className="header__cart" to="/">
							<div className="header__cart__top">
								Your cart
							</div>
							<div className="header__cart__bottom">
								<img src={cart} alt="cart"/>
								<div className="header__cart__bottom__info">
									0 items | $ 0
								</div>
							</div>
						</Link>
					</div>
				</div>
			</header>
		);
	}
}
