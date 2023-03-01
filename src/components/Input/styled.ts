import styled from "styled-components";

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