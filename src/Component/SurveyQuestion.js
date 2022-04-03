import React from 'react';
import styled from 'styled-components';
import { useEffect, useState } from 'react';

export default function SurveyQuestion() {
  const [questionList, setquestionList] = useState([]);
  const [select, setSelect] = useState('WorkandLifeBalance');
  const [isChecked, setChecked] = useState(false);

  const handleSelectChange = e => {
    setSelect(e.target.value);
  };

  useEffect(() => {
    fetch('/data/surveydata.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setquestionList(data.payload.blocks);
      });
  }, []);

  return (
    <div>
      <Wrap>
        <Title>{questionList[0].option.title}</Title>
        <ItemBox>
          <RadioBox>
            <RadioButton
              type="radio"
              name="radio"
              value="WorkandLifeBalance"
              checked={select === 'WorkandLifeBalance'}
              onChange={handleSelectChange}
            />
            <RadioButtonLabel />
            <Items>{questionList[0].option.items[0]}</Items>
          </RadioBox>
          <RadioBox>
            <RadioButton
              type="radio"
              name="radio"
              value="Entertainmnet"
              checked={select === 'Entertainmnet'}
              onChange={handleSelectChange}
            />
            <RadioButtonLabel />
            <Items>{questionList[0].option.items[1]}</Items>
          </RadioBox>
          <RadioBox>
            <RadioButton
              type="radio"
              name="radio"
              value="workwithGoodcoworker"
              checked={select === 'workwithGoodcoworker'}
              onChange={handleSelectChange}
            />
            <RadioButtonLabel />
            <Items>{questionList[0].option.items[2]}</Items>
          </RadioBox>
          <RadioBox>
            <RadioButton
              type="radio"
              name="radio"
              value="protectMyWorkandLife"
              checked={select === 'protectMyWorkandLife'}
              onChange={handleSelectChange}
            />
            <RadioButtonLabel />
            <Items>{questionList[0].option.items[3]}</Items>
          </RadioBox>
          <RadioBox>
            <RadioButton
              type="radio"
              name="radio"
              value="Etc"
              checked={select === 'Etc'}
              onChange={handleSelectChange}
            />
            <RadioButtonLabel />
            <Items>{questionList[0].option.items[4]}</Items>
          </RadioBox>
        </ItemBox>
        <Datetime>
          설문조사 수정시간 : {questionList[0].updated_datetime}
        </Datetime>
        <Title>{questionList[1].option.title}</Title>
        <ItemBox>
          <Items>{questionList[1].option.items[0]}</Items>
          <Items>{questionList[1].option.items[1]}</Items>
          <Items>{questionList[1].option.items[2]}</Items>
          <Items>{questionList[1].option.items[3]}</Items>
          <Items>{questionList[1].option.items[4]}</Items>
        </ItemBox>
        <Datetime>
          설문조사 수정시간 : {questionList[1].updated_datetime}
        </Datetime>
      </Wrap>
    </div>
  );
}

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-size: 20px;
`;

export const Title = styled.div`
  padding-bottom: 15px;
`;
export const Items = styled.div``;

export const ItemBox = styled.div``;

export const Datetime = styled.div``;

export const RadioBox = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  position: relative;
`;

export const RadioButtonLabel = styled.label`
  position: absolute;
  top: 25%;
  left: 4px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: white;
  border: 1px solid #bebebe;
`;
export const RadioButton = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  margin-right: 10px;
  &:hover ~ ${RadioButtonLabel} {
    background: gray;
    &::after {
      content: '';
      display: block;
      border-radius: 50%;
      width: 12px;
      height: 12px;
      margin: 6px;
      background: blue;
    }
  }
  ${props =>
    props.checked &&
    `
    &:checked + ${RadioButtonLabel} {
      background: white;
      border: 1px solid blue;
      &::after {
        content: "";
        display: block;
        border-radius: 50%;
        width: 12px;
        height: 12px;
        margin: 6px;
         box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.1);
        background: blue;
      }
    }
  `}
`;
