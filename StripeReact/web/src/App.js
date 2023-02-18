import { useState } from 'react';
import './App.css';
// import spatula from './assets/spatula.jpg';
import StripeContainer from './components/StripeContainer';

function App() {
	const [showItem, setShowItem] = useState(false);
	return (
		<div className='App'>
			<h1>Printify The E-Xerox</h1>
			{showItem ? (
				<StripeContainer />
			) : (
				<>
					<h3>$10.00</h3>
					{/* <img src={spatula} alt='Spatula' /> */}
					<button onClick={() => setShowItem(true)}>Pay Now</button>
					<button onClick={() => setShowItem(true)}>Pay at Desk</button>

				</>
			)}
		</div>
	);
}

export default App;