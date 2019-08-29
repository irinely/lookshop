import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './index.scss';
import Header from '../Header';
import Footer from '../Footer';
import Home from '../Home';
import ProductsPage from '../ProductsPage';
import ProductPage from '../ProductPage';

function App() {
	return (
		<Router>
			<div className="app">
				<div className="page">
					<Header/>
					<Switch>
						<Route exact path={process.env.PUBLIC_URL + '/'} component={Home}/>
						<Route path={process.env.PUBLIC_URL + '/products'} component={ProductsPage}/>
						<Route path={process.env.PUBLIC_URL + '/product-:id'} component={ProductPage}/>
					</Switch>
				</div>
				<Footer/>
			</div>
		</Router>
	);
}

export default App;
