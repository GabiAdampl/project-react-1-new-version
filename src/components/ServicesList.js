import React from 'react';
import ServicesItem from './ServicesItem';

const ServicesList = ({ services }) => {
	return (
		<div className='offer-grid-container'>
			{services.map((service, index) => (
				<ServicesItem key={index} title={service.title} description={service.description} />
			))}
		</div>
	);
};

export default ServicesList;
