import './App.css';

function App() {
	return (
		<div className='App'>
			{/* header with navbar */}
			<header>
				<nav className='main-nav'>
					<ul className='logo-block'>
						<li className='logo'>Logo</li>
					</ul>
					<ul className='nav-items'>
						<li className='nav-item'>Home</li>
						<li className='nav-item'>About</li>
						<li className='nav-item'>Services</li>
						<li className='nav-item'>Projects</li>
						<li className='nav-item'>Contact</li>
					</ul>
				</nav>
			</header>
		</div>
	);
}

export default App;
