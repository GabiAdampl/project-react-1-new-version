import { servicesData } from '../data/ServicesData';
import './Services.css';

const Services = () => {
	return (
		<section className='offer blue-bcg'>
			<h2 className='offer-h2 container' id='oferta'>
				Czym zajmuje się nasza firma?
			</h2>
			<div className='offer-grid-container'>
				{servicesData.map((service, index) => (
					<div className='grid-item' key={index}>
						<p>{service.title}</p>
						{service.isNew && <p>(nowość)</p>}
						{service.isNew && <span className='circle'></span>}
					</div>
				))}
			</div>
		</section>
	);
};

export default Services;
