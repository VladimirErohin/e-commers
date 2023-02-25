import React, {FC} from "react";

type CollectionCartPropsType = {
  image:string,
  name:string,
}

const CollectionCart:FC <CollectionCartPropsType>= ({image, name}) => {
  return (
    <div className="collection-cart" key={name}>
      <img src={image} alt="lilith"/>
      <div className="name-collection">{name}</div>
      <div className="wrapper-btn">
        <div className="see-collection">SEE COLLECTION</div>
      </div>
    </div>
  );
};

export default CollectionCart;