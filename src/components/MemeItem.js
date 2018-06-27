import React from 'react';
import '../styles/index.css';
class MemeItem extends React.Component {
  render() {
    return(
      <div className="meme-item">
        <img
        src={this.props.meme.url}
        alt={this.props.meme.name}
        className="meme-img"
      />
      <p className="meme-txt">
        {this.props.meme.name}
      </p>
      </div>
    );
  }
}

export default MemeItem;
