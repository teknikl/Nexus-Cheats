import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../auth/auth.js';
import { useHistory } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Bg from '../components/background.js';
import '../App.css';

function App() {

  const num = Math.floor(Math.random() * 4) + 1;

  // All states
  const [bg, setBg] = React.useState(`bg${num}`);
  const [addonAnim, setAddonAnim] = React.useState(`heading--addon---${num}`);

  // Calls when page first renders
  useEffect(() => {
    document.title = 'Nexus | Home'
  }, [])

  const history = useHistory();
  const { user } = React.useContext(AuthContext);

  const userRedirect = () => {
    history.push('/Nexus/Account');
  }

  const nextBg = () => {
    if (bg === 'bg1') {
      setBg('bg2');
      setAddonAnim('heading--addon---2');
    } else if (bg === 'bg2') {
      setBg('bg3');
      setAddonAnim('heading--addon---3');
    } else if (bg === 'bg3') {
      setBg('bg4');
      setAddonAnim('heading--addon---4');
    } else {
      setBg('bg1');
      setAddonAnim('heading--addon---1');
    }
  }

  return (
    <body>
      <Bg img={bg}></Bg>
        <div className='nav-button--selected'><Link to='/Nexus'>Home</Link></div><div className='nav-button--notselected'><Link to='/Nexus/Browse'>Browse</Link></div>
        <div className='buttons--wrapper'>
          <div className='account-icon--wrapper'>{user === null ? '' : <AccountCircleIcon onClick={userRedirect} sx={{ fontSize: '40px' }}></AccountCircleIcon>}</div><Link to='/Nexus/Log-In'><div className={user === null ? 'log-in--button' : 'log-in--button---invis'}>Log In</div></Link><Link to='/Nexus/Sign-Up'><div className={user === null ? 'sign-up--button' : 'sign-up--button---invis'}>Sign Up</div></Link>
        </div>
          <div className='heading--wrapper'>
            <div className='heading'>Nexus</div><div className='heading--type'></div><div className={addonAnim}>{bg === 'bg1' ? '// Counter Strike : Global Offensive' : bg === 'bg2' ? '// Valorant' : bg === 'bg3' ? '// Warzone' : '// Overwatch'}</div><div className='next--arrow---wrapper'>
              <div onClick={nextBg} className='next--arrow'><ArrowForwardIosIcon sx={{ fontSize: '75px' }}></ArrowForwardIosIcon></div>
            </div>
          </div>
            <div className='heading-desc'>An index of (cheat)hacked clients, for any game.</div>
            <div className='source'>This page is open source. Check it out<a href='https://github.com/ArchieMourad/Nexus'><div className='source--link'>here</div></a>.</div>
            <div className='browse-link'><Link to='/Nexus/Browse'>Start browsing supported titles ❯</Link></div>
    </body>
  );
}

export default App;