import React from 'react';
import {Link} from 'react-router-dom';
import './index.scss';
import Button from '../Button';

export default class Card extends React.Component {
	render() {
		const {href, image, title, price, sale} = this.props;

		return (
			<div className="card">
				<Link className="card__image" to={process.env.PUBLIC_URL + href}>
					<img src={process.env.PUBLIC_URL + image} alt={title}/>
				</Link>
				<div className="card__title">
					{title}
				</div>
				<div className="card__price">
					${price}
				</div>
				<Button
					tagName="button"
					type="button"
					text="Add to cart"
					plus
				/>
				{sale && (
					<div className="card__sale">
						sale
					</div>
				)}
			</div>
		);
	}
}
