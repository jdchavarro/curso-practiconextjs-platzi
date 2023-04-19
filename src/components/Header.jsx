import React, { useState, useContext } from "react";
import Image from "next/image";
import Link from "next/link";

import AppContext from "@context/AppContext";

import Menu from "@components/Menu";
import MenuMobile from "@components/MenuMobile";

import MyOrder from "@containers/MyOrder";

import iconMenu from "@icons/icon_menu.svg";
import shoppingCart from "@icons/icon_shopping_cart.svg";
import logo from "@logos/logo_yard_sale.svg";

//import "@styles/Header.scss";
import styles from "@styles/Header.module.scss";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleMenuMobile, setToggleMenuMobile] = useState(false);
  const { state, setToggleOrders } = useContext(AppContext);

  const handleToggleMenuMobile = () => {
    setToggleMenuMobile(!toggleMenuMobile);
  };

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
    setToggleOrders(false);
  };

  const handleToggleOrders = () => {
    setToggleMenu(false);
    // setToggleOrders(!toggleOrders);
    setToggleOrders(!state.toggleOrders);
  };

  return (
    <nav className={styles.Nav}>
      <Image src={iconMenu} alt="menu" className={styles.menu} onClick={handleToggleMenuMobile}/>
      <div className={styles["navbar-left"]}>
        <Link href='/' passHref>
        <Image src={logo} alt="logo" className={styles["nav-logo"]} />
        </Link>
        <ul>
          <li>
            <Link href="/">All</Link>
          </li>
          <li>
            <Link href="/">Clothes</Link>
          </li>
          <li>
            <Link href="/">Electronics</Link>
          </li>
          <li>
            <Link href="/">Furnitures</Link>
          </li>
          <li>
            <Link href="/">Toys</Link>
          </li>
          <li>
            <Link href="/">Others</Link>
          </li>
        </ul>
      </div>
      <div className={styles["navbar-right"]}>
        <ul>
          <li className={styles["navbar-email"]} onClick={handleToggleMenu} onKeyDown={handleToggleMenu} role='presentation'>
            platzi@example.com
          </li>
          <li className={styles["navbar-shopping-cart"]} onClick={handleToggleOrders} onKeyDown={handleToggleOrders} role='presentation'>
            <Image src={shoppingCart} alt="shopping cart" />
            {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
          </li>
        </ul>
      </div>
      {toggleMenu && <Menu />}
      {state.toggleOrders && <MyOrder />}
      {toggleMenuMobile && <MenuMobile />}
    </nav>
  );
};

export default Header;
