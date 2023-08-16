import './Employees.css';
const Employees = () => {
	return (
		<section className='our-specjalists container' id='onas'>
			<h2 className='offer-h1 container'>Nasi specjaliści</h2>
			<section className='specjalist'>
				<div className='first-specjalist-img'></div>
				<div>
					<p className='bold-text'>Janina Kowalska</p>
					<p className='opis'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, tempore illo exercitationem unde voluptate,
						repellendus quisquam odio ut soluta alias ducimus autem fugiat, reiciendis omnis provident earum minima
						corporis molestiae.
					</p>
				</div>
			</section>
			<section className='specjalist'>
				<div className='second-specjalist-img'></div>
				<div>
					<p className='bold-text specjalist-reverse-text'>Krystyna Pospolita</p>
					<p className='specjalist-reverse-text'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, tempore illo exercitationem unde voluptate,
						repellendus quisquam odio ut soluta alias ducimus autem fugiat, reiciendis omnis provident earum minima
						corporis molestiae.
					</p>
				</div>
			</section>
		</section>
	);
};

export default Employees;
