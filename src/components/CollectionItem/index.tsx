import React, {FC} from "react";
import * as S from "./styled";

type CollectionItemPropsType = {
  image:string,
  name:string,
}

const CollectionItem:FC <CollectionItemPropsType>= ({image, name}) => {
  return (
    <S.CollectionCart key={name}>
      <S.Image src={image} alt="lilith"/>
      <S.CollectionDescription>{name}</S.CollectionDescription>
      <S.WrapperBtn>
        <S.SeeCollection>SEE COLLECTION</S.SeeCollection>
      </S.WrapperBtn>
    </S.CollectionCart>
  );
};

export default CollectionItem;