import React, {FC} from "react";
import "./CollectionMain.css";

const CollectionMain: FC = () => {

  const positionElement = (e: { clientY: any; clientX: any; })=> {
    const mouseY = e.clientY;
    const mouseX = e.clientX;

console.log(mouseY, mouseX);
    }

  return (
    <>
      <div className="collections-main">
        <div className="collection-cart " onMouseMove={(e)=>positionElement(e) }>

          <img src="/assets/images/lilith-main.png" alt="lilith"/>
          <div className="name-collection">Lilith</div>
          <div className="cursor test"></div>
        </div>
        {/*<div className="collection-cart collection-title">*/}
        {/*  <h2>Collections</h2>*/}
        {/*  <div className="collection_description">*/}
        {/*    Each collection is inspired by something special. If you are close to one item, you should definitely see the entire collection.*/}
        {/*  </div>*/}
        {/*</div>*/}
        <div className="collection-cart">
          <img src="/assets/images/rose-main.png" alt="rose"/>
          <div className="name-collection">Rose</div>
          <div className="see-collection">SEE COLLECTION</div>
        </div>
        <div className="collection-cart">
          <img src="/assets/images/miranda-main.png" alt="miranda"/>
          <div className="name-collection">Miranda</div>
        </div>
      </div>
    </>
  );
};

export default CollectionMain;