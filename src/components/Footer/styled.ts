import styled from "styled-components";

export const Footer = styled.footer`
  height: 462px;
  background-color: #E1FF8A;
`;

export const LogoFooter = styled.div`
  font-family: 'Rany';
  font-style: normal;
  font-weight: 300;
  font-size: 36px;
  line-height: 32px;
  text-transform: uppercase;
  padding-top: 82px;

  color: #163F2B;
`;

export const Group = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FooterContent = styled.div`
  display: flex;
  margin: 77px 0px 80px 0px;

  ${Group}:nth-child(1) {
    margin-right: 157px;
  }

  ${Group}:last-child {
    margin-left: auto;
  }
`;

export const MenuItem = styled.div`
  font-family: 'Libre Franklin';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #163F2B;

  margin-bottom: 20px;
`;

export const WrapperInput = styled.div`
  display: flex;
`;

export const Input = styled.input`
  padding: 23px 81px 23px 24px;

  font-family: 'Libre Franklin';
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;

  color: #163F2B;

  width: 326px;
  background: transparent;
  ::placeholder {
    color: #163F2B;
  }
`;

export const EnterBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  border: 2px solid ;
  width: 80px;
  height: 80px;
  border-left: none;
`;

export const Image = styled.img``;
export const ImageSN = styled.img`
  height: 18px;
  width: 18px;
  margin-right: 29px;
`;

export const SocialNetwork = styled.div`
  margin-top: 26px;

  ${ImageSN}:first-child{
    height: 20px;
    width: 20px;
  }
`;


export const Rights = styled.div`
  font-family: 'Libre Franklin';
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;

  color: #163F2B;
  margin-bottom: 61px;
`;
