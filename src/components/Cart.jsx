import React from "react";
import ProductCard from "./ProductCard";
import { ProductsContainer, WrapperProducts, WrapperTitle } from "./Products"; //STYLE COMPONENT
import { useShop } from "./shopContext";
const Cart = () => {
  const {products, price} = useShop();
  return (
    <WrapperProducts>
      <WrapperTitle>Cart</WrapperTitle>
      <ProductsContainer>
      {products.map((data, index) => (<ProductCard {...data} key={index} />))}
      </ProductsContainer>
        <h3>Your cart total is {price}.00$</h3>
    </WrapperProducts>
  );
};

export default Cart;
