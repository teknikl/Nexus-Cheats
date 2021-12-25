import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Tag from '../../components/tag.js';
import Client from '../../components/client.js';
import '../../App.css'

function App() {

  let clients = [
    { link: 'https://wallhax.com/hacks/csgo/', game: 'csgo', src: 'wallhax.png', name: 'Wallhax', desc: 'Features include our Deadly Bone Aimbot, 3D ESP, Mouse Driven Menu and more..', colour_a: 'yellow', dot_a: 'dot', tag_a: 'ESP', colour_b: 'red', dot_b: 'dot', tag_b: 'AIMBOT', colour_c: 'green', dot_c: 'dot', tag_c: 'PAID' },
    { link: 'https://onetap.com', game: 'csgo', src: 'onetap.png', name: 'Onetap', desc: 'Hundreds of features such as Aimbot, Wallhack, and Anti-Cheat Protection.', colour_a: 'yellow', dot_a: 'dot', tag_a: 'ESP', colour_b: 'red', dot_b: 'dot', tag_b: 'AIMBOT', colour_c: 'green', dot_c: 'dot', tag_c: 'PAID' },
  ];

  let tags = [
    { name: 'FPS', colour: 'yellow'},
    { name: 'PvP', colour: 'green'},
    { name: 'Popular', colour: 'red'},
    { name: 'Valve', colour: 'blue'},
  ];

  // Calls when page first renders
  useEffect(() => {
    document.title = `Nexus | CSGO` /* <- MANUAL INPUT REQUIRED */
  }, [])

  const data = {
    name: 'CSGO',
    link: 'CSGO',
    src: 'CSGO.png',
    desc: 'Counter-Strike: Global Offensive (CS:GO) is a multiplayer first-person shooter developed by Valve.',
  }

  return (
    <body>
        <div className='nav-button--notselected'><Link to='/Nexus'>Home</Link></div><div className='nav-button--notselected'><Link to='/Nexus/Browse'>Browse</Link></div><div className='nav-button--arrow'>❯</div><div className='nav-button--selected'><Link to={`${data.link}`}>{data.name}</Link></div>
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
        <div className='client--wrapper'>
          {clients.map((client) => {
            return (
            <Client
              link={client.link}
              game={client.game}
              src={client.src}
              name={client.name}
              desc={client.desc}
              colour_a={client.colour_a}
              dot_a={client.dot_a}
              tag_a={client.tag_a}
              colour_b={client.colour_b}
              dot_b={client.dot_b}
              tag_b={client.tag_b}
              colour_c={client.colour_c}
              dot_c={client.dot_c}
              tag_c={client.tag_c}
            />
            )
          })}
        </div>
    </body>
  );
}

export default App;