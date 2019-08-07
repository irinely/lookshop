import React from 'react';
import {Link} from 'react-router-dom';
import './index.scss';

import {ReactComponent as Triangle} from '../../images/triangle.svg';
import slide1 from './images/slide-1.png';
import slide2 from './images/slide-2.png';

export default class Slider extends React.Component {
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
			linkTo: '/',
			image: slide1
		},
		{
			linkTo: '/',
			image: slide2
		},
	];

	render() {
		return (
			<div className="slider">
				<div className="container">
					<div className="slider__slides">
						{this.slides.map((slide, index) =>
							<div
								className={'slider__slide' + (this.state.currentSlide === index ? ' active' : '')}
								key={slide.image}
								style={{backgroundImage: `url(${slide.image})`}}
							>
								<Link className="slider__button" to={slide.linkTo}>
								<span>
									Shop now
								</span>
									<Triangle/>
								</Link>
							</div>
						)}
					</div>
				</div>
				<button className="slider__arrow prev" type="button" onClick={this.clickToPrev}>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 18">
						<path d="M11.99 8.822L11.808 9l.182.178-8.985 8.812L.01 15.053 6.182 9 .01 2.948 3.005.01z" opacity="0.2"/>
					</svg>
				</button>
				<button className="slider__arrow next" type="button" onClick={this.clickToNext}>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 18">
						<path d="M11.99 8.822L11.808 9l.182.178-8.985 8.812L.01 15.053 6.182 9 .01 2.948 3.005.01z" opacity="0.2"/>
					</svg>
				</button>
				<div className="slider__dots">
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
