import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Tag from '../../components/tag.js';
import '../../App.css'

function App() {

  let tags = [
    { name: 'Strategy', colour: 'green'},
    { name: 'Party', colour: 'pink'},
    { name: 'Innersloth', colour: 'yellow'},
  ];

  // Calls when page first renders
  useEffect(() => {
    document.title = `Nexus | Among Us` /* <- MANUAL INPUT REQUIRED */
  }, [])

  const data = {
    name: 'Among Us',
    link: 'AmongUs',
    src: 'Amongus.png',
    desc: 'Among Us is a multiplayer game where between four and 10 players are dropped onto an alien spaceship.',
  }

  return (
    <body>
        <div className='nav-button--notselected'><Link to='/Nexus'>Home</Link></div><div className='nav-button--notselected'><Link to='/Nexus/Browse'>Browse</Link></div><div className='nav-button--arrow'>❯</div><div className='nav-button--selected'><Link to={`${data.link}`}>{data.name}</Link></div>
        <div className='game--name'>{data.name}</div>
        <div className='game--bg'>
          <div className='game-bg--fade'></div>
          <img src={require(`../../images/game_images/${data.src}`)} alt=''></img>
        </div>
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