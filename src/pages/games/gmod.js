import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css'

function App() {

  // Calls when page first renders
  useEffect(() => {
    document.title = `Nexus | Gmod` /* <- MANUAL INPUT REQUIRED */
  }, [])

  const data = {
    name: "Garry's Mod",
    link: 'Gmod',
    desc: "Garry's Mod is a physics-based sandbox game that, in its base game mode, has no set objectives.",
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