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
        {(typeof weather.main != "undefined") ? (
          <div>
            <div className="weather-location">
              <div className="location">{`${weather.name}, ${weather.sys.country}`}</div>
              <div className="date">{todayDateFormat}</div>

            </div>

            <div className="weather-data">
              <div className="temperature">
                {/* convert celsius to fahrenheit */}
                {`${Math.round(weather.main.temp * (9 / 5) + 32)}°f`}
              </div>
              <div className="description">
                {`${weather.weather[0].main}`}
              </div>
            </div>
          </div>
        ) : (null)}


      </main>

    </div>
  );
}

export default App;
