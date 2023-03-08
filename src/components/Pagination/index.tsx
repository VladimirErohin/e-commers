import React, {FC} from "react";
import "./Pgination.css";

const Pagination: FC = () => {
  return (
    <div className="pagination">
      <div className="left"><img src="/assets/images/pagination.png" alt=""/></div>
      <div className="pages">
        <div className="page active">1</div>
        <div className="page">2</div>
        <div className="page">3</div>
      </div>
      <div className="right"><img src="/assets/images/pagination.png" alt=""/></div>
    </div>
  );
};

export default Pagination;