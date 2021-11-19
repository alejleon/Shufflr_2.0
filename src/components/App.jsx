import React, { useState, useEffect } from 'react';
import './app.css';
import Shuffler from './Shuffler.jsx';
import Collection from './Collection.jsx';



const App = () => {


  return (




    <div className='container'>
      <div className="header">
        <h1>This is now the Shfflr App!</h1>
        <div>
          <Shuffler />
          <Collection />
        </div>

      </div>
      <div className='reactLogo'></div>
    </div>
  )
}

export default App;