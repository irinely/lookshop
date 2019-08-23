import React from 'react';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import './index.scss';

export default class RangeSlider extends React.Component {
	onChange = ({min, max}) => {
		min = Math.max(0, min);
		max = Math.min(max, 500);
		this.props.onChange({min, max});
	};

	render() {
		return (
			<div className="range-price">
				<InputRange
					minValue={0}
					maxValue={500}
					value={this.props.value}
					onChange={this.onChange}
				/>
				<div className="range-price__label">
					Price ${this.props.value.min} - ${this.props.value.max}
				</div>
			</div>
		);
	}
}
