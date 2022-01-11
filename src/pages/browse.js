import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Gametile from '../components/gametile.js';
import { signOut } from '@firebase/auth';
import { AuthContext, auth } from '../auth/auth.js';
import { useHistory } from 'react-router-dom';
import '../App.css';

let games = [
  { name: 'CS:GO', src: 'CSGO.png', alt: 'CS:GO', link: 'CSGO'},
  { name: 'Minecraft', src: 'Minecraft.png', alt: 'Minecraft', link: 'Minecraft'},
  { name: 'Among Us', src: 'Amongus.png', alt: 'Among Us', link: 'AmongUs'},
  { name: 'Roblox', src: 'Roblox.png', alt: 'Roblox', link: 'Roblox'},
  { name: "Garry's Mod", src: 'Gmod.png', alt: "Garry's Mod", link: 'Gmod'},
  { name: 'Overwatch', src: 'Overwatch.png', alt: 'Overwatch', link: 'Overwatch'},
  { name: 'Fortnite', src: 'Fortnite.png', alt: 'Fortnite', link: 'Fortnite'},
  { name: 'Warzone', src: 'Warzone.png', alt: 'Warzone', link: 'Warzone'},
  { name: 'Valorant', src: 'Valorant.png', alt: 'Valorant', link: 'Valorant'},
  { name: 'Apex Legends', src: 'Apex.png', alt: 'Apex Legends', link: 'ApexLegends'},
]

