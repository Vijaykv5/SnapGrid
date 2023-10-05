import React from 'react';
import ReactDOM from 'react-dom/client';

import MainSection from './MainSection';

const App: React.FC = () => {
  return (
    <>
      <MainSection />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<App />);
