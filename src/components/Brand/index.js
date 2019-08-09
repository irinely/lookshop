import React from 'react';
import './index.scss';

export default class Brand extends React.Component {
	render() {
		const {image, name} = this.props;

		return (
			<div className="brand">
				<img src={image} alt={name}/>
			</div>
		);
	}
}
