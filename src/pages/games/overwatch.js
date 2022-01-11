import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Tag from '../../components/tag.js';
import { AuthContext } from '../../auth/auth.js';
import { useHistory } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import '../../App.css'

function App() {

  let tags = [
    { name: 'FPS', colour: 'green'},
    { name: 'PvP', colour: 'pink'},
    { name: 'Blizzard', colour: 'blue'},
  ];

  // Calls when page first renders
  useEffect(() => {
    document.title = `Nexus | Overwatch` /* <- MANUAL INPUT REQUIRED */
  }, [])

  const data = {
    name: 'Overwatch',
    link: 'Overwatch',
    src: 'Overwatch.png',
    desc: 'Overwatch is a 2016 team-based multiplayer first-person shooter game developed and published by Blizzard Entertainment.',
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
          <div className='account-icon--wrapper'>{user === null ? '' : <AccountCircleIcon onClick={userRedirect} sx={{ fontSize: '40px' }}></AccountCircleIcon>}</div><Link to='/Nexus/Log-In'><div className={user === null ? 'log-in--button' : 'log-in--button---invis'}>Log In</div></Link><Link to='/Nexus/Sign-Up'><div className={user === null ? 'sign-up--button' : 'sign-up--button---invis'}>Sign Up</div></Link>
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
    </body>
  );
}

export default App;