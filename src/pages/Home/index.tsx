import React, {FC} from "react";
import * as S from "./styled";
import {CardPreview, WallPaperMain} from "../../components";

const Home: FC = () => {

  return (
    <>
      <WallPaperMain/>
      <S.Container>
        <CardPreview/>
      </S.Container>
    </>
  )
}

export default Home;