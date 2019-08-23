import React from 'react';

export default class FilterSizesItem extends React.Component {
	render() {
		return (
			<button
				className={'button small' + (this.props.active ? ' active' : '')}
				type="button"
				onClick={this.props.onClick}
			>
				{this.props.children}
			</button>
		);
	}
}
