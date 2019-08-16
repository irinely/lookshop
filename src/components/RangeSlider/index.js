import React from 'react';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import './index.scss';

export default class RangeSlider extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			value: { min: 0, max: 500 },
		};
	}

	render() {
		return (
			<div className="range-price">
				<InputRange
					minValue={0}
					maxValue={500}
					value={this.state.value}
					onChange={value => this.setState({ value })}
				/>
				<div className="range-price__label">
					Price ${this.state.value.min} - ${this.state.value.max}
				</div>
			</div>
		);
	}
}
