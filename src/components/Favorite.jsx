import React from "react";
import ProductCard from "./ProductCard";
import { ProductsContainer, WrapperProducts, WrapperTitle } from "./Products"; //STYLE COMPONENT
import { useShop } from "./shopContext";
const Favorite = () => {
  const { favorite } = useShop();
  return (
    <WrapperProducts>
      <WrapperTitle>Favorite</WrapperTitle>
      <ProductsContainer>
        {favorite.map((data, index) => (
          <ProductCard {...data} key={index} />
        ))}
      </ProductsContainer>
    </WrapperProducts>
  );
};

export default Favorite;
