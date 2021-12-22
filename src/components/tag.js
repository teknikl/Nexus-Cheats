import React from 'react';
import '../App.css';

class Tag extends React.Component {
    render() {
      return <div className={`game-tag--${this.props.colour}`}>
            <div className='game-tag--dot'></div>{this.props.name}
        </div>
    }
}

export default Tag;