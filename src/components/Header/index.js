import React from 'react';
import './index.scss';
import Currency from '../Currency';

export default class Header extends React.Component {
	render() {
		return (
			<header className="header">
				<div className="header__top">
					<div className="container">
						<div className="header__phone">
							Custom care: 888-23-4567
						</div>
						<div className="header__actions">
							<Currency/>
						</div>
					</div>
				</div>
			</header>
		);
	}
}
