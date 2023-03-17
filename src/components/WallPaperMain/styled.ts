import styled from "styled-components";

export const WallPaperMain = styled.div`
  display: flex;
  justify-content: center;

  position: relative;
  //z-index: 22;
  width: 100%;

  //background: rgba(22, 63, 43, 0.4);
`;

export const WallPaperImage = styled.div`
  background-image: url("/assets/images/wallpaper-main.png");
  width: 100%;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  position: relative;
`;

export const CentrePicture = styled.div`

  //position: absolute;
  ////z-index: 11;
  //display: flex;
  ////padding: 8rem 20rem 100px;
  //justify-content: center;
  ////top: 1rem;
  //align-items: flex-end;
  //
  //width: 100%;
  //height: 100%;

  display: flex;
  align-items: flex-end;
  justify-content: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 62%;
  height: 80%; //76
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);

  margin-top: 1rem;
`;



export const CentreImage = styled.div`
  background-image: url("/assets/images/center-picture.png");
  position: absolute;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 98%;
`;

export const PanelOfButtons = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  margin-bottom: 130px;
  width: 100%;
`;

export const ButtonWrapper = styled.div`
  border: solid 1px #FBFBFB;
  margin: 0 40px;
`;

export const ButtonOfCenterPicture = styled.button`
  cursor: pointer;

  font-family: 'Libre Franklin', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-transform: uppercase;
  color: #FBFBFB;                // 2
  background-color: transparent;
  border: transparent;

  padding: 25px 0;
  width: 292px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CenterImageTitle = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  z-index: 12;
  width: 100%;
`;

export const PictureTitle = styled.div`
          font-family: 'harmondextra_bold_expanded';
          font-weight: 800;
          font-size: 88px;
          color: #FBFBFB;   //1
          margin-bottom: 10px;
`;