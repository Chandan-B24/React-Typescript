import React, { useState } from 'react'

const Loggedin:React.FC = () => {

  const handleLogin = () =>{
    setIsLoggedIn(true)
  }
  const handleLogout = () =>{
    setIsLoggedIn(false)
  }

  const [isLoggedIn,setIsLoggedIn] = useState<boolean>(false)

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User is {isLoggedIn ? 'Logged in' : 'Logged out'}</div>
    </div>
  )
}

export default Loggedin