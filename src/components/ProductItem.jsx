import React, { useContext, useState } from 'react';
import Image from 'next/image';

import AppContext from '@context/AppContext'
import addToCartImage from '@icons/bt_add_to_cart.svg'
import addedToCartImage from '@icons/bt_added_to_cart.svg';

import styles from '@styles/ProductItem.module.scss';

const ProductItem = ({product}) => {
	const [ cartImage, setCartImage ] = useState(addToCartImage);
	const { state, addToCart, removeFromCart } = useContext(AppContext);

	const productInCart = (item, id) => !!state.cart.find(item => item.id === id);
	
	const handleClick = item => {
		if(productInCart(item, item.id)) {
			removeFromCart(item)
			setCartImage(addToCartImage)
		} else {
			addToCart(item);
			setCartImage(addedToCartImage)
		}
	}

	return (
		<div className={styles.ProductItem}>
			<Image /* loader={() => product.images[0]}  */src={product.images[0]} alt={product.title} width="240" height="240" />
			<div className={styles["product-info"]}>
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={() => handleClick(product)}>
					<Image src={cartImage} alt="add to cart" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;
