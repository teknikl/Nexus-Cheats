import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Gametile from '../components/gametile.js';
import '../App.css';

let games = [
  { name: 'Minecraft', src: 'Minecraft.png', alt: 'Minecraft'},
  { name: 'CS:GO', src: 'CSGO.png', alt: 'CS:GO'},
  { name: 'Among Us', src: 'Amongus.png', alt: 'Among Us'},
  { name: 'Roblox', src: 'Roblox.png', alt: 'Roblox'},
]

function App() {

  // Calls when page first renders
  useEffect(() => {
    document.title = 'Nexus | Browse'
    setVis('go-button-invis');
    setSearchVis('searchErrorInvis');
  }, [])

  // Handles the search data
  const [search, setSearch] =  React.useState ({
    search: '',
  });

  // Handles the click of the search button
  const clickGo = () => {
    games = [
      { name: 'Minecraft', src: 'Minecraft.png', alt: 'Minecraft'},
      { name: 'CS:GO', src: 'CSGO.png', alt: 'CS:GO'},
      { name: 'Among Us', src: 'Amongus.png', alt: 'Among Us'},
      { name: 'Roblox', src: 'Roblox.png', alt: 'Roblox'},
    ]
    games = games.filter(game => game.name.toLowerCase().includes(search.toLowerCase()));
    // Forces the page to re-render (updates map)
    setVis('go-button-RENDER');
    // Checks if the returned array is empty
    if (games.length === 0) {
      setSearchVis('searchError');
    } else {
      setSearchVis('searchErrorInvis');
    }
  }

  // Search Error meesage
  const [searchVis, setSearchVis] = React.useState ({
    searchVis: '',
  });

  // Show and hide the search button (onChange)
  const searchChange = (e) => {
    const name = e.target.value;
    setSearch(e.target.value)
    if (name.length < 1) {
      setSearchVis('searchErrorInvis');
      games = [
        { name: 'Minecraft', src: 'Minecraft.png', alt: 'Minecraft'},
        { name: 'CS:GO', src: 'CSGO.png', alt: 'CS:GO'},
        { name: 'Among Us', src: 'Amongus.png', alt: 'Among Us'},
        { name: 'Roblox', src: 'Roblox.png', alt: 'Roblox'},
      ]
    } else if (name.length < 2) {
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
        <input name='name' placeholder='Search' type='text' onChange={searchChange}></input><div onClick={clickGo} className={vis}>Go ❯</div>
        <div className={searchVis}>Whoops! We couldn't find any games, did you enter the name correctly?</div>
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