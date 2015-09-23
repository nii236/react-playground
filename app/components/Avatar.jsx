import React from 'react';
export default class Avatar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let imageURL = '';
    if (this.props.user === 'bot') {
      imageURL = '../assets/bot-avatar.svg';
    } else {
      imageURL = 'https://unsplash.it/112/112?image=669';
    }
    return(
        <div className={this.props.position}>
          <img 
              alt={this.props.user} 
              src={imageURL} 
          />
        </div>
    );
  }
}
