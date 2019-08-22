import React from 'react';
import {Link} from 'react-router-dom';
import './index.scss';

export default class SidebarProduct extends React.Component {
	render() {
		const {href, image, title, price} = this.props;

		return (
			<Link className="small-product" to={process.env.PUBLIC_URL + href}>
				<div className="small-product__image">
					<img src={process.env.PUBLIC_URL + image} alt={title}/>
				</div>
				<div className="small-product__data">
					<div className="small-product__title">
						{title}
					</div>
					<div className="small-product__price">
						${price}
					</div>
				</div>
			</Link>
		);
	}
}
