import React, { useState } from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false);

  const handleCartToggle = () => {
    setIsInCart(!isInCart);
  };

  const cartText = isInCart ? "Remove From Cart" : "Add to Cart";
  const itemClass = isInCart ? "in-cart" : "";

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleCartToggle}>
        {cartText}
      </button>
    </li>
  );
}

export default Item;
