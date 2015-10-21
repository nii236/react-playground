import React from 'react';

export default class Child extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.props.Actions.dummyAction()
  }

  render() {
    return(
      <div className="jumbotron">
        {this.props.Store.dummyState}
      </div>
    );
  }
}
