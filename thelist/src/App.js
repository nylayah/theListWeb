import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header" display="flex" >
        <p>
          theList
        </p>
        {/* Show the current user logged in in the top right hand corner of the screen. Should be clickable to go to the user's profile page. */}
        <p>
          UserName
        </p>
      </header>
    </div>
  );
}

export default App;
