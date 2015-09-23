import React from 'react';
import {ResponseType} from '../constants/Enums';
import UserResponseFaceMood from './UserResponseFaceMood';
import UserResponseTextInput from './UserResponseTextInput';
import UserResponseMultipleChoice from './UserResponseMultipleChoice';
import UserResponseMultipleSelection from './UserResponseMultipleSelection';


export default class ResponsePane extends React.Component {
  constructor(props) {
    super(props);
    this.handleResponseType = this.handleResponseType.bind(this);
  }

  handleResponseType(currentSurveyCall) {
    if (this.props.ChatStore.botThinking) {
      return null;
    }
    if (this.props.ChatStore.currentlyDrillDown) {
      switch (currentSurveyCall.drillDownResponse.type) {
      case ResponseType.MultipleChoice:
        return <UserResponseMultipleChoice {...this.props}/>;
      case ResponseType.MultipleSelection:
        return <UserResponseMultipleSelection {...this.props}/>;
      default:
        return <div>Response Type Error</div>;
      }
    } else {
      switch (currentSurveyCall.response.type) {
      case ResponseType.None:
        return null;
      case ResponseType.FaceMood:
        return <UserResponseFaceMood {...this.props}/>;
      case ResponseType.TextEntry:
        return <UserResponseTextInput {...this.props}/>;
      case ResponseType.MultipleChoice:
        return <UserResponseMultipleChoice {...this.props}/>;
      case ResponseType.MultipleSelection:
        return <UserResponseMultipleSelection {...this.props}/>;
      default:
        return <div>Response Type Error</div>;
      }
    }

  }

  render() {
    const currentSurveyID = this.props.ChatStore.currentSurveyID;
    const currentSurveyCall = this.props.ChatStore.survey[currentSurveyID];
    return <div className='ResponsePane'>{this.props.ChatStore.surveyIsReady ? this.handleResponseType(currentSurveyCall): 'Please Wait...'}</div>;
  }
}
