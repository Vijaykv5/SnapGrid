import React from 'react'
import ReactDOM from 'react-dom/client'
import MainSection from './MainSection'
import { Provider } from 'react-redux';
import store from './utils/store';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';


const App = () => {
  return (
    <>
      <MainSection />
    
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>)
