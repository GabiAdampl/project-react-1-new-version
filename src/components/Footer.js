import React from 'react';

const Footer = () => {
	return (
		<footer>
			<section className='grey-bcg'>
				<section className='footer container'>
					{
						<><p class="footer-text">Nazwa Firmy - wszelkie prawa zastrzeżone, 2023</p><div class='footer-icons'>
							<i class='fa-brands fa-instagram'></i>
							<i class='fa-brands fa-square-facebook'></i>
						</div></>
					}
				</section>
			</section>
		</footer>
	);
};

export default Footer;
