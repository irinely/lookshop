import React from 'react';
import './index.scss';

export default class Sale extends React.Component {
	render() {
		return (
			<div className="sale">
				<div className="container">
					<div className="sale__label">
						<div className="sale__title">
							Clearance
						</div>
						<div className="sale__wrapper">
							<div className="sale__number">
								20
							</div>
							<div className="sale__values">
								<div className="sale__value">
									%
								</div>
								<div className="sale__value">
									off
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
