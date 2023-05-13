import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Cart from "../components/Cart";
import Favorite from "../components/Favorite";
import Header from "../components/Header";
import Products from "../components/Products";
import { ShopProvider } from "../components/shopContext";
function App() {
  return (
    <ShopProvider>
      <Wrapper>
        <Header />
        <MainWrapper>
          <Routes>
            <Route exact path="/home" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/favorite" element={<Favorite />} />
          </Routes>
        </MainWrapper>
      </Wrapper>
    </ShopProvider>
  );
}

const Wrapper = styled.div`
  font-family: "Roboto";
`;
const MainWrapper = styled.main`
  margin: 22px auto;
  text-align: center;
`;

export default App;
