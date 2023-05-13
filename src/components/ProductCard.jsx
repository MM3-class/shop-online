import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { useShop } from "./shopContext";
import { FaRegHeart } from "react-icons/fa";

const ProductCard = ({ name, price, imageUrl }) => {
  const {
    favorite,
    products,
    addToCart,
    removeFromCart,
    addToFavorite,
    removeFromFavorite,
  } = useShop();
  const [isInCart, setIsInCart] = useState(false);
  const [isInFav, setIsInFav] = useState(false);

  const updateCart = useCallback(
    async function () {
      const productInCart = products.find((product) => product.name === name);
      if (productInCart) {
        setIsInCart(true);
      } else {
        setIsInCart(false);
      }
    },
    [products, name]
  );

  const updateFav = useCallback(
    async function () {
      const fav = favorite.find((product) => product.name === name);
      if (fav) {
        setIsInFav(true);
      } else {
        setIsInFav(false);
      }
    },
    [favorite, name]
  );

  useEffect(() => {
    updateCart();
    updateFav();
  }, [updateCart, updateFav]);

  const handleClick = () => {
    const card = { name, price, imageUrl };
    if (isInCart) {
      removeFromCart(card);
    } else {
      addToCart(card);
    }
    console.log(card);
  };
  const handleFav = () => {
    const fav = { name, price, imageUrl };
    if (isInFav) {
      removeFromFavorite(fav);
    } else {
      addToFavorite(fav);
    }
    console.log(fav);
  };
  return (
    <>
      <Card>
        <img src={imageUrl} alt={name} />
        <ProductTitle>
          <h4>{name}</h4>
          <h6>{price}.00$</h6>
        </ProductTitle>
        <Button onClick={handleClick} isInCart={isInCart}>
          {isInCart ? "-" : "+"}
        </Button>
        <FavIcon onClick={handleFav} isInFav={isInFav}>
        <FaRegHeart className="i"/>
        </FavIcon>
      </Card>
    </>
  );
};

const Card = styled.div`
  position: relative;
  box-shadow: 0 0 15px 0 #240fbd7f;
  height: 400px;
  width: 400px;
  img {
    width: 100%;
    height: 100%;
  }
`;
const FavIcon = styled.div`
  position: absolute;
  top: 5px;
  left: 5px;
  font-size: 26px;
  cursor: pointer;
  .i {
  color: ${(props) => props.isInFav ? "#Ce4257" : ""}

}
`;
const Button = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  border: none;
  color: #fff;
  font-size: 1.6rem;
  cursor: pointer;
  background-color: ${(props) => props.isInCart ? "#Ce4257" : "#60c95d"}
`;
const ProductTitle = styled.div`
  position: absolute;
  bottom: 0;
  background-color: rgba(200, 198, 215, 0.5);
  width: 100%;
  h4,
  h6 {
    font-size: 1.4rem;
    font-weight: bold;
    text-align: start;
    padding: 12px;
  }
`;

export default ProductCard;
