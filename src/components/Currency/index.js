import React from 'react';
import './index.scss';

import {ReactComponent as Triangle} from '../../images/triangle.svg';

export default class Currency extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isOpen: false,
			activeItem: 0
		};

		this.list = [
			{
				title: '$ USD'
			},
			{
				title: '₽ RU'
			},
			{
				title: '£ GBP'
			},
			{
				title: '₴ UAH'
			},
			{
				title: '¥ JPY'
			},
		]
	}

	onClickValue = () => {
		this.setState({
			isOpen: !this.state.isOpen
		});
	};

	onClickItem = (event) => {
		this.setState({
			activeItem: event.currentTarget.dataset.index,
			isOpen: false,
		});
	};

	render() {
		return (
			<div className={'currency' + (this.state.isOpen ? ' is-open' : '')}>
				<button className="currency__value" type="button" onClick={this.onClickValue}>
					<span>
						{this.list[this.state.activeItem].title}
					</span>
					<Triangle/>
				</button>
				<div className="currency__dropdown">
					{this.list.map((item, index) => (
						<button
							key={index}
							className="currency__dropdown__item"
							type="button"
							data-index={index}
							onClick={this.onClickItem}
						>
							{item.title}
						</button>
					))}
				</div>
			</div>
		);
	}
}
