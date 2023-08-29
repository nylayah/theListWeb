import './App.css';
import React, { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './Login';
import HomePage from './pages/Home';
import CreateListPage from './pages/CreateList';
import JoinListPage from './pages/JoinList'
import {Link} from 'react-router-dom';
import {signOut} from 'firebase/auth';
import {auth} from './firebase-config';


function App() {
  const [isAuth, setIsAuth] = useState(false);
  
  const signUserOut = () => {
    signOut(auth)
    .then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";

    })
    .catch((error) => {
      console.log(error);
    });
  }

  return (
    <div>
      <BrowserRouter>
        <nav style={navBarStyle}>
          <Link to="/home">Home</Link>
          
          {!isAuth ? (
          <Link to="/login">Login</Link>
          ) : ( 
            <>
              <Link to="/createlistpage">Create List</Link>
              <Link to="/joinlistpage">Join List</Link>
              {/* //TODO: add user profile page and editList page */}
              <button onClick = {signUserOut}>Log Out</button>
          </>
          )}
        </nav>
        <Routes>
          <Route index element = {<HomePage/>}/>
          <Route path="/home" element = {<HomePage isAuth={isAuth}/>}/>
          <Route path="/createlistpage" element = {<CreateListPage isAuth={isAuth}/>}/>
          <Route path="/joinlistpage" element = {<JoinListPage/>}/>
          <Route path="/login" element = {<Login setIsAuth={setIsAuth}/>}/>
        </Routes>
      
      
      </BrowserRouter>

    </div>
    
  );
}

export default App;
const navBarStyle = {
  display: 'flex',
  width:'100%',
  height: '15%',
  backgroundColor: 'lightblue',
  justifyContent: 'space-around',
  alignItems: 'center',
}


