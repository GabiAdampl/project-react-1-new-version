import './Header.css';
const Header = () => {
	return (
		<header className='header'>
			<div className='header-img'>
				<div className='header-bg'></div>
				<div className='header-text container'>
					<h1 className='h1'> Nasza firma oferuje najwyższej jakości produkty.</h1>
					<p>Nie wierz nam na słowo - sprawdź</p>
					<a href='#oferta' className='header-button'>
						oferta
					</a>
				</div>
			</div>
		</header>
	);
};

export default Header;
