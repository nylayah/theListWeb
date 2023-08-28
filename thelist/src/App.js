import './App.css';
import React, {useState} from React;
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Login} from './Login';
import {Register} from './Register';
import Home from '../pages';
import ManageListPage from '../pages';
import JoinListPage from '../pages'

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element = {<Home/>}/>
          <Route path="/home" element = {<Home/>}/>
          <Route path="/managelistpage" element = {<CreateListPage/>}/>
          <Route path="/joinlistpage" element = {<JoinListPage/>}/>
          <Route path="/login" element = {Login}/>
          <Route path="/register" element = {Register}/>
        </Routes>
      
      
      </BrowserRouter>

    </div>
    
  );
}

export default App;

