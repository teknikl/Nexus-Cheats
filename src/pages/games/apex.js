import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Tag from '../../components/tag.js';
import { signOut } from '@firebase/auth';
import { AuthContext, auth } from '../../auth/auth.js';
import { useHistory } from 'react-router-dom';
import '../../App.css'

function App() {

  let tags = [
    { name: 'FPS', colour: 'green'},
    { name: 'PvP', colour: 'yellow'},
    { name: 'Popular', colour: 'pink'},
    { name: 'Panic', colour: 'red'},
  ];

  // Calls when page first renders
  useEffect(() => {
    document.title = `Nexus | Apex` /* <- MANUAL INPUT REQUIRED */
  }, [])

  const data = {
    name: 'Apex Legends',
    link: 'ApexLegends',
    src: 'Apex.png',
    desc: 'Apex Legends is an online multiplayer battle royale game featuring squads of three players using pre-made characters with distinctive abilities, called "Legends", similar to those of hero shooters.',
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
        <div className='nav-button--notselected'><Link to='/Nexus'>Home</Link></div><div className='nav-button--notselected'><Link to='/Nexus/Browse'>Browse</Link></div><div className='nav-button--arrow'>❯</div><div className='nav-button--selected'><Link to={`${data.link}`}>{data.name}</Link></div>
        <div className='buttons--wrapper'>
          <div className={user === null ? 'user--email---invis' : 'user--email'}>{user === null ? console.log('out') : user.email}</div><div className={user === null ? 'user--email---logout----invis' : 'user--email---logout'} onClick={logout} >Logout</div><Link to='/Nexus/Log-In'><div className={user === null ? 'log-in--button' : 'log-in--button---invis'}>Log In</div></Link><Link to='/Nexus/Sign-Up'><div className={user === null ? 'sign-up--button' : 'sign-up--button---invis'}>Sign Up</div></Link>
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