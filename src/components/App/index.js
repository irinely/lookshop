import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './index.css';
import Header from '../Header';

function App() {
	return (
		<Router>
			<div className="App">
				<Header/>
			</div>
		</Router>
	);
}

export default App;
