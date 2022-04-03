import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import Main from './Pages/Main';
import SurveyQuestion from './Component/SurveyQuestion';
import SurveyComplete from './Component/SurveyComplete';

function Router() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/SurveyQuestion" element={<SurveyQuestion />} />
          <Route path="/SurveyComplete" element={<SurveyComplete />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
