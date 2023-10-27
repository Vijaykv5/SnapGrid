import React from 'react';
import ReactDOM from 'react-dom/client';
import SignUpPage from './Pages/SignUpPage';
import LoginPage from './Pages/LoginPage';
import MainSection from './MainSection';
import HomePage from './Pages/HomePage';
import DocsPage from './Pages/DocsPage';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from "react-router-dom";


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<MainSection />} />
        <Route path="/docs" element={<DocsPage />} />
        <Route path="/signUp" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage/>} />


      </Routes>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<App />);