function App() {

  /* All states */

  // Handles the search data
  const [search, setSearch] =  React.useState ({
    search: '',
  });

  // Search Error meesage
  const [searchVis, setSearchVis] = React.useState ({
    searchVis: '',
  });

  // Sets the vis of the search button
  const [vis, setVis] = React.useState ({
    vis: '',
  });

  // Sets vis of the filter
  const [filter, setFilter] = React.useState ({
    filter: '',
  });

  // Sets the visivility of the filter options

  // Calls when page first renders
  useEffect(() => {
    document.title = 'Nexus | Browse'
    setVis('go-button-invis');
    setSearchVis('searchErrorInvis');
    setFilter('atoz-invis');
  }, [])

  // Handles the click of the search button (onClick)
  const clickGo = () => {
    games = [
      { name: 'CS:GO', src: 'CSGO.png', alt: 'CS:GO', link: 'CSGO'},
      { name: 'Minecraft', src: 'Minecraft.png', alt: 'Minecraft', link: 'Minecraft'},
      { name: 'Among Us', src: 'Amongus.png', alt: 'Among Us', link: 'AmongUs'},
      { name: 'Roblox', src: 'Roblox.png', alt: 'Roblox', link: 'Roblox'},
      { name: "Garry's Mod", src: 'Gmod.png', alt: "Garry's Mod", link: 'Gmod'},
      { name: 'Overwatch', src: 'Overwatch.png', alt: 'Overwatch', link: 'Overwatch'},
      { name: 'Fortnite', src: 'Fortnite.png', alt: 'Fortnite', link: 'Fortnite'},
      { name: 'Warzone', src: 'Warzone.png', alt: 'Warzone', link: 'Warzone'},
      { name: 'Valorant', src: 'Valorant.png', alt: 'Valorant', link: 'Valorant'},
      { name: 'Apex Legends', src: 'Apex.png', alt: 'Apex Legends', link: 'ApexLegends'},
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

  // Handles the click of the filter button (onClick)
  const setFilterToggle = () => {
    if (filter === 'atoz-invis') {
      setFilter('atoz');
    } else {
      setFilter('atoz-invis');
    }
  }

  // Handles the a-to-z filter
  const filteratoz = () => {
    games = games.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));
    setFilter('atoz-invis');
  }

  // Handles when enter is pressed while the search field is selected (onKeyDown)
  const _handleEnter = (e) => {
    const name = e.target.value;
    if (e.key === 'Enter' && name.length > 1) {
      games = [
        { name: 'CS:GO', src: 'CSGO.png', alt: 'CS:GO', link: 'CSGO'},
        { name: 'Minecraft', src: 'Minecraft.png', alt: 'Minecraft', link: 'Minecraft'},
        { name: 'Among Us', src: 'Amongus.png', alt: 'Among Us', link: 'AmongUs'},
        { name: 'Roblox', src: 'Roblox.png', alt: 'Roblox', link: 'Roblox'},
        { name: "Garry's Mod", src: 'Gmod.png', alt: "Garry's Mod", link: 'Gmod'},
        { name: 'Overwatch', src: 'Overwatch.png', alt: 'Overwatch', link: 'Overwatch'},
        { name: 'Fortnite', src: 'Fortnite.png', alt: 'Fortnite', link: 'Fortnite'},
        { name: 'Warzone', src: 'Warzone.png', alt: 'Warzone', link: 'Warzone'},
        { name: 'Valorant', src: 'Valorant.png', alt: 'Valorant', link: 'Valorant'},
        { name: 'Apex Legends', src: 'Apex.png', alt: 'Apex Legends', link: 'ApexLegends'},
      ]
      games = games.filter(game => game.name.toLowerCase().includes(search.toLowerCase()));
      // Forces the page to re-render (updates map)
      setVis('go-button-RENDER');
      if (games.length === 0) {
        setSearchVis('searchError');
      } else {
        setSearchVis('searchErrorInvis');
      }
    }
  }

  // Show and hide the search button (onChange)
  const searchChange = (e) => {
    const name = e.target.value;
    setSearch(e.target.value)
    if (name.length < 1) {
      setSearchVis('searchErrorInvis');
      games = [
        { name: 'CS:GO', src: 'CSGO.png', alt: 'CS:GO', link: 'CSGO'},
        { name: 'Minecraft', src: 'Minecraft.png', alt: 'Minecraft', link: 'Minecraft'},
        { name: 'Among Us', src: 'Amongus.png', alt: 'Among Us', link: 'AmongUs'},
        { name: 'Roblox', src: 'Roblox.png', alt: 'Roblox', link: 'Roblox'},
        { name: "Garry's Mod", src: 'Gmod.png', alt: "Garry's Mod", link: 'Gmod'},
        { name: 'Overwatch', src: 'Overwatch.png', alt: 'Overwatch', link: 'Overwatch'},
        { name: 'Fortnite', src: 'Fortnite.png', alt: 'Fortnite', link: 'Fortnite'},
        { name: 'Warzone', src: 'Warzone.png', alt: 'Warzone', link: 'Warzone'},
        { name: 'Valorant', src: 'Valorant.png', alt: 'Valorant', link: 'Valorant'},
        { name: 'Apex Legends', src: 'Apex.png', alt: 'Apex Legends', link: 'ApexLegends'},
      ]
    } else if (name.length < 2) {
      setVis('go-button-invis')
    } else {
      setVis('go-button')
    }
  }

  const history = useHistory();
  const { user } = React.useContext(AuthContext);

  const logout = () => {
    signOut(auth).then(() => {
      history.push('/Nexus/Log-In')
    }).catch((err) => {
      console.log(err);
    });
  }

  return (
    <body>
      <div className='bg'></div>
        <div className='nav-button--notselected'><Link to='/Nexus'>Home</Link></div><div className='nav-button--selected'><Link to='/Nexus/Browse'>Browse</Link></div>
        <div className='buttons--wrapper'>
          <div className={user === null ? 'user--email---invis' : 'user--email'}>{user === null ? console.log('out') : user.email}</div><div className={user === null ? 'user--email---logout----invis' : 'user--email---logout'} onClick={logout} >Logout</div><Link to='/Nexus/Log-In'><div className={user === null ? 'log-in--button' : 'log-in--button---invis'}>Log In</div></Link><Link to='/Nexus/Sign-Up'><div className={user === null ? 'sign-up--button' : 'sign-up--button---invis'}>Sign Up</div></Link>
        </div>
        <div className='browse-title--wrapper'>
          <div className='browse-title'>Let's get started...</div><div className='heading--type'></div>
        </div>
        <div className='browse-title--desc'>First, help us figure out which games you would like to find cheats for:</div>
        <input name='name' placeholder='Search' type='text' onKeyDown={_handleEnter} onChange={searchChange}></input><div onClick={setFilterToggle} className='filter'></div><div onClick={filteratoz} className={filter}>Sort by: A - Z</div><div onClick={clickGo} className={vis}>Go ❯</div>
        <div className={searchVis}>Whoops! We couldn't find any games that matched your search, did you enter the name correctly?</div>
        <div className='game-tile--wrapper'>
          {games.map((game) => {
            return (
              <Gametile
                name={game.name}
                src={game.src}
                alt={game.alt}
                link={game.link}
              />
            )
          })}
        </div>
    </body>
  );
}

export default App;