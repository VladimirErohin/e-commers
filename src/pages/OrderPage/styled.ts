import styled from "styled-components";

export const ItemPage = styled.div`
  display: flex;
`;

export const PictureItem = styled.div`
  display: flex;
  align-items: center;
  
  width: 50%;
  height: 100vh;
  background-image: url("/assets/images/shop.png");
  
`;

export const CollectionSamples = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  margin-left: 40px;
`;

export const ImageItem = styled.img`
  //position: absolute;
  margin-top: 17px;

  width: 100px;
  height: 113px;
`;

export const InfoItem = styled.div`
  padding: 0 120px;
`;