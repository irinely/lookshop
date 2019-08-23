import React from 'react';

export default class FilterListItem extends React.Component {
	render() {
		return (
			<button className={this.props.active ? 'active' : ''} type="button" onClick={this.props.onClick}>
				{this.props.children}
			</button>
		);
	}
}
