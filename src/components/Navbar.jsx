import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="nav__wrapper">
      <ul className="ul__wrapper">
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>About us</li>
        <li>Contact</li>
      </ul>
      <div className="title__wrapper">
        <h1>
          <Link to='/'>NOCTA x NIKE</Link>
        </h1>
        <p>Sport apparel</p>
      </div>
      <div className="cart__wrapper">
        <img src="/cart.svg" width={30} alt="" />
      </div>
    </div>
  );
}
