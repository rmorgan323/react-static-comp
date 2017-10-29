import React from 'react';
import './Footer.css';

let date = new Date();
let currentYear = date.getFullYear();

const Footer = () => {
	return (
		<div className='Footer'>
			<a>&copy; {currentYear}</a>
		</div>
	)
}

export default Footer;
