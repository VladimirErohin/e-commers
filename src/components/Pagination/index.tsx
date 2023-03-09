import React, {FC, useState} from "react";
import * as S from './styled';

const Pagination: FC = () => {

  const pages:number [] = [1, 2, 3];
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handlerPage = (page: number) => {
    if (currentPage !== page) {
      setCurrentPage(page)
    }
  };

  const toNextPage = () => {
    if(currentPage===3){
      return
    }else{ setCurrentPage(currentPage + 1)}
  };

  const toPrevPage = () => {
    if(currentPage===1){
      return
    }else{ setCurrentPage(currentPage - 1)}
  };

  return (
    <S.Pagination>
      <S.Left disabled = {currentPage===1} onClick={toPrevPage}><S.Image src="/assets/images/pagination.png" alt="left"/></S.Left>
      <S.Pages>
        {pages.map(page => <S.Page
          activePage={page === currentPage}
          key={page}
          onClick={() => handlerPage(page)}
        >{page}</S.Page>)}
      </S.Pages>
      <S.Right
        disabled={currentPage===3}
        onClick={toNextPage}
      ><S.Image src="/assets/images/pagination.png" alt="right"/></S.Right>
    </S.Pagination>
  );
};

export default Pagination;