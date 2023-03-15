import styled from "styled-components";

export const WrapperMain = styled.div`
  margin-top: 130px;
`;

export const TitleCollection = styled.h2`
  font-family: 'Harmond';
  font-style: normal;
  font-weight: 800;
  font-size: 40px;
  line-height: 47px;

  color: #163F2B;
`;

export const CollectionTitle = styled.div`
  width: 41%;
  position: absolute;
  right: 80px;
`;

export const WrapperBtn = styled.div`
  display: flex;
  justify-content: center;
`;

export const SeeCollection = styled.div`

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
  width: 90%;
  padding: 23px 0;

  background: rgba(36, 41, 52, 0.25);
  background-blend-mode: overlay, normal;
  backdrop-filter: blur(15px);
`;

export const CollectionCart = styled.div`
  width: 46%;
  position: relative;

  &:hover ${SeeCollection} {
    display: block;
  }
}
`;

export const CollectionsMain = styled.div`
  display: flex;
  flex-wrap: wrap-reverse;
  align-content: flex-start;
  justify-content: space-between;

  ${CollectionCart}:nth-child(2) {
    margin-bottom: 880px;
  }

  ${CollectionCart}:nth-child(1) {
    margin:  280px 0 ;
    height: 100%;
  }
`;

export const Image = styled.img`
  width: 100%;
`;

export const CollectionDescription = styled.div`
  font-family: 'Libre Franklin', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;

  color: #738C80;
`;

export const CollectionName = styled.div`
  margin-top: 24px;
  font-family: 'Libre Franklin', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 36px;
  letter-spacing: 0.03em;

  color: #163F2B;
`;