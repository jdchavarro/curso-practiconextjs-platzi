import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import '@styles/NotFound.scss';

import logo from '@logos/logo_yard_sale.svg';
import notFound from '@icons/icon_not_found.svg';

const NotFound = () => {
	return (
		<div className="NotFound">
			<div className="not-found__form">
				<Image src={logo} alt="logo" className="not-found__logo" />
				<h1 className="not-found__title">404</h1>
				<p className="not-found__subtitle">Sorry, we can`&apos;`t find that page! Don`&apos;`t worry though, everything is STILL AWESOME!</p>
				<div className="not-found__image">
					<Image src={notFound} alt="not-found-image" />
				</div>
				<button className="primary-button not-found__button"><Link href="/">Home</Link></button>
			</div>
		</div>
	);
};

export default NotFound;
