import React from 'react';

export default class Child extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.Actions.dummyAction();
  }

  render() {
    return(
      <div>Yo</div>
    );
  }
}
