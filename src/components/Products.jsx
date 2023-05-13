import React from "react";
import styled from "styled-components";
import { shopData } from "../App/shopData";
import ProductCard from "./ProductCard";

const Products = () => {
  return (
    <WrapperProducts>
      <WrapperTitle>Products</WrapperTitle>
      <ProductsContainer>
        {shopData.map((data, index) => (
          <ProductCard key={index} {...data}/>
        ))}
      </ProductsContainer>
    </WrapperProducts>
  );
};

export const ProductsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 45px;
  flex-wrap: wrap;
  margin: 42px auto;
`;

export const WrapperProducts = styled.div`
  margin: 20px;
`;

export const WrapperTitle = styled.h1`
  font-size: 2.2rem;
  letter-spacing: 3px;
  color: #4f1271;
`;

export default Products;
