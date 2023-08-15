export const servicesData = [
	{ title: 'Usługa 1', description: 'Opis usługi 1', isNew: true },
	{ title: 'Usługa 2', description: 'Opis usługi 2', isNew: false },
	{ title: 'Usługa 3', description: 'Opis usługi 3', isNew: true },
	{ title: 'Usługa 4', description: 'Opis usługi 4', isNew: false },
	{ title: 'Usługa 5', description: 'Opis usługi 5', isNew: true },
	{ title: 'Usługa 6', description: 'Opis usługi 6', isNew: false },
];

function createServiceElement(service) {
	const serviceItem = document.createElement('div');
	serviceItem.classList.add('service-item');

	const titleElement = document.createElement('h3');
	titleElement.innerText = service.title;
	serviceItem.appendChild(titleElement);

	const descriptionElement = document.createElement('p');
	descriptionElement.innerText = service.description;
	serviceItem.appendChild(descriptionElement);

	if (service.isNew) {
		const newLabel = document.createElement('span');
		newLabel.classList.add('new-label');
		newLabel.innerText = '(nowość).';
		serviceItem.appendChild(newLabel);
	}

	return serviceItem;
}

document.addEventListener('DOMContentLoaded', function () {
	const servicesContainer = document.getElementById('services-container');

	servicesData.forEach(service => {
		const serviceElement = createServiceElement(service);
		servicesContainer.appendChild(serviceElement);
	});
});
