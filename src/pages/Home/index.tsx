import React, {FC, useState} from "react";
import "./Home.css";
import * as S from "./styled";
import {PictureTitleItem} from "./styled";

type btnType = {
  name: string,
  active: boolean,
}

type groupBtnType = Array<btnType> ;

const Home:FC = ()=> {

  const [language, setLanguage] = useState<boolean>(true);
  const [activeBtn, setActiveBtn] = useState<boolean>(true);
  const groupBtn:groupBtnType = [{name: 'explore collections', active: activeBtn}, {name: 'shop now', active: !activeBtn}];

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
            {groupBtn.map(btn=><div className={btn.active ? "btn-wrapper" : ""}>
              <button
                className="btn-center-image"
                key={btn.name}
                onClick={()=>setActiveBtn(!activeBtn)}
              >{btn.name}</button>
            </div>)}
          </div>
          <div className="bottom-panel ">
            <S.PictureTitle>Simple. Timeless.</S.PictureTitle>
          </div>
        </S.CentrePicture>
      </S.WallPaperMain>

    </div>
  )
}


export default Home;