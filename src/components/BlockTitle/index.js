import React from 'react';
import './index.scss';

export default class BlockTitle extends React.Component {
	render() {
		const {text} = this.props;

		return (
			<div className="block-title">
				{text}
			</div>
		);
	}
}
