import React from 'react';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Survey() {
  const [commentList, setCommentList] = useState({});
  const { title, header_img, created_datetime, updated_datetime } = commentList;

  const navigate = useNavigate();

  const goToQuestion = () => {
    navigate('/surveyQuestion');
  };

  useEffect(() => {
    fetch('/data/surveydata.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setCommentList(data.payload);
      });
  }, []);

  return (
    <div>
      <Wrap>
        <HeaderWrap>
          <HeaderImg src={header_img} />
          <Title>{title}</Title>
          <NextButton onClick={goToQuestion}>시작</NextButton>
          <CreatedDatetime>
            설문조사 생성시간 : {created_datetime}
          </CreatedDatetime>
          <UpdatedDatetime>
            설문조사 수정시간 : {updated_datetime}
          </UpdatedDatetime>
        </HeaderWrap>
      </Wrap>
    </div>
  );
}

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-size: 20px;
`;

const HeaderImg = styled.img`
  width: 600px;
  padding: 40px 0px 20px 0px;
`;

const HeaderWrap = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.div``;

const CreatedDatetime = styled.div`
  margin-top: 20px;
`;

const UpdatedDatetime = styled.div`
  margin-top: 10px;
`;

const NextButton = styled.button`
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
