import React from 'react';
import ServicesList from './ServicesList';

const Services = () => {
	const servicesData = [
		{ title: 'Usługa 1 (nowość)', description: 'Opis usługi 1' },
		{ title: 'Usługa 2', description: 'Opis usługi 2' },
		{ title: 'Usługa 3', description: 'Opis usługi 3' },
		{ title: 'Usługa 4', description: 'Opis usługi 4' },
		{ title: 'Usługa 5', description: 'Opis usługi 5' },
		{ title: 'Usługa 6', description: 'Opis usługi 6' },
	];

	return (
		<section className='offer blue-bcg'>
			<h2 className='offer-h2 container' id='oferta'>
				Czym zajmuje się nasza firma?
			</h2>
			<ServicesList services={servicesData} />
		</section>
	);
};

export default Services;
