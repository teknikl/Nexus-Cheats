import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext, auth } from '../auth/auth.js';
import { deleteUser } from '@firebase/auth';
import { useHistory } from 'react-router-dom';
import { signOut } from '@firebase/auth';
import '../App.css';

function App() {

    const [verifyVis, setVerifyVis ] = React.useState ({
        verifyVis: '',
    });

  // Calls when page first renders
  useEffect(() => {
    document.title = 'Nexus | Account'
    setVerifyVis('verify---wrapper----invis');
  }, [])

  const history = useHistory();
  const { user } = React.useContext(AuthContext);

  const logout = () => {
    signOut(auth)
    .then(() => {
        history.push('/Nexus');
      })
      .catch((err) => {
        console.log(err);
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
        console.log(err);
      })
  };

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
        </div>
    </body>
  );
}

export default App;