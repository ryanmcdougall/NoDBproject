import React from 'react'
import logo from './OWlogo.gif';

function Header(props){
   return( <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h1 className="App-title">Welcome to Overwatch Random!</h1>
  </header> 
  )
}

export default Header