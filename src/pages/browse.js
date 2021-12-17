import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function App() {
  return (
    <body>
        <div className='nav-button--notselected'><Link to='/Nexus'>Home</Link></div><div className='nav-button--selected'><Link to='/Nexus/Browse'>Browse</Link></div>
        <div className='browse-title'>Let's get started...</div>
        <div className='browse-title--desc'>First, help us figure out which games you would like to find cheats for:</div>
        <input placeholder='Search' type='text'></input><div className='go-button'>Go ❯</div>
    </body>
  );
}

export default App;