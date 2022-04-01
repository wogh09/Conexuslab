import React from 'react';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Survey from './Survey';

export default function SurveyQuestion() {
  const [commentList, setCommentList] = useState({});

  useEffect(() => {
    fetch('/data/surveydata.json', {
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
        {commentList.map((list, index) => {
          return <Survey key={index} title={list.title} />;
        })}
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
