import React from 'react';
import guid from '../utils/GUID';
import UserResponseTextInput from './UserResponseTextInput';
export default class UserResponseMultipleChoice extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(event) {
    const currentSurveyID = this.props.ChatStore.currentSurveyID;
    const thisSurveyIDHasDrillDown = this.props.ChatStore.survey[currentSurveyID].drillDown.type;
    const currentlyDrillDown = this.props.ChatStore.currentlyDrillDown;

    if (currentlyDrillDown) {
      this.props.ChatActions.pushUserDrillDownResponse(event);
      this.props.submitSurvey(currentSurveyID);
    } else {
      this.props.ChatActions.pushUserResponse(event);
      if (!thisSurveyIDHasDrillDown) {
        this.props.submitSurvey(currentSurveyID);
      }
    }
  }

  render() {
    const currentSurveyID = this.props.ChatStore.currentSurveyID;
    const currentSurvey = this.props.ChatStore.survey[currentSurveyID]; 
    const currentlyDrillDown = this.props.ChatStore.currentlyDrillDown;
    let choices = [];
    if (currentlyDrillDown) {
      choices = currentSurvey.drillDownResponse.choices;
    } else {
      choices = currentSurvey.response.choices;
    }

    return(
      <div className='UserResponseMultipleChoice'>
      {
        choices.map((choice, index) => {
          if (choice === 'Other') {
            return (
              <UserResponseTextInput 
                  key={index} 
                  {...this.props}
              />);
          } else {
            return (
              <div 
                  key={index} 
                  onClick={this.handleClick.bind(this, choice)}
              >
                  {choice}
              </div>
            );
          }
        })
      }
      </div>
    );
  }
}