import React from 'react';
import './App.css';



function App() {

  const todayDate = new Date();
  const todayDateFormat = todayDate.toDateString();

  return (
    <div className="App">
      <main>

      <div className="searchbox">
        <input className="searchbar" type="text" placeholder="Search...">


        </input>
      </div>

        <div className="weather-location">
          <div className="location">Philadelphia, PA</div>
          <div className="date">{todayDateFormat}</div>

        </div>

      </main>


    </div>
  );
}

export default App;
