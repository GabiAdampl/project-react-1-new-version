import './Nav.css';
const Nav = () => {
	return (
		<nav>
			<section className='nav container'>
				<div className='nav-brand-name'>moja firma</div>
				<ul>
					<li className='about us'>
						<a href='#onas'> O nas</a>
					</li>
					<li className='offers'>
						<a href='#oferta'> Oferta</a>
					</li>
					<li>
						<a className='contact' href='#kontakt'>
							{' '}
							Kontakt{' '}
						</a>
					</li>
				</ul>
			</section>
		</nav>
	);
};

export default Nav;
