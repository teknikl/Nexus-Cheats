import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css'

function App() {

  // Calls when page first renders
  useEffect(() => {
    document.title = `Nexus | Overwatch` /* <- MANUAL INPUT REQUIRED */
  }, [])

  const data = {
    name: 'Overwatch',
    link: 'Overwatch',
    desc: 'Overwatch is a 2016 team-based multiplayer first-person shooter game developed and published by Blizzard Entertainment.',
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