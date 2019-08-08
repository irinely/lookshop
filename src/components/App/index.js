import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './index.css';
import Header from '../Header';
import Slider from '../Slider';
import FindUs from '../FindUs';
import Banner from '../Banner';

function App() {
	return (
		<Router>
			<div className="App">
				<Header/>
				<Slider/>
				<FindUs/>
				<Banner/>
			</div>
		</Router>
	);
}

export default App;
