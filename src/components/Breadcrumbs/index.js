import React from 'react';
import {Link} from 'react-router-dom';
import './index.scss';

export default class Breadcrumbs extends React.Component {
	render() {
		return (
			<ul className="breadcrumbs">
				<li className="breadcrumbs__item home">
					<Link to="/">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 10">
							<path fill="#79706d" d="M1.833 5.68V10h2.445V7.252a.34.34 0 0 1 .344-.338h1.756a.34.34 0 0 1 .344.338V10h2.426l.019-4.32H11L5.592.002 0 5.68z"/>
						</svg>
					</Link>
				</li>
				<li className="breadcrumbs__item">
					<Link to="/">
						Women
					</Link>
				</li>
				<li className="breadcrumbs__item">
					<Link to="/">
						Dresses
					</Link>
				</li>
			</ul>
		);
	}
}
