import { servicesData } from '../data/ServicesData';
const ServicesItem = ({ title, description }) => {
	return (
		<div className='grid-item'>
			<p>{title}</p>
		</div>
	);
};

export default ServicesItem;
