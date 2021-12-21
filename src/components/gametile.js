import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class Gametile extends React.Component {
    render() {
      return <div className='gametile'>
        <Link to={`Browse/${this.props.link}`}>
        <img style={{
            borderRadius: '4px',
            marginTop: '10px',
            width: '225px'
        }}  src={require(`../images/game_images/${this.props.src}`)} alt={this.props.alt} />
          <div className='gametile--name'>{this.props.name}</div>
        </Link>
      </div>
    }
}

export default Gametile;