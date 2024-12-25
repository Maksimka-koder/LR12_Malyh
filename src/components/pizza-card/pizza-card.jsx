import React from 'react';
import { useState } from 'react';
import './style.css';
import pepperoni from '../../images/pepperoni.png';
import cart from '../../images/cart.svg';
export function PizzaCard() {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <div className="card">
      <img className="image" src={pepperoni} alt="Пепперони" />
      <h3 className="title">Пепперони</h3>
      <p className="description">Ничего лишнего! Томатный соус, колбаски Пепперони и Моцарелла</p>
      <div className="selector">
        <select className="dropdown">
          <option>Диаметр</option>
          <option>25 см</option>
          <option>30 см</option>
          <option>35 см</option>
        </select>
      </div>
      <div className="price">от 550₽</div>
      <div className="controls">
        <div className="buttons">
          <button className="button left" onClick={decreaseQuantity}>
            -
          </button>
          <div className="quantity">{quantity}</div>
          <button className="button right" onClick={increaseQuantity}>
            +
          </button>
        </div>
        <button className="add-to-cart">
          <img src={cart} alt="cart" className="cart-icon" />
        </button>
      </div>
    </div>
  );
}
