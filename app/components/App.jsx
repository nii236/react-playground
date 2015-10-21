import React from 'react';
import AltContainer from 'alt/AltContainer';
import Store from 'app/stores/Store';
import Actions from 'app/actions/Actions';
import Child from 'app/components/Child';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      text: "hi",
      anotherThing: 5
    }
  }

  componentDidMount() {
    Actions.dummyAction("Action message");
    Store.fetchAsync();
  }

  componentDidUpdate() {
    console.log("Component has updated");
  }

  handleClick() {
    Actions.dummyAction();
  }

  render() {
    return(
      <AltContainer
          actions={{Actions: Actions}}
          stores={{Store: Store}}
      >
        <Child/>
        <button className="btn btn-primary" onClick={this.handleClick}>Push here</button>
      </AltContainer>
    );
  }
}
