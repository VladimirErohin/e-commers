import styled from "styled-components";


export const WrapperBtnCard = styled.div`
  display: flex;
  justify-content: center;
`;

export const AddToCartBtn = styled.div`

  display: none;

  font-family: 'Libre Franklin', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.06em;
  text-transform: uppercase;

  color: #FFFFFF;

  position: absolute;
  bottom: 86px;
  width: 80%;
  padding: 23px 0;

  background: rgba(36, 41, 52, 0.25);
  background-blend-mode: overlay, normal;
  backdrop-filter: blur(15px);
  
  margin-bottom: 120px;
`;

export const CardCollection = styled.div`
  width: 32%;
  margin-bottom: 60px;

  position: relative;

  &:hover ${AddToCartBtn} {
    display: block;
  }
  
`;

export const ImageCard = styled.img`
  width: 100%;
`;

export const Rating = styled.div`
  display: flex;
  margin-top: 24px;
`;

export const RatingCount = styled.div`
  margin-left: 10px;
  color: #163F2B;
`;

export const TitleCollection = styled.div`
  font-family: 'Libre Franklin';
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 36px;
  letter-spacing: 0.03em;

  color: #163F2B;
  margin-top: 24px;

`;

export const PriceCollection = styled.div`  
  font-family: 'Libre Franklin';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  color: #163F2B;
  margin-top: 30px;
`;