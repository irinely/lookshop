import React from 'react';
import './index.scss';
import {Link} from 'react-router-dom';

export default class Pagination extends React.Component {
	render() {
		return (
			<div className="pagination">
				<div className="pagination__info">
					Sowing 1-22 of 347 results
				</div>
				<ul className="pagination__pages">
					<li className="pagination__page">
						<Link to={'/'}>
							1
						</Link>
					</li>
					<li className="pagination__page">
						<Link to={'/'}>
							2
						</Link>
					</li>
					<li className="pagination__page">
						<Link to={'/'}>
							3
						</Link>
					</li>
					<li className="pagination__page">
						<Link to={'/'}>
							>
						</Link>
					</li>
				</ul>
			</div>
		);
	}
}
