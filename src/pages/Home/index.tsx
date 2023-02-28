import React, {FC, useState} from "react";
import * as S from "./styled";
import {CollectionMain, Footer} from "../../components";

type btnType = {
  name:string,
  active:boolean,
};

type groupBtnType = Array<btnType>;

const Home: FC = () => {

  const [activeBtn, setActiveBtn] = useState(true);
  const groupBtn: groupBtnType = [{name: "explore collections", active: activeBtn}, {name: "shop now", active: !activeBtn}];

  const changeActiveBtn =()=>setActiveBtn(!activeBtn);

  return (
    <>
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
                    onClick={changeActiveBtn}
                    disabled={btn.active}
                  >{btn.name}
                  </S.ButtonOfCenterPicture>
                </S.ButtonWrapper>
                :
                <S.ButtonOfCenterPicture
                  key={btn.name}
                  onClick={changeActiveBtn}
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