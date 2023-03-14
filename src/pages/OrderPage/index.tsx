import React, {FC} from "react";
import "./ItemPage.css";
import * as S from "./styled";

const OrderPage: FC = () => {
  return (
    <>
      <S.ItemPage>
        <S.PictureItem>
          <S.CollectionSamples>
            <S.ImageItem src="/assets/images/shop.png"/>
            <S.ImageItem src="/assets/images/collections/card-five.png"/>
            <S.ImageItem src="/assets/images/collections/card-seven.png"/>
          </S.CollectionSamples>
        </S.PictureItem>
        <S.InfoItem>
          info
        </S.InfoItem>
      </S.ItemPage>
    </>
  );
};

export default OrderPage;