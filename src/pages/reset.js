import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function App() {

  // Calls when page first renders
  useEffect(() => {
    document.title = 'Nexus | Email Sent'
  }, [])

  return (
    <body>
      <div className='bg'></div>
        <div className='nav-button--notselected'><Link to='/Nexus'>Home</Link></div><div className='nav-button--notselected'><Link to='/Nexus/Browse'>Browse</Link></div>❯<div className='nav-button--notselected'><Link to='/Nexus/Log-In'>Log In</Link></div>/<div className='nav-button--selected'><Link to='/Nexus/Log-In/Reset'>Reset Password</Link></div>
        <div className='reset---wrapper'>
            <div className='reset--title'>Email Sent</div>
            <div className='reset--desc'>A password reset email has been sent to your account. Please check your email account and click the link provided to reset your password.</div>
            <div className='reset--link---text'>Thanks,</div><Link to='/Nexus/Log-In'><div className='reset--link'>take me to login</div></Link>
            <div className='reset---wrapper----sep'>
             <div className='reset--link---text'>Didn't recieve an email?</div><div className='reset--link'>resend email</div>
            </div>
        </div>
    </body>
  );
}

export default App;