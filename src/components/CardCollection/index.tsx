import React from "react";
import Rating from "@mui/material/Rating";


const CardCollection = () => {
  return (
    <div className="card">
      <div className="img-card"><img src="/assets/images/collections/card-one.png" alt=""/></div>
      <div className="rating">
        <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly sx={{color: "#163F2B"}}/>
        <div className="rating-count">4.8 (38)</div>
      </div>
      <div className="title-collection">Miranda Bold Hoops</div>
      <div className="price-collection">$124</div>
    </div>
  );
};

export default CardCollection;