import React from 'react';
import './index.scss';
import {ReactComponent as Triangle} from '../../images/triangle.svg';

export default class Sorting extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isOpen: false,
			activeItem: 0
		};

		this.list = [
			{
				title: 'Date'
			},
			{
				title: 'Price (ASC)'
			},
			{
				title: 'Price (DESC)'
			}
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

		this.props.setSortBy(this.list[event.currentTarget.dataset.index].title);
	};

	render() {
		return (
			<div className={'sorting' + (this.state.isOpen ? ' is-open' : '')}>
				<button className="sorting__value" type="button" onClick={this.onClickValue}>
					<span>
						{this.list[this.state.activeItem].title}
					</span>
					<Triangle/>
				</button>
				<div className="sorting__dropdown">
					{this.list.map((item, index) => (
						<button
							key={index}
							className="sorting__dropdown__item"
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
