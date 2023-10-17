import React from 'react';
import ReactDOM from 'react-dom/client';

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
    <Route path="/docs" element={<DocsPage />}/>
      
      </Routes>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<App />);
