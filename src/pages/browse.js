import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Gametile from '../components/gametile.js';
import '../App.css';

const games = [
  { name: 'Minecraft', src: 'Minecraft.png', alt: 'Minecraft'},
  { name: 'CS:GO', src: 'CSGO.png', alt: 'CS:GO'},
  { name: 'Among Us', src: 'Amongus.png', alt: 'Among Us'},
]

function App() {

  // Calls when page first renders
  useEffect(() => {
    document.title = 'Nexus | Browse'
    setVis('go-button-invis')
  }, [])

  // Show and hide the search button (onChange)
  const searchChange = (e) => {
    const name = e.target.value;
    if (name.length === 0) {
      setVis('go-button-invis')
    } else {
      setVis('go-button')
    }
  }
  const [vis, setVis] = React.useState ({
    vis: '',
  });

  return (
    <body>
        <div className='nav-button--notselected'><Link to='/Nexus'>Home</Link></div><div className='nav-button--selected'><Link to='/Nexus/Browse'>Browse</Link></div>
        <div className='browse-title'>Let's get started...</div>
        <div className='browse-title--desc'>First, help us figure out which games you would like to find cheats for:</div>
        <input name='name' placeholder='Search' type='text' onChange={searchChange}></input><div className={vis}>Go ❯</div>
        <div className='game-tile--wrapper'>
          {games.map((game) => {
            return (
              <Gametile
                name={game.name}
                src={game.src}
                alt={game.alt}
              />
            )
          })}
        </div>
    </body>
  );
}

export default App;