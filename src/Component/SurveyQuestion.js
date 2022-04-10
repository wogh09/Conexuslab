import React from 'react';
import styled from 'styled-components';
import { useEffect, useState } from 'react';

export default function SurveyQuestion() {
  const [questionList, setquestionList] = useState([]);
  const [select, setSelect] = useState('WorkandLifeBalance');

  const [checkedInputs, setCheckedInputs] = useState([]);

  const changeHandler = (checked, id) => {
    if (checked) {
      setCheckedInputs([...checkedInputs, id]);
      console.log('체크 반영 완료');
    } else {
      setCheckedInputs(checkedInputs.filter(el => el !== id));
      console.log('체크 해제 반영 완료');
    }
  };

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
      {!!questionList.length > 0 && (
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
          <CheckBoxItemBox>
            <CheckBoxItems
              type="checkbox"
              id="check1"
              onChange={e => {
                changeHandler(e.currentTarget.checked, 'check1');
              }}
              checked={checkedInputs.includes('check1') ? true : false}
            />
            {questionList[0].option.items[0]}
            <CheckBoxItems
              type="checkbox"
              id="check2"
              value="check2"
              onChange={e => {
                changeHandler(e.currentTarget.checked, 'check2');
              }}
              checked={checkedInputs.includes('check2') ? true : false}
            />
            {questionList[1].option.items[1]}
            <CheckBoxItems
              type="checkbox"
              id="check3"
              onChange={e => {
                changeHandler(e.currentTarget.checked, 'check3');
              }}
              checked={checkedInputs.includes('check3') ? true : false}
            />
            {questionList[1].option.items[2]}
            <CheckBoxItems
              type="checkbox"
              id="check4"
              onChange={e => {
                changeHandler(e.currentTarget.checked, 'check4');
              }}
              checked={checkedInputs.includes('check4') ? true : false}
            />
            {questionList[1].option.items[3]}
            <CheckBoxItems
              type="checkbox"
              id="check5"
              onChange={e => {
                changeHandler(e.currentTarget.checked, 'check5');
              }}
              checked={checkedInputs.includes('check5') ? true : false}
            />
            {questionList[1].option.items[4]}
          </CheckBoxItemBox>
          <Datetime>
            설문조사 수정시간 : {questionList[1].updated_datetime}
          </Datetime>
          <NextButton>{questionList[2].option.submitMsg}</NextButton>
          <BtnImage src={questionList[2].option.btnImg} />
        </Wrap>
      )}
    </div>
  );
}

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  border: 1px solid lightgray;
  font-size: 20px;
`;

export const Title = styled.div`
  font-weight: 700;
  padding-bottom: 15px;
  margin: 50px 0px 50px 0px;
`;
export const Items = styled.div``;

export const ItemBox = styled.div``;

export const Datetime = styled.div`
  margin-top: 30px;
`;

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

export const Index = styled.li`
  display: flex;
  align-items: center;
  padding: 4px 0;
`;
export const Checkbox = styled.input`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;
export const CheckBoxItems = styled.input`
  margin: 0px 10px 0px 10px;
  width: 20px;
  height: 20px;
`;

export const CheckBoxItemBox = styled.label`
  display: flex;
`;
export const NextButton = styled.button`
  width: 400px;
  border: 1px solid lightgray;
  border-radius: 10px;
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 40px;
  background-color: wheat;
  cursor: pointer;
  :hover {
    border-color: black;
  }
`;
export const BtnImage = styled.img`
  width: 300px;
`;
