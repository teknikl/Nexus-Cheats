import React from 'react';
import '../App.css';

class Client extends React.Component {
    render() {
      return <a href={this.props.link}><div className='client-tab'>
          <div className='client-tab--image'>
            <img src={require(`../images/client_images/${this.props.game}/${this.props.src}`)} alt={this.props.alt}></img>
         </div>
         <div className='client-tab--name'>{this.props.name}</div>
         <div className='client-tab--desc'>{this.props.desc}</div>
         <div className='client-tag--wrapper'>
            <div className={`client-tag--${this.props.colour_a}`}><div className={`client-tag--${this.props.dot_a}`}></div>{this.props.tag_a}</div><div className={`client-tag--${this.props.colour_b}`}><div className={`client-tag--${this.props.dot_b}`}></div>{this.props.tag_b}</div><div className={`client-tag--${this.props.colour_c}`}><div className={`client-tag--${this.props.dot_c}`}></div>{this.props.tag_c}</div>
         </div>
      </div>
      </a>
    }
}

export default Client;