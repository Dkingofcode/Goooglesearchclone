import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Routers from './components/Routes';
import Search from './components/Search';

function App() {
  const [darkTheme, setDarkTheme] = useState(false); 

  return (
    <>
    <div className={darkTheme ? 'dark' : ''}> 
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen">
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
      <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
      <Routers   />
      <Footer />
      </div>
    </div>

    </>
  )
}

export default App;
