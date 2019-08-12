import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './index.css';
import Header from '../Header';
import Slider from '../Slider';
import FindUs from '../FindUs';
import Banner from '../Banner';
import Tabs from '../Tabs';
import Clearance from '../Clearance';

function App() {
	return (
		<Router>
			<div className="App">
				<Header/>
				<Slider/>
				<FindUs/>
				<Banner/>
				<Tabs/>
				<Clearance/>
			</div>
		</Router>
	);
}

export default App;
