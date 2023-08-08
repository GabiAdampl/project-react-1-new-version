import React from 'react';

const Employees = () => {
	return (
		<section className='our-specjalists container' id='onas'>
			{<><h2 class="offer-h1 container">Nasi specjaliści</h2><section class="specjalist">
				<div class="first-specjalist-img"></div>
				<div>
					<p class="bold-text">Janina Kowalska</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, tempore illo exercitationem unde
						voluptate, repellendus quisquam odio ut soluta alias ducimus autem fugiat, reiciendis omnis
						provident
						earum minima corporis molestiae.
					</p>
				</div>
			</section><section class="specjalist">
					<div class="second-specjalist-img"></div>
					<div>
						<p class="bold-text specjalist-reverse-text">Krystyna Pospolita</p>
						<p class="specjalist-reverse-text">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, tempore illo exercitationem unde
							voluptate, repellendus quisquam odio ut soluta alias ducimus autem fugiat, reiciendis omnis
							provident
							earum minima corporis molestiae.
						</p>
					</div>
				</section></>}
		</section>
	);
};

export default Employees;
