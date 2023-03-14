import styled from "styled-components";

export const MainWallpaper = styled.div`
  height: 666px;
  display: flex;
  justify-content: center;
  align-items: center;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;

  background-image: url("/assets/images/miranda-wallpaper.png");
`;

export const NameCollectionCard = styled.div`
  margin-bottom: 7rem;

  font-family: 'Harmond';
  font-style: normal;
  font-weight: 800;
  font-size: 72px;
  line-height: 84px;
  text-align: center;

  color: #FBFBFB;
`;

export const Content = styled.div`
  position: absolute;
  width: 46%;
  height: 108px;
  margin-top: 8rem;

  font-family: 'Libre Franklin';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;

  color: #FBFBFB;
`;

export const ShowPath = styled.div`
  display: flex;
  justify-content: space-evenly;
  position: absolute;
  width: 203px;
  height: 24px;
  left: 80px;
  top: 599px;

  font-family: 'Libre Franklin';
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 24px;

  color: #FBFBFB;
`;

export const Span = styled.span``;

export const CollectionSelect = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 121px;
`;

export const CollectionCards = styled.div`
  margin: 80px 0 117px 0;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;