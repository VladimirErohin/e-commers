import React from "react";
import {WallPaperMain} from "../../components";
import * as S from "./styled";

const Cart = () => {
  return (
    <>
      <S.Cart>
        <S.CartWallPaperMain><WallPaperMain/></S.CartWallPaperMain>
        <S.ToningCart>CART TEST</S.ToningCart>

        <S.FullCart>
          <S.CartClosedWrapper>
            <S.CartClosed></S.CartClosed>
          </S.CartClosedWrapper>
          <S.CartWrapper>
            <S.CartTitle>
              <S.CartCount>
                Cart(2)
              </S.CartCount>
              <S.RemoveAllBtn>remove all</S.RemoveAllBtn>
            </S.CartTitle>
            <S.CartListOrder>

              <S.CartItem>
                <S.CartItemImage src="/assets/images/shop.png"/>

                <S.CartItemCollectionInfo>
                  <S.CartNameCollection>Miranda Bold Hoops</S.CartNameCollection>
                  <S.CartMetalCollection>
                    <S.MetalColor></S.MetalColor>
                    <S.MetalInfo>925 Sterling Silver </S.MetalInfo>
                  </S.CartMetalCollection>
                  <S.CartItemCollectionPrice>$ 124</S.CartItemCollectionPrice>
                </S.CartItemCollectionInfo>

                <S.CartItemCounter>
                  <S.MinusCollection>-</S.MinusCollection>
                  <S.CountCollection>1</S.CountCollection>
                  <S.PlusCollection>+</S.PlusCollection>
                  <S.RemoveCollection>REMOVE</S.RemoveCollection>
                </S.CartItemCounter>
              </S.CartItem>

            </S.CartListOrder>
          </S.CartWrapper>
        </S.FullCart>
      </S.Cart>

    </>
  );
};

export default Cart;