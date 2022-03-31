import React from 'react';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Survey() {
  const [commentList, setCommentList] = useState({});
  const { title, header_img, created_datetime, updated_datetime, Blocks } =
    commentList;

  const navigate = useNavigate();

  const goToQuestion = () => {
    navigate('/SurveyQuestion');
  };

  useEffect(() => {
    fetch('/data/nana.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setCommentList(data);
      });
  }, []);
  return (
    <div>
      <Wrap>
        <HeaderWrap>
          <HeaderImg src={header_img} />
          <Title>{title}</Title>
          <CreatedDatetime>
            설문조사 생성시간 : {created_datetime}
          </CreatedDatetime>
          <UpdatedDatetime>
            설문조사 수정시간 : {updated_datetime}
          </UpdatedDatetime>
          <Block>{Blocks}</Block>
          <NextButton onClick={goToQuestion}>시작</NextButton>
        </HeaderWrap>
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
export const HeaderImg = styled.img`
  width: 600px;
  padding: 40px 0px 20px 0px;
`;

export const HeaderWrap = styled.div`
  border: 1px solid lightgray;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
export const Title = styled.div``;
export const CreatedDatetime = styled.div`
  margin-top: 20px;
`;
export const UpdatedDatetime = styled.div`
  margin-top: 10px;
`;
export const Block = styled.div``;
export const NextButton = styled.button`
  width: 200px;
  border: 1px solid lightgray;
  border-radius: 10px;
  margin-top: 20px;
  margin-bottom: 40px;
  font-size: 25px;
  cursor: pointer;
  :hover {
    border-color: black;
  }
`;
