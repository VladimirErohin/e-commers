import styled from "styled-components";

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
  bottom:86px;
  width: 90%;
  padding: 23px 0;

  background: rgba(36, 41, 52, 0.25);
  background-blend-mode: overlay, normal;
  backdrop-filter: blur(15px);
`;


export const CollectionCart = styled.div`
    width: 46%;
    position: relative;

  &:hover ${SeeCollection}{
      display: block;
    }
  }
`;

export const Image = styled.img `
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

export const WrapperBtn = styled.div`
    display: flex;
    justify-content: center;
`;