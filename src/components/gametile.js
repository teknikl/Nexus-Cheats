import React from 'react';
import '../App.css';

class Gametile extends React.Component {
    render() {
      return <div className='gametile'>
        <img style={{
            borderRadius: '4px',
            marginTop: '10px',
            width: '225px'
        }}  src={require(`../images/game_images/${this.props.src}`)} alt={this.props.alt} />
        <div className='gametile--name'>{this.props.name}</div>
      </div>;
    }
}

export default Gametile;