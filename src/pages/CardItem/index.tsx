import React, {FC} from "react";
import {Container} from "../Home/styled";
import {CardCollection, Input, Pagination} from "../../components";
import * as S from './styled';

export type CardInfoType = {
  imgCard: string,
  rating: number,
  collectionName: string,
  price: number,
};

export const cardsInfo: CardInfoType [] = [
  {imgCard: "/assets/images/collections/card-one.png", rating: 4.8, collectionName: "Miranda Bold Hoops", price: 124,},
  {imgCard: "/assets/images/collections/card-two.png", rating: 4.8, collectionName: "Miranda Bold Hoops", price: 124,},
  {imgCard: "/assets/images/collections/card-three.png", rating: 4.8, collectionName: "Miranda Bold Hoops", price: 124,},
  {imgCard: "/assets/images/collections/card-four.png", rating: 4.8, collectionName: "Miranda Bold Hoops", price: 124,},
  {imgCard: "/assets/images/collections/card-five.png", rating: 4.8, collectionName: "Miranda Bold Hoops", price: 124,},
  {imgCard: "/assets/images/collections/card-six.png", rating: 4.8, collectionName: "Miranda Bold Hoops", price: 124,},
  {imgCard: "/assets/images/collections/card-seven.png", rating: 4.8, collectionName: "Miranda Bold Hoops", price: 124,},
  {imgCard: "/assets/images/collections/card-eight.png", rating: 4.8, collectionName: "Miranda Bold Hoops", price: 124,},
  {imgCard: "/assets/images/collections/card-nine.png", rating: 4.8, collectionName: "Miranda Bold Hoops", price: 124,},
];

const CardItem: FC = () => {

  return (
    <>
      <S.MainWallpaper>
        <S.NameCollectionCard>Miranda</S.NameCollectionCard>
        <S.Content>
          Our collection-building process is like carrying a baby. We try to give it the best and make it independent Our collection-building process
          is like carrying a baby.
        </S.Content>
        <S.ShowPath>
          <S.Span>Home /</S.Span>
          <S.Span>Collections /</S.Span>
          <S.Span>Miranda Collections /</S.Span>
        </S.ShowPath>
      </S.MainWallpaper>
      <Container>
        <S.CollectionSelect>
          <Input placeholderInput="Miranda Collection" imageSrc="/assets/images/vector-down.png"/>
          <Input placeholderInput="Sorted by date (first new)" imageSrc="/assets/images/vector-down.png"/>
        </S.CollectionSelect>
        <S.CollectionCards>
          {cardsInfo.map(card => <CardCollection key={card.imgCard} {...card}/>)}
        </S.CollectionCards>
        <Pagination/>
      </Container>
    </>
  );
};

export default CardItem;