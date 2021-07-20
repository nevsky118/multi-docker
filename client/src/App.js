import logo from './logo.svg';
import './App.css';
import Fib from './Fib';
import OtherPage from './OtherPage';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function App() {
	return (
		<Router>
			<div className="App">
				<h1 className="App-title">Welcome to REact</h1>
				<Link to="/">Home</Link>
				<br />
				<Link to="/otherpage">Other Page</Link>
				<div>
					<Route exact path="/" component={Fib} />
					<Route path="/otherpage" component={OtherPage} />
				</div>
			</div>
		</Router>
	);
}

export default App;
