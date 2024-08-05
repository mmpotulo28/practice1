const Navbar = () => {
	return (
		<nav className='main-nav'>
			<ul className='logo-block'>
				<li className='logo'>Mpotulo</li>
			</ul>
			<ul className='nav-items'>
				<li className='nav-item'>
					<i className='fas fa-home'></i> Home
				</li>
				<li className='nav-item'>
					<i className='fas fa-info-circle'></i> About
				</li>
				<li className='nav-item'>
					<i className='fas fa-cogs'></i> Services
				</li>
				<li className='nav-item'>
					<i className='fas fa-folder-open'></i> Projects
				</li>
				<li className='nav-item'>
					<i className='fas fa-envelope'></i> Contact
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
