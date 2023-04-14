import React, { useContext } from 'react';
import Image from 'next/image';

import AppContext from '@context/AppContext';

import close from '@icons/icon_close.png';

import styles from '@styles/OrderItem.module.scss';

const OrderItem = ({product}) => {
	const { removeFromCart } = useContext(AppContext);

	const handleRemove = item => {
		removeFromCart(item);
	}

	return (
		<div className={styles.OrderItem}>
			<figure>
				<Image src={product?.images[0]} width={240} height={240} alt={product?.title} />
			</figure>
			<p>{product?.title}</p>
			<p>${product?.price}</p>
			<Image src={close} alt="close" onClick={() => handleRemove(product)} />
		</div>
	);
}

export default OrderItem;
