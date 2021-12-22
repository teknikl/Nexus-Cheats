import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Tag from '../../components/tag.js';
import '../../App.css'

function App() {

  let tags = [
    { name: 'FPS', colour: 'blue'},
    { name: 'PvP', colour: 'yellow'},
    { name: 'Battle Royale', colour: 'pink'},
    { name: 'Popular', colour: 'green'},
    { name: 'Epic Games', colour: 'red'},
  ];

  // Calls when page first renders
  useEffect(() => {
    document.title = `Nexus | Fortnite` /* <- MANUAL INPUT REQUIRED */
  }, [])

  const data = {
    name: 'Fortnite',
    link: 'Fortnite',
    desc: 'Fortnite is a survival game where 100 players fight against each other in player versus player combat to be the last one standing.',
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