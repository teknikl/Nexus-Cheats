import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext, auth } from '../auth/auth.js';
import { deleteUser } from '@firebase/auth';
import { useHistory } from 'react-router-dom';
import { signOut, updateEmail } from '@firebase/auth';
import DoneIcon from '@mui/icons-material/Done';
import '../App.css';

function App() {

    const [verifyVis, setVerifyVis ] = React.useState ({
        verifyVis: '',
    });

    const [inputVis, setInputVis ] = React.useState ({
        inputVis: '',
    });

    const [tickVis, setTickVis ] = React.useState ({
        tickVis: '',
    });

    const [emailVal, setEmailVal ] = React.useState ({
        emailVal: '',
    });

    const [errVis, setErrVis ] = React.useState ({
        errVis: '',
     });

    const [errVis2, setErrVis2 ] = React.useState ({
        errVis2: '',
    });

    const [pageErr, setPageErr ] = React.useState ({
       pageErr: '',
    });

    const [pageErr2, setPageErr2 ] = React.useState ({
        pageErr2: '',
     });

  // Calls when page first renders
  useEffect(() => {
    document.title = 'Nexus | Account'
    setVerifyVis('verify---wrapper----invis');
    setTickVis('input--tick---invis');
    setInputVis('input--invis');
    setErrVis('user--error---invis');
    setErrVis2('user--error---invis');
  }, [])

  const history = useHistory();
  const { user } = React.useContext(AuthContext);

  const logout = () => {
    signOut(auth)
    .then(() => {
        history.push('/Nexus');
      })
      .catch((err) => {
        setErrVis2('user--error');
        setPageErr2(err);
      })
  };

  const delaccvis = () => {
      if (verifyVis === 'verify---wrapper----invis') {
        setVerifyVis('verify---wrapper');
      } else {
        setVerifyVis('verify---wrapper----invis');
      }
  }

  const delacc = () => {
    deleteUser(user)
    .then(() => {
        history.push('/Nexus');
      })
      .catch((err) => {
        setErrVis2('user--error');
        setPageErr2(err);
      })
  };

  const emailVis = () => {
      if (tickVis === 'input--tick---invis' && inputVis === 'input--invis') {
        setTickVis('input--tick');
        setInputVis('input');
      } else {
        setTickVis('input--tick---invis');
        setInputVis('input--invis');
      }
  }

  const emailChange = (e) => {
    setEmailVal(e.target.value);
  }

  const updateUserEmail = () => {
    updateEmail(user, emailVal)
    .then(() => {
        setTickVis('input--tick---invis');
        setInputVis('input--invis');
      })
      .catch((err) => {
        setErrVis('user--error');
        setPageErr(err);
      })
  }

  return (
    <body>
      <div className='bg'></div>
        <div className='nav-button--notselected'><Link to='/Nexus'>Home</Link></div><div className='nav-button--notselected'><Link to='/Nexus/Browse'>Browse</Link></div>❯<div className='nav-button--selected'><Link to='/Nexus/Account'>Account</Link></div>
        <div className={verifyVis}>
            <div className='verify--box'>
                <div className='verify--box---title'>Are you sure?</div>
                <div className='verify--box---warning'>Accounts that are deleted CAN NOT be recovered. Do you want to continue?</div>
                <div onClick={delaccvis} className='user--action---button---cancel'>Cancel</div><div onClick={delacc} className='user--action---button---continue'>Confirm</div>
            </div>
        </div>
        <div className='account--wrapper'>
            <div className='account-title'>Account</div>

            <div className='section-desc'>Email:</div>
            <div className='section-name'>{user === null ? '' : user.email}</div>
            <div onClick={emailVis} className='user--action---button'>Change Email</div>
            <div className={inputVis}><input onChange={emailChange} style={{
                textTransform: 'none',
                margin: '10px auto',
            }} placeholder='New Email'></input></div><div onClick={updateUserEmail} className={tickVis}><DoneIcon></DoneIcon></div>
            <div className={errVis}>{pageErr.toString()}</div>

            <div className='section-desc'>Email Verified:</div>
            <div className='section-name'>{user === null ? '' : user.emailVerified.toString()}</div>

            <div className='section-desc'>UID:</div>
            <div className='section-name'>{user === null ? '' : user.uid}</div>

            <div className='section-desc'>Created At:</div>
            <div className='section-name'>{user === null ? '' : user.metadata.creationTime}</div>

            <div className='section-desc'>Last Signed In:</div>
            <div className='section-name'>{user === null ? '' : user.metadata.lastSignInTime}</div>

            <div onClick={logout} className='user--action---button'>Logout</div>
            <div onClick={delaccvis} className='user--action---button'>Delete Account</div>
            <div className={errVis2}>{pageErr2.toString()}</div>
        </div>
    </body>
  );
}

export default App;