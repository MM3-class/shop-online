import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useShop } from "./shopContext";
import { FaHeart, FaHome, FaShoppingCart } from "react-icons/fa";

const Header = () => {
  const {products} = useShop();
  return (
    <LinkWrapper>
      <NavLink to="/home"><FaHome className="i"/>Home</NavLink>
      <NavLink to="/favorite"><FaHeart className="iHeart"/>Favorite</NavLink>
      <NavLink to="/cart"><FaShoppingCart className="i"/>Cart <small>{products.length}</small></NavLink>
    </LinkWrapper>
  );
};

const LinkWrapper = styled.nav`
  padding: 24px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 1.5rem;
  background-color: rgb(79, 18, 113);
  position: relative;
  a {
    color: rgba(200, 198, 215, 0.4);
    text-decoration: none;
    padding: 5px 0;
  }
  a:hover {
    color: #bfacc8;
  }
  small {
    color: #CE4257;
    position: absolute;
    padding: 3px;
    bottom: 38px;
    font-size: 17px;
  }
  .active {
    color: #c8c6d7;
    border-bottom: 1px solid #CE4257;
  }
  .i, .iHeart {
    margin-right: 5px;
    text-align: center; 
  }
  .active .iHeart {
    color: #Ce4257;
  }
`;

export default Header;
