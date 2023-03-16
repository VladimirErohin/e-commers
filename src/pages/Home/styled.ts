import styled from "styled-components";
import {theme} from "../../shared/theme";

export const Container = styled.div`
  max-width: 1920px; /*максимальная ширина или столько сколько есть места(задаем для адаптива)*/
  margin: 0 auto; /*по центру*/
  padding: 0 80px; /* не по плану*/

  //border: orange solid 1px;
`;

export const Header = styled.header`
  width: 100%;
  position: absolute; //*
  z-index: 20;

  //color: #ffffff;         //*
  //border-bottom: 0.5px solid #E0E5E3;  //for OrderPage

  //position: fixed;
  //z-index: 20;
  //background-color: #738C80;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1; /*сдвинули к центру logo/phone*/
  flex-basis: 0; /*сдвинули к центру logo/phone*/

  text-transform: uppercase;
  padding: 34px 0;
`;

export const LanguageItem = styled.li`
  cursor: pointer;
`;

export const LanguageToggle = styled.ul`
  display: flex;
  align-items: flex-end;
  font-family: 'Libre Franklin', sans-serif;

  ${LanguageItem}:nth-child(2) {
    margin-left: 24px;
  }
`;

export const WrapperEllipse = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Ellipse = styled.div`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  margin: 0 auto;
  background-color: ${theme.colors.white};
  margin-bottom: 6px;
`;

export const LanguageActive = styled.div`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: ${theme.colors.white};
`;

export const Language = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: ${theme.colors.white};
`;

export const LoginBtn = styled.a`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: ${theme.colors.white};
`;

export const Logo = styled.div`
  font-family: 'Rany', sans-serif;
  font-weight: 300;
  font-size: 36px;
  line-height: 32px;
  padding-left: 10rem;
  text-transform: uppercase;
  color: ${theme.colors.white};
`;

export const ListItems = styled.div`
  display: flex;
  align-items: center;
`;

export const ListOptions = styled.div`
  display: flex;
`;

export const SearchBtn = styled.a`
`;

export const SearchImage = styled.div`
  background-image: url("/assets/images/search-icon-black.png"); //url("/assets/images/search-icon.png");
  width: 24px;
  height: 24px;
  margin-left: 60px;
`;

export const LikeBtn = styled.a`
  margin-left: 28px;
`;

export const LikeImage = styled.div`
  background-image: url("/assets/images/like-icon-black.png"); //url("/assets/images/like-icon.png");
  width: 24px;
  height: 24px;
  background-repeat: no-repeat;
`;

export const BasketBtn = styled(LikeBtn)`

`;

export const BasketImage = styled.div`
  background-image: url("/assets/images/basket-icon-black.png"); //url("/assets/images/basket-icon.png");
  width: 24px;
  height: 24px;
  background-repeat: no-repeat;
`;
