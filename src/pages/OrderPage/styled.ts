import styled from "styled-components";
import {theme} from "../../shared/theme";

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
  margin-top: 17px;

  width: 100px;
  height: 113px;
`;

export const InfoOrder = styled.div`
  //padding: 0 120px;

  padding: 0 56px;
  width: 50%;
`;

export const ShowPath = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 203px;
  height: 24px;
  left: 80px;
  top: 599px;

  font-family: 'Libre Franklin';
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 24px;

  color: ${theme.colors.green};

  margin-top: 40px;
`;

export const Span = styled.span``;

export const OrderPageInfo = styled.div`
  margin-top: 53px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const OrderPageInfoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const OrderPageName = styled.div`
  width: 487px;
  height: 47px;
  left: 1080px;
  top: 117px;

  font-family: 'Harmond';
  font-style: normal;
  font-weight: 800;
  font-size: 40px;
  line-height: 47px;

  color: ${theme.colors.green};
`;

export const LikeIcon = styled.div`
  margin-left: 12px;
  width: 22px;
  height: 20px;
  background-image: url("/assets/images/like-icon-black.png");
`;

export const OrderPagePrice = styled.div`
  font-family: 'Libre Franklin';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  color: ${theme.colors.green};
  margin-left: 5.5rem;
`;

export const Rating = styled.div`
  display: flex;
  //margin-top: 24px;
`;

export const RatingCount = styled.div`
  //margin-left: 10px;
  color: ${theme.colors.green};
`;

export const OrderPageSummary = styled.div`
  width: 720px;
  height: 48px;
  left: 1080px;
  top: 233px;

  font-family: 'Libre Franklin';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;

  color: ${theme.colors.green};

  margin-top: 46px;
`;

export const OrderPageMetal = styled.div`
  margin-top: 48px;
`;

export const MetalName = styled.div`
  width: 43px;
  height: 24px;
  left: 1080px;
  top: 329px;

  font-family: 'Libre Franklin';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  color: ${theme.colors.green};
`;

export const MetalWrapper = styled.div`
  display: flex;
`;

type ActiveType = {
  active: boolean,
};

export const MetalColorBorder = styled.div<ActiveType>`
  border: ${({active}) => active ? "1px solid #D2D2D2" : "none"};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 43px;
  height: 43px;

  margin-top: 8px;
`;

export const MetalColor = styled.div`
  border-radius: 50%;
  width: 26px;
  height: 26px;
  background-color: #D2D2D2;
`;

export const MetalColorGoldBorder = styled.div<ActiveType>`
  border: ${({active}) => active ? "1px solid #ECD278" : "none"};

  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 43px;
  height: 43px;

  margin-top: 8px;
  margin-left: 10px;
`;

export const MetalColorGold = styled.div`
  border-radius: 50%;
  width: 26px;
  height: 26px;
  background-color: #ECD278;
`;

export const ListOrderInfo = styled.div`
  position: absolute;
  border-top: 1px solid #163F2B;
  width: 43%;
  margin-top: 48px;
`;

export const Description = styled.div`
  display: flex; 
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 16px 0;

  border-bottom: 1px solid #163F2B;
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  //padding: 16px 0;

  //border-bottom: 1px solid #163F2B;
`;

export const DescriptionTitle = styled.div`
  width: 85px;
  height: 24px;
  left: 1080px;
  top: 469px;

  font-family: 'Libre Franklin';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  color: ${theme.colors.green};

`;

export const DescriptionHandler = styled.div`
  cursor: pointer;
`;

type ShowType = {
  isShow: boolean,
};

export const DescriptionOpen = styled.div<ShowType>`
display: ${({isShow}) => !isShow ? "block" : "none"}; `;

export const DescriptionClose = styled.div<ShowType>`
  display: ${({isShow}) => isShow ? "block" : "none"};
`;

export const DescriptionSummary = styled.div<ShowType>`
  margin: 12px 0 32px 0;
  display: ${({isShow}) => isShow ? "block" : "none"};
`;

export const DescriptionSummaryItem = styled.div`

  font-family: 'Libre Franklin';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  color: #738C80;
`;

