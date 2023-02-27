import React, {FC} from "react";
import * as St from "../../pages/Home/styled";
import * as S from "./styled";

const firsColumnItems: Array<string> = ["shop", "collection", "about"];
const secondColumnItems: Array<string> = ["shipping & returns", "terms of use", "privacy policy"];

const Footer: FC = () => {
  return (
    <S.Footer>
      <St.Container>
        <S.LogoFooter>
          yonne
        </S.LogoFooter>
        <S.FooterContent>
          <S.Group>
            {firsColumnItems.map(item => <S.MenuItem key={item} >{item}</S.MenuItem>)}
          </S.Group>
          <S.Group>
            {secondColumnItems.map(item => <S.MenuItem key={item}>{item}</S.MenuItem>)}
          </S.Group>
          <S.Group>
            <S.WrapperInput>
              <S.Input
                type="text"
                placeholder="Enter your email to subscribe"
              />
              <S.EnterBtn><S.Image src='/assets/images/Vector.png' alt="vector"/></S.EnterBtn>
            </S.WrapperInput>
            <S.SocialNetwork>
              <S.ImageSN src="/assets/images/mail-icon.png" alt="email"/>
              <S.ImageSN src="/assets/images/instagram-icon.png" alt="email"/>
              <S.ImageSN src="/assets/images/facebook-icon.png" alt="email"/>
              </S.SocialNetwork>
          </S.Group>
        </S.FooterContent>
        <S.Rights>© 2021 Yonne. All rights reserved.</S.Rights>
      </St.Container>
    </S.Footer>
  );
};
export default Footer;