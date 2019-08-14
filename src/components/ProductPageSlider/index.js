import React from 'react';
import './index.scss';

import db from '../../data/db';
import Button from '../Button';

export default class ProductPageSlider extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			currentSlide: 0
		}
	}

	clickToNext = () => {
		this.setState((state, props) => ({
			currentSlide: Math.min(this.slides.length - 1, state.currentSlide + 1)
		}));
	};

	clickToPrev = () => {
		this.setState((state, props) => ({
			currentSlide: Math.max(0, state.currentSlide - 1)
		}));
	};

	clickToDot = (event) => {
		this.setState({
			currentSlide: parseInt(event.currentTarget.dataset.index)
		});
	};

	slides = [
		{
			image: db.products[5].images,
			title: db.products[5].title,
			price: db.products[5].price,
			description: db.products[5].description
		},
		{
			image: db.products[10].images,
			title: db.products[10].title,
			price: db.products[10].price,
			description: db.products[10].description
		}
	];

	render() {
		return (
			<div className="product-slider">
				<div className="container">
					<div className="product-slider__slides">
						{this.slides.map((slide, index) =>
							<div
								className={'product-slider__slide' + (this.state.currentSlide === index ? ' active' : '')}
								key={slide.image}
							>
								<div className="product-slider__image">
									<img src={slide.image} alt=""/>
								</div>
								<div className="product-slider__info">
									<div className="product-slider__title">
										{slide.title}
									</div>
									<div className="product-slider__price">
										${slide.price}
									</div>
									<div className="product-slider__description">
										{slide.description.slice(0, 200).trim()}...
									</div>
									<Button
										text="Add to cart"
										large
										plus
									/>
								</div>
							</div>
						)}
					</div>
					<button className="product-slider__arrow prev" type="button" onClick={this.clickToPrev}>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 18">
							<path d="M11.99 8.822L11.808 9l.182.178-8.985 8.812L.01 15.053 6.182 9 .01 2.948 3.005.01z" opacity="0.2"/>
						</svg>
					</button>
					<button className="product-slider__arrow next" type="button" onClick={this.clickToNext}>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 18">
							<path d="M11.99 8.822L11.808 9l.182.178-8.985 8.812L.01 15.053 6.182 9 .01 2.948 3.005.01z" opacity="0.2"/>
						</svg>
					</button>
				</div>
				<div className="product-slider__dots">
					{this.slides.map((slide, index) =>
						<button
							className={'slider__dot' + (this.state.currentSlide === index ? ' active' : '')}
							key={slide.image}
							data-index={index}
							onClick={this.clickToDot}
						/>
					)}
				</div>
			</div>
		);
	}
}
