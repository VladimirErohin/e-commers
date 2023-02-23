import React, {FC, useState} from "react";
import "./Home.css";
import * as S from "./styled";
import {CollectionMain} from "../../components";

type btnType = {
  name: string,
  active: boolean,
}

type groupBtnType = Array<btnType>;

const Home: FC = () => {

  const [language, setLanguage] = useState<boolean>(true);
  const [activeBtn, setActiveBtn] = useState<boolean>(true);
  const groupBtn: groupBtnType = [{name: "explore collections", active: activeBtn}, {name: "shop now", active: !activeBtn}];
  return (
    <>
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
          <S.PanelOfButtons>
            {groupBtn.map(btn =>
              btn.active
                ?
                <S.ButtonWrapper key={btn.name}>
                  <S.ButtonOfCenterPicture
                    onClick={() => setActiveBtn(!activeBtn)}
                    disabled={btn.active}
                  >{btn.name}
                  </S.ButtonOfCenterPicture>
                </S.ButtonWrapper>
                :
                <S.ButtonOfCenterPicture
                  key={btn.name}
                  onClick={() => setActiveBtn(!activeBtn)}
                  disabled={btn.active}
                >{btn.name}
                </S.ButtonOfCenterPicture>
            )}
          </S.PanelOfButtons>
          <S.CenterImageTitle>
            <S.PictureTitle>Simple. Timeless.</S.PictureTitle>
          </S.CenterImageTitle>
        </S.CentrePicture>
      </S.WallPaperMain>

      <S.Container>
        <CollectionMain/>
      </S.Container>
    </>
  )
}

export default Home;