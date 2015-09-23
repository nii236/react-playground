import React from 'react';
export default class LoadingMessage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      // TODO: Should not have ChatBox class, but will work for demo
      <div className="ChatBox">
        Loading...
      </div>
    );
  }
}
