import React from 'react';
import './index.scss';
import FilterListItem from '../FilterListItem';

export default class FilterList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isOpen: false
		};
	}

	clickOnCategory = () => {
		this.setState((state) => ({
			isOpen: !state.isOpen
		}));
	};

	render() {
		return (
			<div className={'filter-list' + (this.state.isOpen ? ' is-open' : '')}>
				<button
					className="filter-list__category"
					type="button"
					onClick={this.clickOnCategory}
				>
					<span>
						{this.props.category}
					</span>
					<svg className="plus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 6" width="6" height="6">
						<path d="M0 2h2V0h2v2h2v2H4v2H2V4H0z"/>
					</svg>
					<svg className="minus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 2" width="6" height="2">
						<path d="M0 0h6v2H0z"/>
					</svg>
				</button>
				<div className="filter-list__item">
					{this.props.list.map((item, index) => (
						<FilterListItem key={index} active={item.active} onClick={item.onClick}>
							{item.text}
						</FilterListItem>
					))}
				</div>
			</div>
		);
	}
}
