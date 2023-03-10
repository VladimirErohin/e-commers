import React, {FC} from "react";
import "./ItemPage.css";
import * as S from "./styled";

const ItemPage: FC = () => {
  return (
    <>
      <div className="item-page">
        <S.PictureItem>
          <S.CollectionSamples>
            {/*<S.ImageItem src="/assets/images/shop.png"/>*/}
            {/*<S.ImageItem src="/assets/images/collections/card-five.png"/>*/}
            {/*<S.ImageItem src="/assets/images/collections/card-seven.png"/>*/}
          </S.CollectionSamples>
        </S.PictureItem>
        <div className="info-item">info</div>
      </div>
    </>
  );
};

export default ItemPage;