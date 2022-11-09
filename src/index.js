import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'antd/dist/antd.css';
import "./styles/style.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <BrowserRouter>
      <App />
   </BrowserRouter>
);


