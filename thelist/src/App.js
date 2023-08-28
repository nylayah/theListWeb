import './App.css';
import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Login} from './Login';
import {Register} from './Register';
import HomePage from './pages/Home';
import ManageListPage from './pages/ManageList';
import JoinListPage from './pages/JoinList'

function App() {
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element = {<HomePage/>}/>
          <Route path="/home" element = {<HomePage/>}/>
          <Route path="/managelistpage" element = {<ManageListPage/>}/>
          <Route path="/joinlistpage" element = {<JoinListPage/>}/>
          <Route path="/login" element = {Login}/>
          <Route path="/register" element = {Register}/>
        </Routes>
      
      
      </BrowserRouter>

    </div>
    
  );
}

export default App;

