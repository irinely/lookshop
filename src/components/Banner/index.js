import React from 'react';
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
							<a className="banner__item" href="/" style={{width: `100%`}}>
								<img src={image1} alt=""/>
							</a>
						</div>
						<div className="banner__col-2" style={{width: `50%`}}>
							<a className="banner__item" href="/" style={{flexBasis: `100%`}}>
								<img src={image2} alt=""/>
							</a>
							<a className="banner__item" href="/" style={{width: `50%`}}>
								<img src={image3} alt=""/>
							</a>
							<a className="banner__item" href="/" style={{width: `50%`}}>
								<img src={image4} alt=""/>
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
