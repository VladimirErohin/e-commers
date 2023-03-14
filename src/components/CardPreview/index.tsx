import React, {FC} from "react";
import * as S from "./styled";

// type CollectionType={
//   image:string,
//   name:string,
// };
//
// const collectionCarts: Array<CollectionType> = [
//   {image:"/assets/images/lilith-main.png", name:"Lilith"},
//   {image:"/assets/images/rose-main.png", name:"Rose"},
//   {image:"/assets/images/miranda-main.png", name:"Miranda"},
// ];

const CardPreview: FC = () => {

  return (
    <>
      <S.WrapperMain>
        <S.CollectionTitle>
          <S.TitleCollection>Collections</S.TitleCollection>
          <S.CollectionDescription>
            Each collection is inspired by something special. If you are close to one item, you should definitely see the entire collection.
          </S.CollectionDescription>
        </S.CollectionTitle>
        <S.CollectionsMain>
          <S.CollectionCart >
            <S.Image src="/assets/images/lilith-main.png" alt="lilith"/>
            <S.CollectionName>Lilith</S.CollectionName>
            <S.WrapperBtn>
              <S.SeeCollection>SEE COLLECTION</S.SeeCollection>
            </S.WrapperBtn>
          </S.CollectionCart>
          <S.CollectionCart >
            <S.Image src="/assets/images/rose-main.png" alt="rose"/>
            <S.CollectionName>Rose</S.CollectionName>
            <S.WrapperBtn>
              <S.SeeCollection>SEE COLLECTION</S.SeeCollection>
            </S.WrapperBtn>
          </S.CollectionCart>
          <S.CollectionCart >
            <S.Image src="/assets/images/miranda-main.png" alt="miranda"/>
            <S.CollectionName>Miranda</S.CollectionName>
            <S.WrapperBtn>
              <S.SeeCollection>SEE COLLECTION</S.SeeCollection>
            </S.WrapperBtn>
          </S.CollectionCart>
        </S.CollectionsMain>
      </S.WrapperMain>
    </>
  );
};

export default CardPreview;