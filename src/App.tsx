import React, {useState} from "react";
import * as S from "./pages/Home/styled";
import {Cart} from "./pages";
//import {Footer} from "./components";
//import {OrderPage} from "./pages";
//import {Home} from "./pages";
//import {CardItem} from "./pages";

function App() {

  const [language, setLanguage] = useState<boolean>(true);

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

      {/*<CardItem/>*/}
      {/*<Home/>*/}
      {/*<OrderPage/>*/}
      <Cart/>
      {/*<Footer/>*/}
    </>
  );
}

export default App;
