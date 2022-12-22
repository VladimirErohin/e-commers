import React, {FC, useState} from "react";
import "./Home.css";
import * as S from "./styled";
import search from "../../../public/assets/images/search-icon.png";
import like from "../../../public/assets/images/like-icon.png";
import basket from "../../../public/assets/images/basket-icon.png";
import centerImage from "../../../public/assets/images/center-picture.png";
import wallPaper from "../../../public/assets/images/wallpaper-main.png";

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
                <a className="like-btn">
                  <img className="search-image" src='' alt="like-picture"/>
                </a>
                <a className="basket-btn">
                  <img className="search-image" src='' alt="basket-picture"/>
                </a>
              </S.ListOptions>
            </S.ListItems>
          </S.Nav>
        </S.Container>
      </S.Header>
      <div className="wall-paper-main">
        <img src='' className="wall-paper-image" alt="main wall paper"/>
        <div className="center-picture">
          <img src='' className="center-image" alt="center wall paper"/>
          <div className="bottom-panel">
            <div className="btn-panel">
              <div className="btn-explore">explore collections</div>
              <div className="shop-now">shop now</div>
            </div>
            <div className="picture-title">Simple. Timeless.</div>
          </div>

        </div>
      </div>

    </div>
  )
}


export default Home;