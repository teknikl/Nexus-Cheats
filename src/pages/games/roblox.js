import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Tag from '../../components/tag.js';
import '../../App.css'

function App() {

  let tags = [
    { name: 'Sandbox', colour: 'red'},
    { name: 'PvP & PvE', colour: 'pink'},
    { name: 'Popular', colour: 'green'},
    { name: 'Roblox Corporation', colour: 'yellow'},
  ];

  // Calls when page first renders
  useEffect(() => {
    document.title = `Nexus | Roblox` /* <- MANUAL INPUT REQUIRED */
  }, [])

  const data = {
    name: 'Roblox',
    link: 'Roblox',
    desc: 'Roblox is a global platform where millions of people gather together every day to imagine, create, and share experiences with each other in immersive, user-generated 3D worlds.',
  }

  return (
    <body>
        <div className='nav-button--notselected'><Link to='/Nexus'>Home</Link></div><div className='nav-button--notselected'><Link to='/Nexus/Browse'>Browse</Link></div><div className='nav-button--arrow'>❯</div><div className='nav-button--selected'><Link to={`${data.link}`}>{data.name}</Link></div>
        <div className='game--name'>{data.name}</div>
        <div className='game--desc'>{data.desc}</div>
        <div className='game-tag--wrapper'>
        {tags.map((tag) => {
            return (
              <Tag
                name={tag.name}
                colour={tag.colour}
              />
            )
          })}
        </div>
    </body>
  );
}

export default App;