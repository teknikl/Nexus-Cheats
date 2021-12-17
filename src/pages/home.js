import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function App() {
  return (
    <body>
        <div className='nav-button--selected'><Link to='/Nexus'>Home</Link></div><div className='nav-button--notselected'><Link to='/Nexus/Browse'>Browse</Link></div>
            <div className='heading'>Nexus</div>
            <div className='heading-desc'>An index of (cheat)hacked clients, for any game.</div>
            <div className='browse-link'><Link to='/Nexus/Browse'>Start browsing ❯</Link></div>
    </body>
  );
}

export default App;