import React, {FC} from "react";
import "./CollectionMain.css";
import {CollectionItem} from "../index";


type CollectionType={
  image:string,
  name:string,
};

const collectionCarts: Array<CollectionType> = [
  {image:"/assets/images/lilith-main.png", name:"Lilith"},
  {image:"/assets/images/rose-main.png", name:"Rose"},
  {image:"/assets/images/miranda-main.png", name:"Miranda"},
];

const CollectionMain: FC = () => {

  return (
    <>
      <div className="wrapper-main">
        <div className="collection-title">
          <h2>Collections</h2>
          <div className="collection_description">
            Each collection is inspired by something special. If you are close to one item, you should definitely see the entire collection.
          </div>
        </div>
        <div className="collections-main">
          {collectionCarts.map(cart=><CollectionItem key={cart.name} {...cart}/>)}
        </div>
      </div>
    </>
  );
};

export default CollectionMain;