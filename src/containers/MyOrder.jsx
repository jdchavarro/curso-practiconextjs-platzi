import React, { useContext } from 'react';

import AppContext from '@context/AppContext';

import OrderItem from '@components/OrderItem';

import flechita from '@icons/flechita.svg';

import styles from '@styles/MyOrder.module.scss';

const MyOrder = () => {
	const { state, setToggleOrders } = useContext(AppContext);

	const sumTotal = () => {
		const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
		const sum = state.cart.reduce(reducer, 0);
		return sum;
	}

	return (
		<aside className={styles.MyOrder}>
			<div className="title-container">
				<img src={flechita} alt="arrow" onClick={() => setToggleOrders(false)}/>
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
				<div className="my-order-content__order-item-list">
					{state.cart.map(product => (
						<OrderItem product={product} key={`orderItem-${product.id}`} />
					))}
				</div>
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>${sumTotal()}</p>
				</div>
				<button className="primary-button">
					Checkout
				</button>
			</div>
		</aside>
	);
}

export default MyOrder;
