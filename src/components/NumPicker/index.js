import React from 'react';
import './index.scss';

export default class NumPicker extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			value: 1
		};
	}

	clickPlus = () => {
		this.setState((state) => ({
			value: state.value + 1
		}))
	};

	clickMinus = () => {
		this.setState((state) => ({
			value: Math.max(1, state.value - 1)
		}))
	};

	render() {
		return (
			<div className="num-picker">
				<button
					className="button"
					type="button"
					onClick={this.clickMinus}
				>
					-
				</button>
				<div className="num-picker__value">
					{this.state.value}
				</div>
				<button
					className="button"
					type="button"
					onClick={this.clickPlus}
				>
					+
				</button>
			</div>
		);
	}
}
