import React from 'react';
import Slider from '../Slider';
import FindUs from '../FindUs';
import Banner from '../Banner';
import Tabs from '../Tabs';
import Clearance from '../Clearance';
import About from '../About';

export default class Home extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Slider/>
				<FindUs/>
				<Banner/>
				<Tabs/>
				<Clearance/>
				<About/>
			</React.Fragment>
		);
	}
}
