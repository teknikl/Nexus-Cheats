import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/footer.js';
import { signOut } from '@firebase/auth';
import { AuthContext, auth } from '../auth/auth.js';
import { useHistory } from 'react-router-dom';
import '../App.css';

function App() {

  // Calls when page first renders
  useEffect(() => {
    document.title = 'Nexus | Home'
  }, [])

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
        <div className='nav-button--selected'><Link to='/Nexus'>Home</Link></div><div className='nav-button--notselected'><Link to='/Nexus/Browse'>Browse</Link></div>
        <div className='buttons--wrapper'>
          <div className={user === null ? 'user--email---invis' : 'user--email'}>{user === null ? console.log('out') : user.email}</div><div className={user === null ? 'user--email---logout----invis' : 'user--email---logout'} onClick={logout} >Logout</div><Link to='/Nexus/Log-In'><div className={user === null ? 'log-in--button' : 'log-in--button---invis'}>Log In</div></Link><Link to='/Nexus/Sign-Up'><div className={user === null ? 'sign-up--button' : 'sign-up--button---invis'}>Sign Up</div></Link>
        </div>
          <div className='heading--wrapper'>
            <div className='heading'>Nexus</div><div className='heading--type'></div>
          </div>
            <div className='heading-desc'>An index of (cheat)hacked clients, for any game.</div>
            <div className='browse-link'><Link to='/Nexus/Browse'>Start browsing supported titles ❯</Link></div>
        <Footer></Footer>
    </body>
  );
}

export default App;