import React from 'react';
import ServicesList from './ServicesList';
import { servicesData } from '../data/ServicesData';
const Services = () => {
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
