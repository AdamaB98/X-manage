import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Dashboard from './components/Dashboard';
import reportWebVitals from './reportWebVitals';
import Login from './components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Project from './components/Project';
import Expense from './components/Expense';
import Tool from './components/Tool';
import AddProject from './components/AddProject';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/project' element={<Project/>}/>
        <Route path='/expense' element={<Expense/>}/>
        <Route path='/tool' element={<Tool/>}/>
        <Route path='/add-project' element={<AddProject/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
