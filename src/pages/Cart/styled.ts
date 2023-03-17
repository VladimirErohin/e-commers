import styled from "styled-components";
import {theme} from "../../shared/theme";

export const Cart = styled.div`
  display: flex;
`;

export const CartWallPaperMain = styled.div`
  //display: flex;
  //position: relative;
  width: 100%;
`;

export const ToningCart = styled.div`
  position: absolute;
  z-index: 30;
  width: 50%;
  height: 100vh;

  background: rgba(22, 63, 43, 0.4);
`;

export const FullCart = styled.div`
  left: 48rem;
  position: absolute;
  z-index: 256;
  width: 50%;
  height: 100vh;

  background: white;
`;

export const CartClosedWrapper = styled.div`
  margin: 30px 26px 0 0;
`;

export const CartClosed = styled.div`
  width: 22px;
  height: 22px;
  margin-left: auto;

  background-image: url("/assets/images/close-icon.png");
`;

export const CartWrapper = styled.div`
  padding: 0 50px;
`;

export const CartTitle = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding-bottom: 32px;
  border-bottom: 1px solid #163F2B;
`;

export const CartCount = styled.div`
  font-family: 'Harmond';
  font-style: normal;
  font-weight: 800;
  font-size: 40px;
  line-height: 47px;
  color: ${theme.colors.green};
`;

export const RemoveAllBtn = styled.div`
  font-family: 'Libre Franklin';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  letter-spacing: 0.06em;
  text-transform: uppercase;

  color: #163F2B;
`;

export const CartListOrder = styled.div`
  padding-top: 32px;
`;

export const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CartItemImage = styled.img`
  width: 160px;
  height: 160px;
`;

export const CartItemCollectionInfo = styled.div`
  //margin-left: 30px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const CartNameCollection = styled.div`
  font-family: 'Libre Franklin';
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 36px;

  letter-spacing: 0.03em;

  color: ${theme.colors.green};
`;

export const CartMetalCollection = styled.div`
  display: flex;
  align-items: center;
`;


export const MetalColor = styled.div`
  border-radius: 50%;
  background-color: #D2D2D2;
  width: 14px;
  height: 14px;
`;

export const MetalInfo = styled.span`
  margin-left: 8px;
  font-family: 'Libre Franklin';
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 24px;

  color: #222222;
`;

export const  CartItemCollectionPrice= styled.div`
  margin-top:auto;
  font-family: 'Libre Franklin';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;

  text-align: right;

  color: ${theme.colors.green};
`;

export const  CartItemCounter= styled.div`
  margin-left: 2rem;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 22%;

  font-family: 'Libre Franklin';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  text-align: right;

  color: #163F2B;
`;

export const  MinusCollection= styled.div`
  //
  //font-family: 'Libre Franklin';
  //font-style: normal;
  //font-weight: 400;
  //font-size: 16px;
  //line-height: 24px;
  //
  //color: #163F2B;
`;
export const  CountCollection= styled.div`
  //font-family: 'Libre Franklin';
  //font-style: normal;
  //font-weight: 400;
  //font-size: 16px;
  //line-height: 24px;
  //
  //text-align: center;
  //
  //color: #163F2B;
`;
export const  PlusCollection= styled.div`
  //font-family: 'Libre Franklin';
  //font-style: normal;
  //font-weight: 400;
  //font-size: 16px;
  //line-height: 24px;
  //
  //text-align: right;
  //
  //color: #163F2B;
`;
export const  RemoveCollection= styled.div`
`;
//export const  = styled.div``;
