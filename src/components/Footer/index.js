import React from 'react';
import {Link} from 'react-router-dom';
import './index.scss';

import image1 from './images/p1.png';
import image2 from './images/p2.png';
import image3 from './images/p3.png';
import image4 from './images/p4.png';
import image5 from './images/p5.png';
import s1 from './images/s1.png';
import s2 from './images/s2.png';
import s3 from './images/s3.png';
import s4 from './images/s4.png';
import s5 from './images/s5.png';
import s6 from './images/s6.png';
import secured from './images/secured.png';

export default class Footer extends React.Component {
	render() {
		return (
			<footer className="footer">
				<div className="footer__top">
					<div className="container">
						<div className="footer__top__wrapper">
							<div className="footer__top__title">
								We accept
							</div>
							<div className="footer__top__list">
								<img className="payment" src={image1}/>
								<img className="payment" src={image2}/>
								<img className="payment" src={image3}/>
								<img className="payment" src={image4}/>
								<img className="payment" src={image5}/>
							</div>
						</div>
					</div>
				</div>
				<div className="footer__middle">
					<div className="container">
						<div className="footer__middle__wrapper">
							<div className="footer__middle__col">
								<div className="footer__middle__title">
									Customer Service
								</div>
								<div className="footer__middle__list">
									<Link className="footer__middle__list__item" to={'/'}>
										Contact
									</Link>
									<Link className="footer__middle__list__item" to={'/'}>
										FAQ
									</Link>
									<Link className="footer__middle__list__item" to={'/'}>
										Terms of payment
									</Link>
									<Link className="footer__middle__list__item" to={'/'}>
										Terms of sale
									</Link>
									<Link className="footer__middle__list__item" to={'/'}>
										Delivery terms and conditions
									</Link>
									<Link className="footer__middle__list__item" to={'/'}>
										Returns and Refunds
									</Link>
								</div>
							</div>
							<div className="footer__middle__col">
								<div className="footer__middle__title">
									Information
								</div>
								<div className="footer__middle__list">
									<Link className="footer__middle__list__item" to={'/'}>
										Affiliate
									</Link>
									<Link className="footer__middle__list__item" to={'/'}>
										Cookies
									</Link>
									<Link className="footer__middle__list__item" to={'/'}>
										How to Shop
									</Link>
									<Link className="footer__middle__list__item" to={'/'}>
										About Nelly
									</Link>
									<Link className="footer__middle__list__item" to={'/'}>
										Investor relations
									</Link>
								</div>
							</div>
							<div className="footer__middle__col">
								<div className="footer__middle__title">
									Campaigns
								</div>
								<div className="footer__middle__list">
									<Link className="footer__middle__list__item" to={'/'}>
										Evening dresses
									</Link>
									<Link className="footer__middle__list__item" to={'/'}>
										Makeup
									</Link>
									<Link className="footer__middle__list__item" to={'/'}>
										Fashion forward
									</Link>
									<Link className="footer__middle__list__item" to={'/'}>
										Training clothes
									</Link>
									<Link className="footer__middle__list__item" to={'/'}>
										Special Occasion Dresses
									</Link>
								</div>
							</div>
							<div className="footer__middle__col">
								<div className="footer__middle__title">
									Stores
								</div>
								<div className="footer__middle__list">
									<Link className="footer__middle__list__item" to={'/'}>
										Paris
									</Link>
									<Link className="footer__middle__list__item" to={'/'}>
										New York
									</Link>
									<Link className="footer__middle__list__item" to={'/'}>
										London
									</Link>
									<Link className="footer__middle__list__item" to={'/'}>
										Madrid
									</Link>
									<Link className="footer__middle__list__item" to={'/'}>
										Tokio
									</Link>
								</div>
							</div>
							<div className="footer__middle__col">
								<div className="footer__middle__title">
									Social
								</div>
								<div className="footer__middle__list">
									<div className="socials">
										<Link className="social" to={'/'}>
											<img src={s1} alt="Twitter"/>
										</Link>
										<Link className="social" to={'/'}>
											<img src={s2} alt="Pinterest"/>
										</Link>
										<Link className="social" to={'/'}>
											<img src={s3} alt="Facebook"/>
										</Link>
										<Link className="social" to={'/'}>
											<img src={s4} alt="Google+"/>
										</Link>
										<Link className="social" to={'/'}>
											<img src={s5} alt="Social1"/>
										</Link>
										<Link className="social" to={'/'}>
											<img src={s6} alt="Social2"/>
										</Link>
									</div>
								</div>
							</div>
							<div className="footer__middle__col">
								<div className="footer__middle__title">
								</div>
								<div className="footer__middle__list">
									<img className="secured" src={secured} alt=""/>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="footer__bottom">
					<div className="container">
						<div className="footer__bottom__wrapper">
							<div className="footer__bottom__list">
								<Link className="footer__bottom__list__item" to={'/'}>
									Privacy & Cookies
								</Link>
								<Link className="footer__bottom__list__item" to={'/'}>
									Terms & Conditions
								</Link>
								<Link className="footer__bottom__list__item" to={'/'}>
									Accessibility
								</Link>
								<Link className="footer__bottom__list__item" to={'/'}>
									Store Directory
								</Link>
								<Link className="footer__bottom__list__item" to={'/'}>
									About Us
								</Link>
							</div>
							<div className="footer__bottom__copyright">
								© LookShop.com
							</div>
						</div>
					</div>
				</div>
			</footer>
		);
	}
}
