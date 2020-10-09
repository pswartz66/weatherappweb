import React, { useEffect, useState } from 'react';
import './App.css';
import keys from './key';

const API = {
  key: keys.APIKEY,
  base_url: "http://api.openweathermap.org/data/2.5/"
}

// const url = "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID={YOUR API KEY}"

function App() {
  const [query, setQuery] = useState('')
  const [weather, setWeather] = useState({});

  const search = (evnt) => {
    if (evnt.key === "Enter") {
      fetch(`${API.base_url}weather?q=${query}&units=metric&APPID=${API.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result);
        });
    }
  }

  // fetch the forecast using a diff url
  // const search = (evnt) => {
  //   if (evnt.key === "Enter") {
  //     fetch(`${API.base_url}weather?q=${query}&units=metric&APPID=${API.key}`)
  //       .then(res => res.json())
  //       .then(result => {
  //         // setWeather(result);
  //         setQuery('');
  //         console.log(result);
  //     });
  //   }
  // }

  const todayDate = new Date();
  const todayDateFormat = todayDate.toDateString();

  return (
    <div className="App">
      <main>

        <div className="searchbox">
          <input
            className="searchbar"
            type="text"
            placeholder="Search..."
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          >

          </input>
        </div>

        

      </main>

    </div>
  );
}

export default App;
