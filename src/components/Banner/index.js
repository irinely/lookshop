import React from 'react';
import {Link} from 'react-router-dom';
import './index.scss';

import image1 from './images/action-1.png';
import image2 from './images/action-2.png';
import image3 from './images/action-3.png';
import image4 from './images/action-4.png';

export default class Banner extends React.Component {
	render() {
		return (
			<div className="banner">
				<div className="container">
					<div className="banner__wrapper">
						<div className="banner__col-1" style={{width: `50%`}}>
							<Link to={'/products'} className="banner__item" style={{width: `100%`}}>
								<img src={image1} alt=""/>
							</Link>
						</div>
						<div className="banner__col-2" style={{width: `50%`}}>
							<Link to={'/products'} className="banner__item" href="/" style={{flexBasis: `100%`}}>
								<img src={image2} alt=""/>
							</Link>
							<Link to={'/products'} className="banner__item" href="/" style={{width: `50%`}}>
								<img src={image3} alt=""/>
							</Link>
							<Link to={'/products'} className="banner__item" href="/" style={{width: `50%`}}>
								<img src={image4} alt=""/>
							</Link>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
