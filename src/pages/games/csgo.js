import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Tag from '../../components/tag.js';
import { AuthContext } from '../../auth/auth.js';
import { useHistory } from 'react-router-dom';
import Client from '../../components/client.js';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import '../../App.css'

let clients = [
  { link: 'https://wallhax.com/hacks/csgo/', game: 'csgo', src: 'wallhax.png', name: 'Wallhax', desc: 'Features include our Deadly Bone Aimbot, 3D ESP, Mouse Driven Menu and more...', colour_a: 'yellow', dot_a: 'dot', tag_a: 'ESP', colour_b: 'red', dot_b: 'dot', tag_b: 'AIMBOT', colour_c: 'green', dot_c: 'dot', tag_c: 'PAID' },
  { link: 'https://onetap.com', game: 'csgo', src: 'onetap.png', name: 'Onetap', desc: 'Hundreds of features such as Aimbot, Wallhack, and Anti-Cheat Protection.', colour_a: 'yellow', dot_a: 'dot', tag_a: 'ESP', colour_b: 'red', dot_b: 'dot', tag_b: 'AIMBOT', colour_c: 'green', dot_c: 'dot', tag_c: 'PAID' },
  { link: 'https://project-infinity.cloud/', game: 'csgo', src: 'infin.png', name: 'Infinity', desc: 'With our free CSGO Hack you will easy rank up to Global Elite. Our CS:GO hack is undetected.', colour_a: 'yellow', dot_a: 'dot', tag_a: 'ESP', colour_b: 'red', dot_b: 'dot', tag_b: 'AIMBOT', colour_c: 'green', dot_c: 'dot', tag_c: 'FREE & PAID' },
];

let tags = [
  { name: 'FPS', colour: 'yellow'},
  { name: 'PvP', colour: 'green'},
  { name: 'Popular', colour: 'red'},
  { name: 'Valve', colour: 'blue'},
];

