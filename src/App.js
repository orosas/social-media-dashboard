import React, { useState, useEffect } from 'react';

import './globals.css';
// import './App.css';

import Header from './header.js';
import TopCardList from './top-card-list.js';
// import Card from './card';
import Overview from './overview.js';
import Switch from './switch.js';


function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [checked, setChecked] = useState(false);

  const mainClass = darkMode ? 'is-dark-mode' : 'is-light-mode';

  function changeMedia(mq) {
    // setChecked(mq.matches);
    setDarkMode(mq.matches);
    // if (mq.matches) {
    //     console.log('vamos a light mode');
    //     // document.body.classList.remove('is-light-mode');
    //     // document.body.classList.add('is-dark-mode');
    // } else{
    //     console.log('vamos a dark mode');
    //     // document.body.classList.remove('is-dark-mode');
    //     // document.body.classList.add('is-light-mode');
    // }
}


useEffect(() => {

  // Nota: matchMedia se utiliza para checar el @media (prefers-color-scheme: dark)
  const mq = window.matchMedia('(prefers-color-scheme: dark)');
  mq.addListener(changeMedia);
  setDarkMode(mq.matches);
  setChecked(mq.matches);
  
}, []);



  

  return (
      <main className={mainClass}>
        <Header>
          <h1>h1 desde App.js</h1>
          <h1>h1 desde App.js</h1>
          <h1>h1 desde App.js</h1>
          <Switch setDarkMode={setDarkMode} checked={darkMode} />
        </Header>
        <TopCardList />
        <Overview />
      </main>
  );
}

export default App;


