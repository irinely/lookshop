import React from 'react';
import './index.scss';
import Card from '../Card';

import db from '../../data/db';

export default class Tabs extends React.Component {
	constructor(props) {
		super(props);

		this.refTabsContent = React.createRef();

		this.state = {
			offset: 0
		};
	}

	setOffset(dx) {
		this.setState((state) => {
			const card = this.refTabsContent.current.children[0];
			const {marginRight} = window.getComputedStyle(card);
			const allCardsWidth = this.refTabsContent.current.scrollWidth;
			const tabsContentWidth = this.refTabsContent.current.clientWidth;
			const minOffset = tabsContentWidth - allCardsWidth - parseFloat(marginRight);
			const maxOffset = 0;
			const offset = state.offset + dx;

			return {
				offset: Math.max(minOffset, Math.min(offset, maxOffset))
			}
		});
	}

	getVisibleCardsWidth() {
		const card = this.refTabsContent.current.children[0];
		const {marginLeft, marginRight} = window.getComputedStyle(card);
		const cardWidth = card.clientWidth + parseFloat(marginLeft) + parseFloat(marginRight);
		const tabsContentWidth = this.refTabsContent.current.clientWidth;
		const countVisibleCard = Math.floor(tabsContentWidth / cardWidth);

		return cardWidth * countVisibleCard;
	}

	left = () => {
		this.setOffset(this.getVisibleCardsWidth());
	};

	right = () => {
		this.setOffset(-this.getVisibleCardsWidth());
	};

	onResize = () => {
		this.setOffset(0);
	};

	componentDidMount() {
		window.addEventListener('resize', this.onResize);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.onResize);
	}

	render() {
		const products = db.productId.map(id => db.products[id]);

		return (
			<div className="tabs">
				<div className="container">
					<div className="tabs__buttons">
						<button className="tabs__button active" type="button">
							What’s hot?
						</button>
						<button className="tabs__button" type="button">
							Designers
						</button>
						<button className="tabs__button" type="button">
							Featured
						</button>
						<button className="tabs__button" type="button">
							Latest
						</button>
					</div>
					<div className="tabs__arrows">
						<button className="tabs__arrow" type="button" onClick={this.left}>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 477.175 477.175">
								<path d="M145.188 238.575l215.5-215.5c5.3-5.3 5.3-13.8 0-19.1s-13.8-5.3-19.1 0l-225.1 225.1c-5.3 5.3-5.3 13.8 0 19.1l225.1 225c2.6 2.6 6.1 4 9.5 4s6.9-1.3 9.5-4c5.3-5.3 5.3-13.8 0-19.1l-215.4-215.5z"/>
							</svg>
						</button>
						<button className="tabs__arrow" type="button" onClick={this.right}>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 477.175 477.175">
								<path d="M360.731 229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1 0s-5.3 13.8 0 19.1l215.5 215.5-215.5 215.5c-5.3 5.3-5.3 13.8 0 19.1 2.6 2.6 6.1 4 9.5 4 3.4 0 6.9-1.3 9.5-4l225.1-225.1c5.3-5.2 5.3-13.8.1-19z"/>
							</svg>
						</button>
					</div>
				</div>
				<div className="tabs__contents">
					<div
						className="tabs__content"
						ref={this.refTabsContent}
						style={{transform: `translateX(${this.state.offset}px)`}}
					>
						{products.map((product) =>
							<Card
								key={product.id}
								href={'/product-' + product.id}
								image={product.images[0]}
								title={product.title}
								price={product.price}
								sale={product.sales}
							/>
						)}
					</div>
				</div>
			</div>
		);
	}
}
