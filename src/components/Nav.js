import './Nav.css';
const Nav = () => {
	return (
		<nav className='nav'>
			<section className='container'>
				<div className='nav-brand-name'>moja firma</div>
				<ul className='nav-list'>
					<li className='nav-list-item'>
						<a href='#onas'> O nas</a>
					</li>
					<li className='nav-list-item'>
						<a href='#oferta'> Oferta</a>
					</li>
					<li className='nav-list-item'>
						<a className='contact' href='#kontakt'>
							Kontakt
						</a>
					</li>
				</ul>
			</section>
		</nav>
	);
};

export default Nav;
