import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword } from '@firebase/auth';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useHistory } from 'react-router-dom';
import { AuthContext, auth } from '../auth/auth.js';
import '../App.css';

function App() {

  // All states
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
    document.title = 'Nexus | Sign Up'
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
    setEmail(e.target.value);
  }

  const updatePass = (e) => {
    setPass(e.target.value);
  }

  const history = useHistory();
  const { updateUser } = React.useContext(AuthContext);
  const { user } = React.useContext(AuthContext);

  const Register = () => {
      createUserWithEmailAndPassword(auth, email, pass, user)
          .then(() => {
            history.push('/Nexus');
            updateUser(user);
          })
          .catch((err) => {
              setFormErrVis('main-form--error');
              setFormerr(err);
          })
  }

  return (
    <body>
      <div className='bg'></div>
        <div className='nav-button--notselected'><Link to='/Nexus'>Home</Link></div><div className='nav-button--notselected'><Link to='/Nexus/Browse'>Browse</Link></div>❯<div className='nav-button--selected'><Link to='/Nexus/Sign-Up'>Sign Up</Link></div>
        <div className='form-heading'>Sign Up</div>
        <div className='form-heading--desc'>Register an account for archiemourad.github.io/Nexus.</div>
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
            <div className={formErrVis}>{formerr.toString()}</div>
            <div className='form-confirm--button' onClick={Register}>Register</div>
            <div className='form-other--wrapper'>
              <div className='form-other--text'>Already registered?</div><Link to='/Nexus/Log-In'><div className='form-other--link'>Login</div></Link>
            </div>
    </body>
  );
}

export default App;