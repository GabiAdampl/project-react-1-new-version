import React from 'react';
import './ServicesData.css';

export const servicesData = [
	{ title: 'Usługa 1', description: 'Opis usługi 1', isNew: true },
	{ title: 'Usługa 2', description: 'Opis usługi 2', isNew: false },
	{ title: 'Usługa 3', description: 'Opis usługi 3', isNew: true },
	{ title: 'Usługa 4', description: 'Opis usługi 4', isNew: false },
	{ title: 'Usługa 5', description: 'Opis usługi 5', isNew: true },
	{ title: 'Usługa 6', description: 'Opis usługi 6', isNew: false },
];

const formattedServicesData = servicesData.map(service => {
	if (service.isNew) {
		return { ...service, title: service.title.replace('(nowość)', '') };
	} else {
		return { ...service, title: `${service.title} (nowość).` };
	}
});

const Services = () => {
	return (
		<section className='offer blue-bcg'>
			<h2 className='offer-h2 container' id='oferta'>
				Czym zajmuje się nasza firma?
			</h2>
			{formattedServicesData.map((service, index) => (
				<div className='grid-item' key={index}>
					<p>
						{service.title}
						{service.isNew && <span className='red-dot'></span>}
					</p>
					<div className='circle'></div>
				</div>
			))}
		</section>
	);
};

export default Services;