function App() {

    /* All states & Search Code IMPORTED FROM [ src/pages/browse.js ] */

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
    document.title = `Nexus | CSGO` /* <- MANUAL INPUT REQUIRED */
    setVis('go-button-invis');
    setSearchVis('searchErrorInvis');
    setFilter('atoz-invis');
  }, [])

  // Handles the click of the search button (onClick)
  const clickGo = () => {
    clients = [
      { link: 'https://wallhax.com/hacks/csgo/', game: 'csgo', src: 'wallhax.png', name: 'Wallhax', desc: 'Features include our Deadly Bone Aimbot, 3D ESP, Mouse Driven Menu and more...', colour_a: 'yellow', dot_a: 'dot', tag_a: 'ESP', colour_b: 'red', dot_b: 'dot', tag_b: 'AIMBOT', colour_c: 'green', dot_c: 'dot', tag_c: 'PAID' },
      { link: 'https://onetap.com', game: 'csgo', src: 'onetap.png', name: 'Onetap', desc: 'Hundreds of features such as Aimbot, Wallhack, and Anti-Cheat Protection.', colour_a: 'yellow', dot_a: 'dot', tag_a: 'ESP', colour_b: 'red', dot_b: 'dot', tag_b: 'AIMBOT', colour_c: 'green', dot_c: 'dot', tag_c: 'PAID' },
      { link: 'https://project-infinity.cloud/', game: 'csgo', src: 'infin.png', name: 'Infinity', desc: 'With our free CSGO Hack you will easy rank up to Global Elite. Our CS:GO hack is undetected.', colour_a: 'yellow', dot_a: 'dot', tag_a: 'ESP', colour_b: 'red', dot_b: 'dot', tag_b: 'AIMBOT', colour_c: 'green', dot_c: 'dot', tag_c: 'FREE & PAID' },
    ]
    clients = clients.filter(client => client.name.toLowerCase().includes(search.toLowerCase()));
    // Forces the page to re-render (updates map)
    setVis('go-button-RENDER');
    // Checks if the returned array is empty
    if (clients.length === 0) {
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
    clients = clients.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));
    setFilter('atoz-invis');
  }

  // Handles when enter is pressed while the search field is selected (onKeyDown)
  const _handleEnter = (e) => {
    const name = e.target.value;
    if (e.key === 'Enter' && name.length > 1) {
      clients = [
        { link: 'https://wallhax.com/hacks/csgo/', game: 'csgo', src: 'wallhax.png', name: 'Wallhax', desc: 'Features include our Deadly Bone Aimbot, 3D ESP, Mouse Driven Menu and more...', colour_a: 'yellow', dot_a: 'dot', tag_a: 'ESP', colour_b: 'red', dot_b: 'dot', tag_b: 'AIMBOT', colour_c: 'green', dot_c: 'dot', tag_c: 'PAID' },
        { link: 'https://onetap.com', game: 'csgo', src: 'onetap.png', name: 'Onetap', desc: 'Hundreds of features such as Aimbot, Wallhack, and Anti-Cheat Protection.', colour_a: 'yellow', dot_a: 'dot', tag_a: 'ESP', colour_b: 'red', dot_b: 'dot', tag_b: 'AIMBOT', colour_c: 'green', dot_c: 'dot', tag_c: 'PAID' },
        { link: 'https://project-infinity.cloud/', game: 'csgo', src: 'infin.png', name: 'Infinity', desc: 'With our free CSGO Hack you will easy rank up to Global Elite. Our CS:GO hack is undetected.', colour_a: 'yellow', dot_a: 'dot', tag_a: 'ESP', colour_b: 'red', dot_b: 'dot', tag_b: 'AIMBOT', colour_c: 'green', dot_c: 'dot', tag_c: 'FREE & PAID' },
      ]
      clients = clients.filter(client => client.name.toLowerCase().includes(search.toLowerCase()));
      // Forces the page to re-render (updates map)
      setVis('go-button-RENDER');
      if (clients.length === 0) {
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
      clients = [
  { link: 'https://wallhax.com/hacks/csgo/', game: 'csgo', src: 'wallhax.png', name: 'Wallhax', desc: 'Features include our Deadly Bone Aimbot, 3D ESP, Mouse Driven Menu and more...', colour_a: 'yellow', dot_a: 'dot', tag_a: 'ESP', colour_b: 'red', dot_b: 'dot', tag_b: 'AIMBOT', colour_c: 'green', dot_c: 'dot', tag_c: 'PAID' },
  { link: 'https://onetap.com', game: 'csgo', src: 'onetap.png', name: 'Onetap', desc: 'Hundreds of features such as Aimbot, Wallhack, and Anti-Cheat Protection.', colour_a: 'yellow', dot_a: 'dot', tag_a: 'ESP', colour_b: 'red', dot_b: 'dot', tag_b: 'AIMBOT', colour_c: 'green', dot_c: 'dot', tag_c: 'PAID' },
  { link: 'https://project-infinity.cloud/', game: 'csgo', src: 'infin.png', name: 'Infinity', desc: 'With our free CSGO Hack you will easy rank up to Global Elite. Our CS:GO hack is undetected.', colour_a: 'yellow', dot_a: 'dot', tag_a: 'ESP', colour_b: 'red', dot_b: 'dot', tag_b: 'AIMBOT', colour_c: 'green', dot_c: 'dot', tag_c: 'FREE & PAID' },
      ]
    } else if (name.length < 2) {
      setVis('go-button-invis')
    } else {
      setVis('go-button')
    }
  }

  const data = {
    name: 'CSGO',
    link: 'CSGO',
    src: 'CSGO.png',
    desc: 'Counter-Strike: Global Offensive (CS:GO) is a multiplayer first-person shooter developed by Valve.',
  }

  const history = useHistory();
  const { user } = React.useContext(AuthContext);

  const userRedirect = () => {
    history.push('/Nexus/Account');
  }

  return (
    <body>
        <div className='nav-button--notselected'><Link to='/Nexus'>Home</Link></div><div className='nav-button--notselected'><Link to='/Nexus/Browse'>Browse</Link></div><div className='nav-button--arrow'>❯</div><div className='nav-button--selected'><Link to={`${data.link}`}>{data.name}</Link></div>
        <div className='buttons--wrapper'>
          <div className='account-icon--wrapper'>{user === null ? '' : <AccountCircleIcon onClick={userRedirect} sx={{ fontSize: '40px', zIndex: '1' }}></AccountCircleIcon>}</div><Link to='/Nexus/Log-In'><div className={user === null ? 'log-in--button' : 'log-in--button---invis'}>Log In</div></Link><Link to='/Nexus/Sign-Up'><div className={user === null ? 'sign-up--button' : 'sign-up--button---invis'}>Sign Up</div></Link>
        </div>
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
        <input style={{
          display: 'block',
          margin: '10px auto',
        }} name='name' placeholder='Search' type='text' onKeyDown={_handleEnter} onChange={searchChange}></input>
        <div className='button--wrapper'>
          <div onClick={setFilterToggle} className='filter'></div><div onClick={filteratoz} className={filter}>Sort by: A - Z</div><div onClick={clickGo} className={vis}>Go ❯</div>
        </div>
        <div className={searchVis}>Whoops! We couldn't find any clients that matched your search, did you enter the name correctly?</div>
        <div style={{
          marginTop: '30px',
        }} className='client--wrapper'>
          {clients.map((client) => {
            return (
            <Client
              link={client.link}
              game={client.game}
              src={client.src}
              name={client.name}
              desc={client.desc}
              colour_a={client.colour_a}
              dot_a={client.dot_a}
              tag_a={client.tag_a}
              colour_b={client.colour_b}
              dot_b={client.dot_b}
              tag_b={client.tag_b}
              colour_c={client.colour_c}
              dot_c={client.dot_c}
              tag_c={client.tag_c}
            />
            )
          })}
        </div>
    </body>
  );
}

export default App;