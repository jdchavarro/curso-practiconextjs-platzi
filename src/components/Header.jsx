import React, { useState, useContext } from "react";

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
  }

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
      <img src={iconMenu} alt="menu" className="menu" onClick={handleToggleMenuMobile}/>
      <div className="navbar-left">
        <img src={logo} alt="logo" className="nav-logo" />
        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furnitures</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul>
          <li className="navbar-email" onClick={handleToggleMenu}>
            platzi@example.com
          </li>
          <li className="navbar-shopping-cart" onClick={handleToggleOrders}>
            <img src={shoppingCart} alt="shopping cart" />
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
