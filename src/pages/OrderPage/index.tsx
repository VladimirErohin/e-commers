import React, {FC, useState} from "react";
import "./ItemPage.css";
import * as S from "./styled";
import Rating from "@mui/material/Rating";

const OrderPage: FC = () => {

  const [isActive, setIsActive] = useState<boolean>(true);
  //const [isShow, setIsShow] = useState<boolean>(true);
  const [isShow, setIsShow] = useState({description: false, care: false, deliver: false});
  const handleActive = () => setIsActive(!isActive);
  //const handleShowDescription = () => setIsShow(!isShow);

  const handleShowDescription = (item: string) => {
    // @ts-ignore
    let val = isShow[item]

    for (let key in isShow) {
      // @ts-ignore
      if (isShow[key]) {
        // @ts-ignore
        isShow[key] = false
      }
    }
    setIsShow({...isShow, [item]: !val})
  };

  return (
    <>
      <S.ItemPage>
        <S.PictureItem>
          <S.CollectionSamples>
            <S.ImageItem src="/assets/images/shop.png"/>
            <S.ImageItem src="/assets/images/collections/card-five.png"/>
            <S.ImageItem src="/assets/images/collections/card-seven.png"/>
          </S.CollectionSamples>
        </S.PictureItem>
        <S.InfoOrder>
          <S.ShowPath>
            <S.Span>Home /</S.Span>
            <S.Span>Collections /</S.Span>
            <S.Span>Miranda Collections /</S.Span>
          </S.ShowPath>
          <S.OrderPageInfo>
            <S.OrderPageInfoWrapper>
              <S.OrderPageName>Miranda Bold Hoops</S.OrderPageName>
              <S.LikeIcon></S.LikeIcon>
              <S.OrderPagePrice>$124</S.OrderPagePrice>
            </S.OrderPageInfoWrapper>
            <S.Rating>
              <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly sx={{color: "#163F2B"}}/>
              <S.RatingCount>4.8 (38)</S.RatingCount>
            </S.Rating>
            <S.OrderPageSummary>
              Timeless and elegant, Miranda collection captures the freedom of youth and the confidence of adulthood. Sleek design of Bold Hoops
              celebrates the spirit of simplicity and confidence.
            </S.OrderPageSummary>
            <S.OrderPageMetal>
              <S.MetalName>metal</S.MetalName>
              <S.MetalWrapper>
                <S.MetalColorBorder active={isActive} onClick={handleActive}><S.MetalColor></S.MetalColor></S.MetalColorBorder>
                <S.MetalColorGoldBorder active={!isActive} onClick={handleActive}><S.MetalColorGold></S.MetalColorGold></S.MetalColorGoldBorder>
              </S.MetalWrapper>
            </S.OrderPageMetal>
          </S.OrderPageInfo>
          <S.ListOrderInfo>

            {/*description*/}
            <S.Description>
              <S.DescriptionWrapper>

                <S.DescriptionTitle>description</S.DescriptionTitle>
                <S.DescriptionHandler>
                  <S.DescriptionOpen isShow={isShow.description} onClick={() => handleShowDescription("description")}>+</S.DescriptionOpen>
                  <S.DescriptionClose isShow={isShow.description} onClick={() => handleShowDescription("description")}>-</S.DescriptionClose>
                </S.DescriptionHandler>

              </S.DescriptionWrapper>

              <S.DescriptionSummary isShow={isShow.description}>
                <S.DescriptionSummaryItem>925 Sterling Silver Earrings</S.DescriptionSummaryItem>
                <S.DescriptionSummaryItem>Hoop diameter: 15 mm</S.DescriptionSummaryItem>
                <S.DescriptionSummaryItem>Thickness: 6 mm</S.DescriptionSummaryItem>
                <S.DescriptionSummaryItem>Weight: 2.15 g</S.DescriptionSummaryItem>
                <S.DescriptionSummaryItem>Design: Margaret Hourvitz</S.DescriptionSummaryItem>
              </S.DescriptionSummary>

            </S.Description>

            {/*care*/}
            <S.Description>
              <S.DescriptionWrapper>

                <S.DescriptionTitle>care</S.DescriptionTitle>
                <S.DescriptionHandler>
                  <S.DescriptionOpen isShow={isShow.care} onClick={() => handleShowDescription("care")}>+</S.DescriptionOpen>
                  <S.DescriptionClose isShow={isShow.care} onClick={() => handleShowDescription("care")}>-</S.DescriptionClose>
                </S.DescriptionHandler>

              </S.DescriptionWrapper>

              <S.DescriptionSummary isShow={isShow.care}>
                <S.DescriptionSummaryItem> It is better to wash your silver by hand in hot, sudsy water as soon as possible after use.</S.DescriptionSummaryItem>
                <S.DescriptionSummaryItem> Rinse well in clear hot water and hand-dry immediately and thoroughly.</S.DescriptionSummaryItem>
                <S.DescriptionSummaryItem> For silver that is tarnished, clean with a good quality silver polish and avoid "dip" polishes.</S.DescriptionSummaryItem>
              </S.DescriptionSummary>
            </S.Description>

            {/*deliver*/}
            <S.Description>
              <S.DescriptionWrapper>

                <S.DescriptionTitle>deliver</S.DescriptionTitle>
                <S.DescriptionHandler>
                  <S.DescriptionOpen isShow={isShow.deliver} onClick={() => handleShowDescription("deliver")}>+</S.DescriptionOpen>
                  <S.DescriptionClose isShow={isShow.deliver} onClick={() => handleShowDescription("deliver")}>-</S.DescriptionClose>
                </S.DescriptionHandler>

              </S.DescriptionWrapper>
              <S.DescriptionSummary isShow={isShow.deliver}>
                <S.DescriptionSummaryItem> The product is in stock.</S.DescriptionSummaryItem>
                <S.DescriptionSummaryItem>  EU delivery date in 1-5 days.</S.DescriptionSummaryItem>
              </S.DescriptionSummary>
            </S.Description>
          </S.ListOrderInfo>
        </S.InfoOrder>

      </S.ItemPage>
    </>
  );
};

export default OrderPage;