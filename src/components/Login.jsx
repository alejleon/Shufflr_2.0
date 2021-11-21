import React, { useState } from 'react';

const SignIn = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  console.log(username)


  const handleUsernameInput = (e) => {
    setUsername(e.target.value)
  }


  return (
    <div>
      <input onChange={handleUsernameInput}>
      </input>
    </div>
  )
}


export default SignIn