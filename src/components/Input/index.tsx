import React, {FC} from "react";
import * as S from "./styled";

type InputTypeProps = {
  placeholderInput:string,
  imageSrc:string
}

const Input:FC <InputTypeProps>= ({placeholderInput, imageSrc}) => {

  return (
    <S.WrapperInput>
      <S.Input
        type="text"
        placeholder={placeholderInput}
      />
      <S.EnterBtn><S.Image src={imageSrc} alt="vector"/></S.EnterBtn>
    </S.WrapperInput>
  );
};

export default Input;

