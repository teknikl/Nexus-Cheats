import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css'

function App() {

  // Calls when page first renders
  useEffect(() => {
    document.title = `Nexus | CSGO` /* <- MANUAL INPUT REQUIRED */
  }, [])

  const data = {
    name: 'CSGO',
    link: 'CSGO',
    desc: 'Counter-Strike: Global Offensive (CS:GO) is a multiplayer first-person shooter developed by Valve.',
  }

  return (
    <body>
        <div className='nav-button--notselected'><Link to='/Nexus'>Home</Link></div><div className='nav-button--notselected'><Link to='/Nexus/Browse'>Browse</Link></div><div className='nav-button--arrow'>❯</div><div className='nav-button--selected'><Link to={`${data.link}`}>{data.name}</Link></div>
        <div className='game--name'>{data.name}</div>
        <div className='game--desc'>{data.desc}</div>
    </body>
  );
}

export default App;