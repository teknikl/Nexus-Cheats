import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword, sendPasswordResetEmail } from '@firebase/auth';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useHistory } from 'react-router-dom';
import { AuthContext, auth } from '../auth/auth.js';
import Bg from '../components/background.js';
import '../App.css';

function App() {

  const num = Math.floor(Math.random() * 4) + 1;

  // All states

  const [bg, setBg] = React.useState(`bg${num}`);

  const [passVis, setPassVis] = React.useState ({
    passVis: '',
  });

  const [email, setEmail] = React.useState ({
    email: '',
  })

  const [pass, setPass] = React.useState ({
    pass: '',
  })

  const [formErrVis, setFormErrVis] = React.useState ({
    formErrVis: '',
  })

  const [formerr, setFormerr] = React.useState ({
    formerr: '',
  })

  // Calls when page first renders
  useEffect(() => {
    document.title = 'Nexus | Log In'
    setPassVis('password');
    setFormErrVis('main-form--error---invis');
  }, [])

  const updateVis = () => {
      if (passVis === 'password') {
          setPassVis('text')
      } else {
          setPassVis('password')
      }
  }

  // Updates
  const updateEmail = (e) => {
    if (e.target.value === 'xqcL') {
      setBg('bg5');
    }
    setEmail(e.target.value);
  }

  const updatePass = (e) => {
    if (e.target.value === 'xqcL') {
      setBg('bg5');
    }
    setPass(e.target.value);
  }

  const history = useHistory();
  const { updateUser } = React.useContext(AuthContext);
  const { user } = React.useContext(AuthContext);

  const SignIn = () => {
        signInWithEmailAndPassword(auth, email, pass, user)
          .then(() => {
            history.push('/Nexus');
            updateUser(user);
          })
          .catch((err) => {
              setFormErrVis('main-form--error');
              setFormerr(err);
          })
  }

  const sendPassReset = () => {
    sendPasswordResetEmail(auth, email);
  };

  return (
    <body>
      <Bg img={bg}></Bg>
        <div className='nav-button--notselected'><Link to='/Nexus'>Home</Link></div><div className='nav-button--notselected'><Link to='/Nexus/Browse'>Browse</Link></div>❯<div className='nav-button--selected'><Link to='/Nexus/Log-In'>Log In</Link></div>
        <div className='form-heading'>Log In</div>
        <div className='form-heading--desc'>Log In to an existing account on archiemourad.github.io/Nexus.</div>
        <div className='form-input--wrapper---a'>
            <input style={{
                textTransform: 'none',
                marginLeft: '0px',
                width: '350px',
            }} placeholder='Email' onChange={updateEmail} ></input>
        </div>
        <div className='form-input--wrapper---b'>
            <input style={{
                textTransform: 'none',
                marginLeft: '0px',
                width: '350px',
            }} type={passVis} placeholder='Password' onChange={updatePass} ></input><div onClick={updateVis} className='password-vis--button'>{passVis === 'password' ? <VisibilityIcon></VisibilityIcon> : <VisibilityOffIcon></VisibilityOffIcon>}</div>
        </div>
        <div className='log-in--pass--wrapper'>
          <div className='log-in--pass'>Forgot your password?</div><Link to='/Nexus/Log-In/Reset'><div className='log-in--pass---link' onClick={sendPassReset} >Send an email</div></Link>
        </div>
            <div className={formErrVis}>{formerr.toString()}</div>
            <div className='form-confirm--button' onClick={SignIn}>Log In</div>
            <div className='form-other--wrapper'>
              <div className='form-other--text'>Don't have an account?</div><Link to='/Nexus/Sign-Up'><div className='form-other--link'>Register</div></Link>
            </div>
    </body>
  );
}

export default App;