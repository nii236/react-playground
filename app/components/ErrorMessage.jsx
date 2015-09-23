import React from 'react';
export default class ErrorMessage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div>
        Error: Fetch failed, please try again
      </div>
    );
  }
}
