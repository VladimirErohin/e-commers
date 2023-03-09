import styled from "styled-components";

export const Pagination = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 106px;
`;

export const Pages = styled.div`
display: flex;
`;

export const Image = styled.img``;

type DisabledType = {
  disabled:boolean,
}

export const Left = styled.div<DisabledType>`
  transform: rotate(180deg);
  opacity: ${({disabled}) => disabled ? 0.2 : 100};
`;

export const Right = styled.div<DisabledType>`
  opacity: ${({disabled}) => disabled ? 0.2 : 100};
`;

type ActivePageType = {
  activePage:boolean,
}

export const Page = styled.div<ActivePageType>`
  width: 22px;
  text-align: center;
  margin-left: 10px;

  /*width: 17px;*/
  /*height: 36px;*/

  font-family: 'Libre Franklin';
  font-style: normal;
  font-weight: ${({activePage})=> activePage ? 700 : 400};
  font-size: 28px;
  line-height: 36px;

  letter-spacing: 0.03em;

  color: #163F2B;

  border-bottom: ${({activePage})=> activePage ? "4px solid #333333" : "none"}
`;