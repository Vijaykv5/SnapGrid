import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';

import MainSection from './MainSection';
import DocsPage from './Pages/DocsPage';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import SignUpPage from './Pages/SignUpPage';
import ShareImageModal from './components/menu/ShareImagesModal';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/search' element={<MainSection />}>
          <Route path=':ImageId' element={<ShareImageModal />} />
        </Route>
        <Route path='/docs' element={<DocsPage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<App />);
