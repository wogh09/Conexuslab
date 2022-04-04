import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import Main from './Pages/Main';
import SurveyQuestion from './Component/SurveyQuestion';

function Router() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/SurveyQuestion" element={<SurveyQuestion />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
