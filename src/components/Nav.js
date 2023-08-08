import React from 'react';

const Nav = () => {
	return (
		<nav>
			{
				<section class='nav container'>
					<div class='nav-brand-name'>moja firma</div>
					<ul>
						<li class='about us'>
							<a href='#onas'> O nas</a>
						</li>
						<li class='offers'>
							<a href='#oferta'> Oferta</a>
						</li>
						<li class='contact'>
							<a href='#kontakt'> Kontakt </a>
						</li>
					</ul>
				</section>
			}
		</nav>
	);
};

export default Nav;
