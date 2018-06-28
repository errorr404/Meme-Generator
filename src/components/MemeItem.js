import React from 'react';
import '../styles/index.css';
class MemeItem extends React.Component {
  constructor() {
    super();
    this.state = {
      hovered: false
    }
  }
  render() {
    return(
      <div className="meme-item"
        onMouseEnter={()=> this.setState({hovered: true})}
        onMouseLeave={()=> this.setState({hovered: false})}>
        <img
        src={this.props.meme.url}
        alt={this.props.meme.name}
        className={this.state.hovered ? "meme-img darken-img": "meme-img"}
      />
      <p className={this.state.hovered ? "meme-txt": "no-txt"}>
        {this.props.meme.name}
      </p>
      </div>
    );
  }
}

export default MemeItem;
