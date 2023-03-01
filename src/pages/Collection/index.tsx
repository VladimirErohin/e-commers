import React, {FC} from "react";
import './Collection.css';
import {Container} from "../Home/styled";
import {Input} from "../../components";

const Collection: FC = () => {
  return (
    <>
      <div className="main-wallpaper">
        <div className="name-collection">Miranda</div>
        <div className="content">
          Our collection-building process is like carrying a baby. We try to give it the best and make it independent Our collection-building process is like carrying a baby.
        </div>
        <div className="show-path">
          <span>Home /</span>
          <span>Collections /</span>
          <span>Miranda Collections /</span>
        </div>
      </div>
      <Container>
        <div className="collection-select">
          <Input placeholderInput="Miranda Collection" imageSrc='/assets/images/vector-down.png'/>
          <Input placeholderInput="Sorted by date (first new)" imageSrc='/assets/images/vector-down.png'/>
        </div>
        <div className="collection-cards">
<div className="card">
  <div className="img-card">image</div>
  <div className="rating">rating</div>
  <div className="title-collection">title collection</div>
  <div className="price-collection">price</div>
</div>
        </div>
        COLLECTION
      </Container>

    </>
  );
};

export default Collection;