import React, {FC} from "react";
import "./Collection.css";
import {Container} from "../Home/styled";
import {CardCollection, Input} from "../../components";


type CardInfoType = {
  img: string,
  rating: number,
  collectionName: string,
  price: number,
};


const cardsInfo: CardInfoType [] = [
  {img: "", rating: 4.8, collectionName: "Miranda Bold Hoops", price: 124,},
  {img: "", rating: 4.8, collectionName: "Miranda Bold Hoops", price: 124,},
  {img: "", rating: 4.8, collectionName: "Miranda Bold Hoops", price: 124,},
  {img: "", rating: 4.8, collectionName: "Miranda Bold Hoops", price: 124,},
  {img: "", rating: 4.8, collectionName: "Miranda Bold Hoops", price: 124,},
  {img: "", rating: 4.8, collectionName: "Miranda Bold Hoops", price: 124,},
  {img: "", rating: 4.8, collectionName: "Miranda Bold Hoops", price: 124,},
  {img: "", rating: 4.8, collectionName: "Miranda Bold Hoops", price: 124,},
  {img: "", rating: 4.8, collectionName: "Miranda Bold Hoops", price: 124,},
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
          <CardCollection />
          {/*<div className="card">*/}
          {/*  <div className="img-card"><img src="/assets/images/collections/card-one.png" alt=""/></div>*/}
          {/*  <div className="rating">*/}
          {/*    <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly sx={{color: "#163F2B"}}/>*/}
          {/*    <div className="rating-count">4.8 (38)</div>*/}
          {/*  </div>*/}
          {/*  <div className="title-collection">Miranda Bold Hoops</div>*/}
          {/*  <div className="price-collection">$124</div>*/}
          {/*</div>*/}
        </div>
        COLLECTION
      </Container>

    </>
  );
};

export default Collection;