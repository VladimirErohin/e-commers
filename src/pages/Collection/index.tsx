import React, {FC} from "react";
import "./Collection.css";
import {Container} from "../Home/styled";
import {CardCollection, Input, Pagination} from "../../components";


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


const Collection: FC = () => {

  return (
    <>
      <div className="main-wallpaper">
        <div className="name-collectionCard">Miranda</div>
        <div className="content">
          Our collection-building process is like carrying a baby. We try to give it the best and make it independent Our collection-building process
          is like carrying a baby.
        </div>
        <div className="show-path">
          <span>Home /</span>
          <span>Collections /</span>
          <span>Miranda Collections /</span>
        </div>
      </div>
      <Container>
        <div className="collection-select">
          <Input placeholderInput="Miranda Collection" imageSrc="/assets/images/vector-down.png"/>
          <Input placeholderInput="Sorted by date (first new)" imageSrc="/assets/images/vector-down.png"/>
        </div>
        <div className="collection-cards">
          {cardsInfo.map(card => <CardCollection key={card.imgCard} {...card}/>)}
        </div>
        <Pagination/>
      </Container>

    </>
  );
};

export default Collection;