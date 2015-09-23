import React from 'react';
import AltContainer from 'alt/AltContainer';
import Chatbox from 'app/components/Chatbox';
import ResponsePane from 'app/components/ResponsePane';
import ChatStore from 'app/stores/ChatStore';
import SurveyStore from 'app/stores/SurveyStore';
import ChatActions from 'app/actions/ChatActions';

export default class ChatContainer extends React.Component {
  constructor(props) {
    super(props);
    this.submitSurvey = this.submitSurvey.bind(this);
  }

  componentDidMount() {
    SurveyStore.fetchSurvey();
  }

  submitSurvey(chatLogID) {
    SurveyStore.submitSurvey(chatLogID);
  }

  render() {
    return(
      <AltContainer
          actions={{ChatActions: ChatActions}}
          stores={
            {
              ChatStore: ChatStore,
              SurveyStore: SurveyStore
            }
          }
      >
        <Chatbox/>
        <ResponsePane submitSurvey={this.submitSurvey}/>
      </AltContainer>
    );
  }
}
