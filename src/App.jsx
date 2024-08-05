import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import TopNavbar from './Components/TopNavbar';
import './css/fontawesome/css/all.min.css';

function App() {
	return (
		<div className='App'>
			{/* header with navbar */}
			<header>
				<TopNavbar />
				<Navbar />
			</header>

			<Footer />
		</div>
	);
}

export default App;
