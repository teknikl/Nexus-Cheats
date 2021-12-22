import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Tag from '../../components/tag.js';
import '../../App.css'

function App() {

  let tags = [
    { name: 'Sandbox', colour: 'green'},
    { name: 'PvP & PvE', colour: 'red'},
    { name: 'Popular', colour: 'yellow'},
    { name: 'Mojang', colour: 'pink'},
  ];

  // Calls when page first renders
  useEffect(() => {
    document.title = `Nexus | Minecraft` /* <- MANUAL INPUT REQUIRED */
  }, [])

  const data = {
    name: 'Minecraft',
    link: 'Minecraft',
    desc: 'Minecraft is a sandbox video game developed by the Swedish video game developer Mojang Studios.',
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