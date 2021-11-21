import React, { useState, useEffect } from 'react';
import './app.css';
import Button from '@mui/material/Button';
import Shuffler from './Shuffler.jsx';
import Collection from './Collection.jsx';
import Login from './Login.jsx';



const App = () => {

  const [isSignedIn, setIsSignedIn] = useState('false');



  return (

    <div className='container'>
      <div className="header">
        <h1>Shuffler</h1>
        <div>
        </div>

      </div>
      <Button variant="contained" color='primary'> Sign In</Button>
      <div>\
        or
        <Button variant='text'>create an account here</Button>
      </div>
      <Button variant='contained'>Quick Shuffle</Button>


      <Login />
      <Shuffler />
      <Collection />
      <div className='reactLogo'></div>
    </div>
  )
}

export default App;