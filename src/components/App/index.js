import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './index.css';
import Header from '../Header';
import Slider from '../Slider';

function App() {
	return (
		<Router>
			<div className="App">
				<Header/>
				<Slider/>
			</div>
		</Router>
	);
}

export default App;
