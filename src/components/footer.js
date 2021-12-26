import React from 'react';
import '../App.css';

class Footer extends React.Component {
    render() {
      return <div className='footer'>
          <div className='footer--text-bold'>Welcome JTK ❮3</div><div className='footer--text'>| Developed by:</div><div className='footer--text-bold'>Archie Mourad</div>
          <a href='https://www.reddit.com/user/Vxielreddit'><div className='footer--link'>Reddit</div></a>
          <a href='https://discordapp.com/users/831344598138748958/'><div className='footer--link'>Discord</div></a>
          <a href='https://steamcommunity.com/id/Vxiel/'><div className='footer--link'>Steam</div></a>
          <a href='https://github.com/ArchieMourad'><div className='footer--link'>Github</div></a>
      </div>
    }
}

export default Footer;