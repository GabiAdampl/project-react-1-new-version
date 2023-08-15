import React from 'react';
import './Header.css';
const Header = () => {
	return (
		<header>
			<div class='header-img'>
				<div class='header-bg'></div>
				<div class='header-text container'>
					<h1>Nasza firma oferuje najwyższej jakości produkty.</h1>
					<p>Nie wierz nam na słowo - sprawdź</p>
					<a href='#oferta' class='header-button'>
						oferta
					</a>
				</div>
			</div>
		</header>
	);
};

export default Header;
