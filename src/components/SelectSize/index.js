import React from 'react';
import './index.scss';
import {ReactComponent as Triangle} from '../../images/triangle.svg';

import db from '../../data/db';

export default class SelectSize extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isOpen: false,
			activeItem: 0
		};
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
		const {productId} = this.props;
		const sizes = db.products[productId].sizes.map((id) => db.sizes[id]);

		if (!sizes.length) {
			return null;
		}

		return (
			<div className={'select-size' + (this.state.isOpen ? ' is-open' : '')}>
				<button className="select-size__value" type="button" onClick={this.onClickValue}>
					<span>
						{sizes[this.state.activeItem].title}
					</span>
					<Triangle/>
				</button>
				<div className="select-size__dropdown">
					{sizes.map((item, index) => (
						<button
							key={index}
							className="select-size__dropdown__item"
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
