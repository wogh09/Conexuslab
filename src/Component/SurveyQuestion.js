import React from 'react';
import styled from 'styled-components';

export default function SurveyQuestion() {
  return (
    <div>
      <Wrap>
        <HeaderWrap>gd</HeaderWrap>
      </Wrap>
    </div>
  );
}

export const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-size: 20px;
`;

export const HeaderWrap = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
