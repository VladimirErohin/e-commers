import React, {FC} from "react";
import "./CollectionMain.css";

const CollectionMain: FC = () => {
  return (
    <>
      <div className="collections-main">
        <div className="collection-cart">
          <img src="/assets/images/miranda-main.png" alt="miranda"/>
          <div className="title-collection">Miranda</div>
        </div>
        <div className="collection-title">
          <h2>Collections</h2>
          <div className="collection_description">
            Each collection is inspired by something special. If you are close to one item, you should definitely see the entire collection.
          </div>
        </div>
        <div className="collection-cart">
          <img src="/assets/images/lilith-main.png" alt="lilith"/>
          <div className="title-collection">Lilith</div>
        </div>
        <div className="collection-cart">
          <img src="/assets/images/rose-main.png" alt="rose"/>
          <div className="title-collection">Rose</div>
        </div>
      </div>
    </>
  );
};

export default CollectionMain;