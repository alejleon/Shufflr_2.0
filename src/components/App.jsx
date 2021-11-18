import React from 'react';
import './app.css';
import MainLanding from './mainLanding';

const App = () => {


  return(
    <div className='container'>
      <div className="header">
        <h1>This is now the Shfflr App!</h1>
        <MainLanding />
      </div>
      <div className='reactLogo'></div>
    </div>
  )
}

export default App;