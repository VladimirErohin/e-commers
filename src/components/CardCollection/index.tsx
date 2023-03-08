import React, {FC} from "react";
import Rating from "@mui/material/Rating";
import * as S from './styled';

type CardTypeProp ={
  imgCard:string,
  rating: number,
  collectionName: string,
  price:number
}

const CardCollection:FC<CardTypeProp> = ({imgCard,rating,price,collectionName,}) => {
  return (
    <S.CardCollection>
      <S.ImageCard src={imgCard} alt="cardImage"/>
      <S.Rating>
        <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly sx={{color: "#163F2B"}}/>
        <S.RatingCount>4.8 (38)</S.RatingCount>
      </S.Rating>
      <S.TitleCollection>Miranda Bold Hoops</S.TitleCollection>
      <S.PriceCollection>$124</S.PriceCollection>
    </S.CardCollection>
  );
};

export default CardCollection;