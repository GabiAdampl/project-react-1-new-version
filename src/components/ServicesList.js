import ServicesItem from './ServicesItem';
import ServicesData from '../data/ServicesData';

function ServicesList({ services }) {
	const formattedServices = services.map(service => {
		let title = service.title;

		if (service.isNew) {
			title = title.replace('(nowość)', '');
		} else {
			title = `${title} (nowość).`;
		}

		return { service, title };
	});

	return (
		<div className='offer-grid-container'>
			{formattedServices.map((service, index) => (
				<ServicesItem key={index} title={service.title} description={service.description} />
			))}
		</div>
	);
}

export default ServicesList;
