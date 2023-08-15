import './App.css';

import Nav from './components/Nav';
import Header from './components/Header';
import Employees from './components/Employees';
import Services from './components/Services';
import Footer from './components/Footer';

const App = () => {
	return (
		<div>
			<Nav />
			<Header />
			<Employees />
			<Services />
			<Footer />
		</div>
	);
};

export default App;
