import React, {FC, useState} from "react";
import "./Home.css";
import * as S from "./styled";

const Home:FC = ()=> {

  const [language, setLanguage] = useState<boolean>(true);

  return (
    <div>
      <S.Header>
        <S.Container>
          <S.Nav>
            <S.LanguageToggle>
              <S.LanguageItem onClick={() => setLanguage(true)}>
                {language ?
                  <S.WrapperEllipse>
                    <S.Ellipse></S.Ellipse>
                    <S.LanguageActive>en</S.LanguageActive>
                  </S.WrapperEllipse>
                  : <S.Language>en</S.Language>
                }
              </S.LanguageItem>
              <S.LanguageItem onClick={() => setLanguage(false)}>
                {!language ?
                  <S.WrapperEllipse>
                    <S.Ellipse></S.Ellipse>
                    <S.LanguageActive>ru</S.LanguageActive>
                  </S.WrapperEllipse>
                  : <S.Language>ru</S.Language>
                }
              </S.LanguageItem>
            </S.LanguageToggle>
            <S.Logo>
              Yonne
            </S.Logo>
            <S.ListItems>
              <S.LoginBtn>
                LOGIN
              </S.LoginBtn>
              <S.ListOptions>
                <S.SearchBtn>
                  <S.SearchImage></S.SearchImage>
                </S.SearchBtn>
                <S.LikeBtn>
                  <S.LikeImage></S.LikeImage>
                </S.LikeBtn>
                <S.BasketBtn>
                  <S.BasketImage></S.BasketImage>
                </S.BasketBtn>
              </S.ListOptions>
            </S.ListItems>
          </S.Nav>
        </S.Container>
      </S.Header>
      <S.WallPaperMain>
        <S.WallPaperImage></S.WallPaperImage>
        <S.CentrePicture>
          <S.CentreImage></S.CentreImage>
          <div className="btn-panel">
            <div className="btn-explore">explore collections</div>
            <div className="shop-now">shop now</div>
          </div>
          <div className="bottom-panel">
            {/*<div className="picture-title">Simple. Timeless.</div>*/}
            <S.PictureTitle>Simple. Timeless.</S.PictureTitle>
          </div>
        </S.CentrePicture>
      </S.WallPaperMain>

    </div>
  )
}


export default Home;