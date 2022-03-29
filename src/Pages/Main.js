import React from 'react';
import styled from 'styled-components';

export default function Main() {
  return (
    <Wrap>
      <Header>헤더</Header>
      <HeaderImg>헤더이미지</HeaderImg>
      <Title>타이틀</Title>
      <Created_datetime>설문조사 생성시간</Created_datetime>
    </Wrap>
  );
}

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
`;
export const HeaderImg = styled.div``;

export const Header = styled.div`
  border: 1px solid blue;
`;
export const Title = styled.div`
  border: 1px solid red;
`;
export const Created_datetime = styled.div``;
