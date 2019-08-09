import React from 'react';
import {Link} from 'react-router-dom';
import './index.scss';
import Button from '../Button';

export default class Card extends React.Component {
	render() {
		const {href, image, title, price, sale} = this.props;

		return (
			<Link to="/" className="card">
				<div className="card__image">
					<img src={'https://placehold.it/220x300'} alt=""/>
				</div>
				<div className="card__title">
					Outfits looks
				</div>
				<div className="card__price">
					$59.95
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
			</Link>
		);
	}
}
