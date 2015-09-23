import React from 'react';
import AltContainer from 'alt/AltContainer';
import Store from 'app/stores/Store';
import Actions from 'app/actions/Actions';
import Child from 'app/components/Child'
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.submitSurvey = this.submitSurvey.bind(this);
  }

  componentDidMount() {
    Store.fetchSurvey();
  }

  submitSurvey(chatLogID) {
    Store.submitSurvey(chatLogID);
  }

  render() {
    return(
      <AltContainer
          actions={{Actions: Actions}}
          stores={{Store: Store}}
      >
        <Child/>
      </AltContainer>
    );
  }
}
